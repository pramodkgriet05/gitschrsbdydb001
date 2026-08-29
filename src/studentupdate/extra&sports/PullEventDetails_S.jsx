import axios, { Axios } from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { GET_USER_NAME } from "../../../Utils/Utils";
import api from "../../api/Interaxios";

function PullEventDetails_S()
{
let userName=GET_USER_NAME()
            
            if(userName==null)
           {
            window.location="/"
           }



  let location =  useLocation();

  let token=localStorage.getItem("token")
        console.log(token)
        let token1="Bearer"+" "+token;
     
 
  let[disimagess, setimagesdis]=useState([])
   const [selectedIndex, setSelectedIndex] = useState(null);
    let[files, setfiles]=useState([])
    const [uploadedCount, setUploadedCount] = useState(0);
    const [isUploading, setIsUploading]  = useState(false);
    const fileInputRef = useRef();

    let {year}=useParams()
 let { type}=useParams()

 let navigate=useNavigate()

  
    let ref7=useRef(null)

 console.log(year)
 console.log(type)

   const styles = {
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  fullImage: {
    maxWidth: "80%",
    maxHeight: "80%"
  },
  close: {
    position: "absolute",
    top: 20,
    right: 20,
    fontSize: "20px"
  },
  prev: {
    position: "absolute",
    left: 20,
    fontSize: "30px"
  },
  next: {
    position: "absolute",
    right: 20,
    fontSize: "30px"
  }
};


    
    console.log(location.state.s3path)
    let data=location.state.s3path
    let ename=location.state.eventname

    console.log("datappo",data)
    console.log("ename",ename)

    useEffect(() => {

  async function fetchData() {

   // let res = await axios.post(`http://localhost:8080/m/s/sportsall`,{path:data});
        //let res = await axios.post(`http://65.2.25.249:8080/m/s/sportsall`,{path:data},{headers:{Authorization:token1}})
        //let res = await api.post(`/m/s/sportsall`,{path:data},{headers:{Authorization:token1}})
        let res = await api.post(`/sports/pullall`,{path:data})

            //let res = await axios.post(`http://localhost:8080/api/m/s/sportsall`,{path:data},{headers:{Authorization:token1}});

    //console.log(res.data);
    console.log(res)
    setimagesdis(res.data)
  }

  fetchData();

}, []);

 // open image
  const openImage = (index) => {
    setSelectedIndex(index);
  };

  // close modal
  const closeImage = () => {
    setSelectedIndex(null);
  };

  // next image
  const nextImage = () => {
    if (selectedIndex < disimagess.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  // previous image
  const prevImage = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  async function compressImage(file) {
  return new Promise((resolve) => {
    const img = new Image();
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = (e) => {
      img.src = e.target.result;
    };

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      let width = img.width;
      let height = img.height;

      // resize if large
      const maxWidth = 1280;
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);

      // compress
      canvas.toBlob(
        (blob) => {
          resolve(new File([blob], file.name, { type: "image/jpeg" }));
        },
        "image/jpeg",
        0.7 // reduce more if needed (0.6 / 0.5)
      );
    };
  });
}

async function submitapi1()
{
     
    setIsUploading(true);
    setUploadedCount(0);
    let i=0;

    try
        { 
            for( i=0;i<files.length;i++)
            {
                const eventphotos = new FormData();  

                 const compressedFile = await compressImage(files[i]);


                eventphotos.append("filepath", data )
               
                eventphotos.append("files",compressedFile)

                  console.log(files[i]);
                 // await axios.post(`http://localhost:8080/m/s/sports12`,eventphotos)
                  await axios.post(`http://65.2.25.249:8080/m/s/sports12`,eventphotos)

                  setUploadedCount(i + 1);


            }
             //let res = await axios.post(`http://localhost:8080/m/s/sportsall`,{path:data});
             let res = await axios.post(`http://65.2.25.249:8080/m/s/sportsall`,{path:data});

    //console.log(res.data);
              console.log(res)
              setimagesdis(res.data)
            }
                catch(e)
            {
                console.log(e)
            }     
            setIsUploading(false)
             setUploadedCount(0);
             setfiles([]);
             setsports({
                          eventname: "",
                          eventuniquename: "",
                          day: "",
                          month: "",
                          year: "",
                          description: "",
                          uploadimages1: ""
                        });
            
         
           
}

    return(
      <div className="container">
                  <div>
                    <div className="col-12 "  > 
                        <h1 className="school-title">School Name</h1>
                    </div>      
                    <div className="d-flex ">
                       <h5 className="ms-5 fz-13 mo" >Academic Year:{year}</h5>
                      <h5 className="ms-5 fz-13 mo" >Event Type: {type}</h5>
                      <h5 className="ms-5 fz-13 mo" >Event Name:  {ename}</h5>


                    </div>          

                    <div class="card" style={{ marginTop: "70px" }}>
                    <div class="card-header d-flex">
                      
                          <Link  to={`/s1/stdinfo/c1/u/${year}/${type}`} className="btn btn-primary ms-3 hm-lg-button">Back</Link>
                         <Link  to={`/`} className="btn btn-primary ms-3 hm-lg-button">Home</Link>

                      <h5 className="ms-5 dn do" >Academic Year:{year}</h5>
                      <h5 className="ms-5 dn do" >Event Type: {type}</h5>
                      <h5 className="ms-5 dn do" >Event Name:  {ename}</h5>

                         
                    </div>
                    <div class="card-body " style={{  height: '600px', overflow: "auto"  }} >
                      {/* <h5 class="card-title">Special title treatment</h5>
                      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                       <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}> 
                          <div>
                            <h4>Add more files</h4>
                      <input type="file"  multiple ref={ref7} className='form-control std_rec_add1'  placeholder='Upload Images' onChange={e=>setfiles(Array.from(e.target.files))} ></input>
                      </div>
                      
                          <div className="col-12"></div>
                          {isUploading && (
                                            <div>
                                                Uploading {uploadedCount} / {files.length}
                                            </div>
                                        )}
               <div className="col-12"></div>

                      
                
                      {
                          disimagess.map((image,index) =>(

                                
                                  // <img   key={index} src={image} alt="" width="150"  height="150"   style={{ cursor: "pointer", objectFit: "cover" }} onClick={() => openImage(index)}/>

                           <div className="col-2  " key={index} style={{ marginTop: "90px" }} >
                                        {/* <h3  > {  awsrespose.eventname} {awsrespose.day}.{awsrespose.month}.{awsrespose.year}</h3> */}
                                            <div   >
                                            <img   key={index} src={image}  className=" shadow pic-10" alt="" width="150"  height="170"   style={{ cursor: "pointer", objectFit: "cover" }} onClick={() => openImage(index)}/>


                                                <div className="card-body">
                                                    <h5 className="card-title"> </h5>
                                                    {/* <p className="card-text"> {awsrespose.description} </p> */}
                                                
                                                    {/* <button className='btn btn-primary mt-2' onClick={e=>pulleventdetails(awsrespose)}>click here</button> */}
                                                </div>
                                            </div>
                                    </div>
                                               ))
                      }  
                      {

                         selectedIndex !== null && (
                           <div
                            style={styles.modal}>

                                    <button onClick={closeImage} style={styles.close}>X</button>

                                    <button onClick={prevImage} style={styles.prev}>{"<"}</button>

                                    <img
                                      src={disimagess[selectedIndex]}
                                      alt=""
                                      style={styles.fullImage}
                                    />
                                    <button onClick={nextImage} style={styles.next}>{">"}</button>

                            </div>
                          )}
                         
                    
                       </div>
                       </div>
                  </div>
                        </div>        
                </div>

                 

    )
}
export default PullEventDetails_S






