import { useEffect, useRef, useState } from "react";
import { GET_USER_NAME } from "../../../Utils/Utils";
import Navbar from "../../Navbar/Navbar"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import api from "../../api/Interaxios";

function PullEventDetails_V_S()
{

       let userName=GET_USER_NAME()
                
                if(userName==null)
               {
                window.location="/"
               }


    let token=localStorage.getItem("token")
    let token1="Bearer"+" "+token;

    
    let[files, setfiles]=useState([])
    const [uploadedCount, setUploadedCount] = useState(0);
    const [isUploading, setIsUploading]  = useState(false);
    const fileInputRef = useRef();
     let {year}=useParams()
     let { type}=useParams()
     let location =  useLocation();
      let navigate=useNavigate()
      let[disimagess, setimagesdis]=useState([])
      let ref7=useRef(null)



     let data=location.state.s3path
     let ename=location.state.eventname

     console.log("data",data)
     console.log("ename",ename)



     useEffect(() => { 
  async function fetchData() { 

   // let res = await axios.post(`http://localhost:8080/m/s/sportsall`,{path:data});
        //let res = await axios.post(`http://65.2.25.249:8080/m/s/sportsall`,{path:data},{headers:{Authorization:token1}})
        //let res = await api.post(`/m/s/sportsall`,{path:data},{headers:{Authorization:token1}})
                       let res = await api.post(`/sports/pullall`,{path:data})
        
         //console.log(res.data);
    console.log(res)
    setimagesdis(res.data)
  }
  fetchData();
}, []);


function submitapi1()
{
    console.log("")
}

function checkfilestype1()
                  { 
                     let error=0;

                    for(let file of files)
                    {
                      let val="video"
                      let actualfilesize=1024*1024*10
                      let filesizeuser=file.size
                      console.log("file size",file.size)
                        console.log("filetype",file.type)
                        
                        if(filesizeuser>actualfilesize)
                        {
                          error=error+1 
                          console.log("file size greater than " +filesize +" mb")
                          setfilesizeerror(val+" file size greater than " +filesize +" mb")
                          break
                       
                        }
                        if(!file.type.startsWith(val+"/"))
                        {
                          console.log("file type:",val)
                          error=error+1
                          alert("selected file must be "+val+" type")
                          break
                        }  
                    }
                    
                    if(error===0)
                        {
                          console.log("call api: error value",error)
                          submitapi1()
                        }  
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

                 //const compressedFile = await compressImage(files[i]);


                eventphotos.append("eventuniquename", data )
               
                eventphotos.append("files",files[i])

                  console.log(files[i]);
                 // await axios.post(`http://localhost:8080/m/s/sports12`,eventphotos)
                  //await axios.post(`http://65.2.25.249:8080/m/s/sports12`,eventphotos,{headers:{Authorization:token1}})
                let apiresponse1 = await api.post(`/m/s/sports1/v`,eventphotos,{headers:{Authorization:token1}})
    
                  setUploadedCount(i + 1);
            }
             //let res = await axios.post(`http://localhost:8080/m/s/sportsall`,{path:data});
             //let res = await axios.post(`http://65.2.25.249:8080/m/s/sportsall`,{path:data},{headers:{Authorization:token1}})
             //let res = await api.post(`/m/s/sportsall`,{path:data},{headers:{Authorization:token1}})
              let res = await api.post(`/sports/pullall`,{path:data})


    //console.log(res.data);
              console.log(res)
              setimagesdis(res.data)
                              ref7.current.value=""

            }
                catch(e)
            {
                console.log(e)
            }     
            setIsUploading(false)
             setUploadedCount(0);
             setfiles([]);
            //  setsports({
            //               eventname: "",
            //               eventuniquename: "",
            //               day: "",
            //               month: "",
            //               year: "",
            //               description: "",
            //               uploadimages1: ""
            //             }); 
           
}


            
    
    
    return(

       <div className="container">
                  <div>
                    <div className="col-12 "  > 
                        <Navbar /> 
                    </div>    
                    <div className="d-flex ">
                       <h5 className="ms-5 fz-13 mo h-10 " >Academic Year:{year}</h5>
                      <h5 className="ms-5 fz-13 mo h-10" >Event Type: {type}</h5>
                      <h5 className="ms-5 fz-13 mo h-10" >Event Name:  {ename}</h5>


                    </div>                  
                    <div class="card" style={{ marginTop: "70px" }}>
                    <div class="card-header d-flex">
                      
                          <Link  to={`/s1/stdinfo/c1/u/${year}/${type}`} className="btn btn-primary ms-3 hm-lg-button">Back</Link>
                         <Link  to={`/`} className="btn btn-primary ms-3 hm-lg-button">Home</Link>

                      <h5 className="ms-5 do" >Academic Year:{year}</h5>
                      <h5 className="ms-5 do" >Event Type: {type}</h5>
                      <h5 className="ms-5 do" >Event Name:  {ename}</h5>

                         
                    </div>
                    <div class="card-body " style={{  height: '600px', overflow: "auto"  }} >
                      {/* <h5 class="card-title">Special title treatment</h5>
                      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                       <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}> 
                          <div>
                            <h4>Add more files</h4>
                      <input type="file"  multiple className='form-control std_rec_add1'  ref={ref7} placeholder='Upload Images' onChange={e=>setfiles(Array.from(e.target.files))} ></input>
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

                           <div className="col-3 ms-5  me-2" key={index}   >
                                        {/* <h3  > {  awsrespose.eventname} {awsrespose.day}.{awsrespose.month}.{awsrespose.year}</h3> */}
                                            <div className="card mt-5"    >
                                            <video width="300" controls  key={index} src={image}  className=" shadow pic-10" alt=""     style={{ cursor: "pointer", objectFit: "cover" }} onClick={() => openImage(index)}/>


                                                <div className="card-body">
                                                    <h5 className="card-title"> </h5>
                                                    {/* <p className="card-text"> {awsrespose.description} </p> */}
                                                
                                                    {/* <button className='btn btn-primary mt-2' onClick={e=>pulleventdetails(awsrespose)}>click here</button> */}
                                                </div>
                                            </div>
                                    </div>
                                               ))
                      }



                          
                    
                       </div>
                       </div>
                  </div>
                        </div>        
                </div>



    )
}

export default PullEventDetails_V_S



