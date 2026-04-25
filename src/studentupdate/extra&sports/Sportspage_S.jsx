import axios from "axios"
import { useEffect, useState } from "react"

import cricketpic from "../../../images/cricket.jpg"
import { Link, useNavigate, useParams } from "react-router-dom"
import { GET_USER_NAME } from "../../../Utils/Utils";


function Sportspage_S()
{
   let token=localStorage.getItem("token")
        console.log(token)
        let token1="Bearer"+" "+token;
       
   let userName=GET_USER_NAME()
            
            if(userName==null)
           {
            window.location="/"
           }


  let[sports1,setsports]=useState({eventname:"",  eventuniquename:"" ,day:"",month:"",year:"",description:"",uploadimages1:""})

  let[uploadimages, setuploadimages]=useState({})


  let[files, setfiles]=useState([])
   let[awsresposes,setawsresposes]=useState([])
 let {year}=useParams()
 let { type}=useParams()
let[pulleventsdetails,setpulleventsdetails]=useState(false)
let[pulleventdetailsdata, setpulleventdetailsdata]=useState({data:""})

const [uploadedCount, setUploadedCount] = useState(0);
const [isUploading, setIsUploading] = useState(false);

let navigate=useNavigate()

                 

 console.log(year)
  console.log(type)

     useEffect(()=>{
    
           async function pulldata()
            {
                 
                 try{
    
                    //let apiresponse=await axios.get(`http://localhost:8080/m/s/sports/receive`)
                   // let apiresponse=await axios.get(`http://localhost:8080/m/s/${type}/${year}/receive`)
                    //let apiresponse=await axios.get(`http://65.2.25.249:8080/m/s/${type}/${year}/receive`,{headers:{Authorization:token1}})
                    let apiresponse=await axios.get(`/api/m/s/${type}/${year}/receive`,{headers:{Authorization:token1}})

                    console.log("aws",apiresponse)
                    console.log(apiresponse.data)
                    setawsresposes(apiresponse.data) 
                }
                 
                catch(error)
                {
                    console.log(error)
                }
    
            } 
         pulldata() 
        },[])  

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






async function submitapi()
{
     const eventUniqueName =
      sports1.eventname.trim().replaceAll(" ", "_") + "_" + Date.now();
   


    setIsUploading(true);
    setUploadedCount(0);
    let i=0;

    try
        { 
            for( i=0;i<files.length;i++)
            {
                const eventphotos = new FormData();  

                 const compressedFile = await compressImage(files[i]);


                eventphotos.append("academicyear", year)
                eventphotos.append("eventtype", type)
                eventphotos.append("eventname",sports1.eventname )
                eventphotos.append("description",sports1.description)
                eventphotos.append("day",sports1.day)
                eventphotos.append("month",sports1.month)
                eventphotos.append("year",sports1.year)
                eventphotos.append("eventuniquename", eventUniqueName )
               
                eventphotos.append("files",compressedFile)

                  console.log(files[i]);
                 // await axios.post(`http://localhost:8080/m/s/sports1`,eventphotos)
                  await axios.post(`http://65.2.25.249:8080/m/s/sports1`,eventphotos)

                  setUploadedCount(i + 1);

            }

              

            }

                catch(e)
            {
                console.log(e)
            }
              const eventdata = new FormData();
                eventdata.append("academicyear", year);
                eventdata.append("eventtype", type);
                eventdata.append("eventname", sports1.eventname);
                eventdata.append("description", sports1.description);
                eventdata.append("day", sports1.day);
                eventdata.append("month", sports1.month);
                eventdata.append("year", sports1.year);
                eventdata.append("eventuniquename", eventUniqueName);
//                await axios.post(`http://localhost:8080/m/s/sports`,eventdata)
                await axios.post(`http://65.2.25.249:8080/m/s/sports`,eventdata)

                  setUploadedCount(0);
                window.location=`/stdinfo/c1/u/${year}/${type}`
                setIsUploading(false)
              
            
}
                
                async function pulleventdetails(awsrespose)
              {

                console.log("data",awsrespose)

                 setpulleventsdetails(true)
                setpulleventdetailsdata({...pulleventdetailsdata, data:awsrespose.eventuniquename })

                        navigate(`/s/stdinfo/c1/u/${year}/${type}/d`, {
                        state: {
                            s3path:`${awsrespose.eventuniquename}`,
                            eventname:`${awsrespose.eventname}`
                        }
                        });              }


             /*async function pulleventdetails1(awsrespose)
             {
                console.log("data",awsrespose)

                let pulldata={

                    
                    type:sports,
                    day:awsrespose.day,
                    month:awsrespose.month,
                    year:awsrespose.year,
                    eventname:awsrespose.eventname
                }
                  await axios.post(`http://localhost:8080/m/s/sportsall`,pulldata)
 

             }*/
   
    return(

        

            <div className="container ">
              
                <div className="row">
                  <div  style={{position:"relative"}}>
                          <Link  to={`/stdinfo`} style={{ position:"absolute", top:"100px",right:"100px"}}className="btn btn-primary ms-3">Back</Link>
                          <Link  to={`/`} style={{ position:"absolute", top:"100px",right:"10px"}}className="btn btn-primary ms-3">Home</Link>


                           </div>
                   
                        <div className="col-12   d-flex justify-content-center align-items-center" style={{ width:"50vh",height: "30vh"}}>
                        
                        <h1>School Name </h1>
                        </div>
                         
                       
                        

                          <div>
                            <h1> Document of {type} 2025-26</h1>
                        </div>
                        </div>
                        
                           
                         

                <div className="row">
                   
                 {
                    awsresposes.map((awsrespose,i) => (   
                                                        <div className="col-4  " key={i} style={{ marginTop: "170px" }} >
                                                            <h3  > {  awsrespose.eventname} {awsrespose.day}.{awsrespose.month}.{awsrespose.year}</h3>
                                                                <div className="card"  style={{width: '20rem',height: '20rem'}} >
                                                                <img src={awsrespose.urlthumbnail} className="  profile_pic2 shadow " alt="..."/> 
                                                                    <div className="card-body">
                                                                        <h5 className="card-title"> </h5>
                                                                        <p className="card-text"> {awsrespose.description} </p>
                                                                    
                                                                        <button className='btn btn-primary mt-2' onClick={e=>pulleventdetails(awsrespose)}>click here</button>
                                                                    </div>
                                                                </div>
                                                        </div>

                                       
                              
                                

                            ))


                  }
                 </div>
                
                        

             </div>
             
        
    )
}

export default Sportspage_S