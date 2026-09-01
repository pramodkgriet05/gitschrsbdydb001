import axios from "axios"
import { useEffect, useRef, useState } from "react"

import cricketpic from "../images/cricket.jpg"
import { Link, useNavigate, useParams } from "react-router-dom"
import { GET_USER_NAME } from "../Utils/Utils"
import api from "../src/api/Interaxios"

function Sportspage()
{
   let token=localStorage.getItem("token")
        console.log(token)
        let token1="Bearer"+" "+token;
       
   let userName=GET_USER_NAME()
            
            if(userName==null)
           {
            window.location="/"
           }


  let[sports1,setsports]=useState({eventname:"",  eventuniquename:"" ,day:"",month:"",year:"",description:"",uploadimages1:"",contenttype:""})

  let[uploadimages, setuploadimages]=useState({})


  let[files, setfiles]=useState([])
    let[filesVideos, setfilesVideos]=useState([])

   let[awsresposes,setawsresposes]=useState([])
      let[awsresposes1,setawsresposes1]=useState([])

 let {year}=useParams()
 let { type}=useParams()
let[pulleventsdetails,setpulleventsdetails]=useState(false)
let[pulleventdetailsdata, setpulleventdetailsdata]=useState({data:""})
let[filesizeerror,setfilesizeerror]=useState()
let[videodata,setvideodata]=useState({})




const [uploadedCount, setUploadedCount] = useState(0);
const [isUploading, setIsUploading] = useState(false);

const[image,setphotoselect]=useState(true)


const[video,setvideoselect]=useState(true)

let[showphoto,setshowphoto]=useState(true)
let[showvideo,setshowvideo]=useState(false)
 let[CT,setCT]=useState()
 let ct=""


let navigate=useNavigate()
let error=0
let ref1=useRef(null)
let ref2=useRef(null)
let ref3=useRef(null)
let ref4=useRef(null)
let ref5=useRef(null)
let ref6=useRef(null)
let ref7=useRef(null)
 
 

                 

 console.log(year)
  console.log(type)

     useEffect(()=>{
    
           async function pulldata()
            {
                 
                 try{
                  let ct="img"
    
                    //let apiresponse=await axios.get(`http://localhost:8080/m/s/sports/receive`)
                   // let apiresponse=await axios.get(`http://localhost:8080/m/s/${type}/${year}/receive`)
                   //let apiresponse=await axios.get(`http://65.2.25.249:8080/m/s/${type}/${year}/receive`,{headers:{Authorization:token1}})
 
                   //let apiresponse=await axios.get(`/m/s/${type}/${year}/receive`,{headers:{Authorization:token1}})
                   //let ct="image"
 
                   let apiresponse=await api.get(`/m/s/${type}/${year}/${ct}/receive`)

                    console.log("aws1",apiresponse)
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
     const eventUniqueName ="2026/"+"schdoc/"+type+"/"+CT+"/"+
      sports1.eventname.trim().replaceAll(" ", "_") + "_" + Date.now(); 
      console.log(eventUniqueName)

    setIsUploading(true);

    setUploadedCount(0);
    let i=0;

    try
        { 
            for( i=0;i<files.length;i++)
            {
                const eventphotos = new FormData();  

                 //console.log("file content type:",files[i]) const compressedFile = await compressImage(files[i]);



                eventphotos.append("academicyear", year)
                eventphotos.append("eventtype", type)
                eventphotos.append("eventname",sports1.eventname )
                eventphotos.append("description",sports1.description)
                eventphotos.append("day",sports1.day)
                eventphotos.append("month",sports1.month)
                eventphotos.append("year",sports1.year)
                eventphotos.append("eventuniquename", eventUniqueName )
                eventphotos.append("contenttype",CT)
                eventphotos.append("files",files[i])
                

                  console.log(files[i]);
                 // await axios.post(`http://localhost:8080/m/s/sports1`,eventphotos)
                  //await axios.post(`http://65.2.25.249:8080/m/s/sports1`,eventphotos,{headers:{Authorization:token1}})

                 //await axios.post(`/api/m/s/sports1`,eventphotos,{headers:{Authorization:token1}})
                let apiresponse1 = await api.post(`/m/s/sports1`,eventphotos,{headers:{Authorization:token1}})
                console.log("jpg api response",apiresponse1)
                setvideodata(apiresponse1.data.message)
                console.log(apiresponse1.data.message)
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
                eventdata.append("contenttype",CT)

//                await axios.post(`http://localhost:8080/m/s/sports`,eventdata)
                //await axios.post(`http://65.2.25.249:8080/m/s/sports`,eventdata,{headers:{Authorization:token1}})
                //await axios.post(`/api/m/s/sports`,eventdata,{headers:{Authorization:token1}})
               let apiresponse= await api.post(`/m/s/sports`,eventdata,{headers:{Authorization:token1}})
                // console.log(apiresponse)
                setUploadedCount(0);
                //window.location=`/stdinfo/c1/u/${year}/${type}`

                ct=CT
                let apiresponse1=await api.get(`/m/s/${type}/${year}/${ct}/receive`) 
                setawsresposes(apiresponse1.data)
                setIsUploading(false)

                ref1.current.value=""
                ref2.current.value=""
                ref3.current.value=""
                ref4.current.value=""
                ref5.current.value=""
                ref6.current.value="select"
                ref7.current.value=""
  
                
} 
                  async function pulleventdetailsvideo(awsrespose)
              {
                console.log("data",awsrespose) 
                         navigate(`/stdinfo/c1/u/${year}/${type}/video`, {
                         state: {
                            s3path:`${awsrespose.eventuniquename}`,
                             eventname:`${awsrespose.eventname}`
                         }
                         });           
                        
                      }

                async function pulleventdetails(awsrespose)
              {

                console.log("data",awsrespose)

                 setpulleventsdetails(true)
                setpulleventdetailsdata({...pulleventdetailsdata, data:awsrespose.eventuniquename })

                        navigate(`/stdinfo/c1/u/${year}/${type}/d`, {
                        state: {
                            s3path:`${awsrespose.eventuniquename}`,
                            eventname:`${awsrespose.eventname}`
                        }
                        });              }


                        async function deleteeventdetails(awsrespose)
                        {
                          console.log("ct in del fun",ct)
                          const delrec=window.confirm(" Do you want to DELETE   "+"' "+awsrespose.eventname +" '"+"   record.?");
                          if(delrec)
                          {
                          console.log("delete event details:",awsrespose)
                          console.log(awsrespose.eventuniquename)
                           let data={
                             "eventuniquename":awsrespose.eventuniquename
                           }

                           await api.post(`/m/s/sports/last`,data)

                           ct=awsrespose.contenttype
                          console.log("ct",ct)
                          let apiresponse=await api.get(`/m/s/${type}/${year}/${ct}/receive`)

                     
                          setawsresposes(apiresponse.data) 
                          }


                         //await api.get(`/m/s/sports/last`)  
                        }


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

                 /* function handleselecttype(e)
                  {
                    console.log(e.target.value)
                    let value=e.target.value
                    if(value=="image")
                    {
                      setphotoselect(false)
                      setvideoselect(true)
                      setCT("image")


                    }
                    if(value=="video")
                    {
                      setphotoselect(true)
                      setvideoselect(false)
                      setCT("video")

                    }
                     setUploadedCount(0)
                    setIsUploading(false)
                    setfilesizeerror("")
                    setfiles([]) 
                    //setCT("")
                    //setsports()
                  }*/
                  function checkfilestype(CT)
                  {
                     //console.log("CT length",CT.length)
                     console.log("CT",CT)
                      

                    setfilesizeerror("")
                    if(CT==="select")
                    {
                      //break

                      setfilesizeerror("select either image or video")  
                      console.log(" select either image and video ")  

                    }

                    let val=CT
                    //setfilesizeerror("") 
                    console.log("content type123  : ",val)
                    if(val==="image")
                    {
                      let fileSize=5
                      checkfilestype1(fileSize)

                    }
                    if(val==="video")
                    {
                      let fileSize=30
                      checkfilestype1(fileSize) 
                    } 
                  }
                  function checkfilestype1(filesize)
                  { 
                     let error=0;

                    for(let file of files)
                    {
                      let val=CT
                      let actualfilesize=1024*1024*filesize
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
                          submitapi()
                        }  
                  }  
async function selectphotofun()
{
  setshowvideo(false)
  setshowphoto(true)
   ct="image"
  let apiresponse=await api.get(`/m/s/${type}/${year}/${ct}/receive`)

                    console.log("awsasdasd",apiresponse)
                    //console.log(apiresponse.data)
                    setawsresposes(apiresponse.data) 

  
}
async function selectvideofun() 
{
   ct="video"

  setshowvideo(true)
  setshowphoto(false)
  let apiresponse=await api.get(`/m/s/${type}/${year}/${ct}/v/receive`)

                    console.log("awsasdasd",apiresponse)
                    //console.log(apiresponse.data)
                    setawsresposes(apiresponse.data) 

} 

{/* <video
                            width="300"
                            controls
                            src={videodata}
                        ></video> */}

                         
                    

    return(
       <div className="container ">
              
                <div className="row">
                  <div  style={{position:"relative"}}>
                          <Link  to={`/stdinfo`} style={{ position:"absolute",  right:"100px"}}className="btn btn-primary ms-3 btn-12 hm-lg-button">Back</Link>
                          <Link  to={`/`} style={{ position:"absolute", right:"10px"}}className="btn btn-primary ms-3 btn-12 hm-lg-button">Home</Link>
                  </div>
                   
                        <div className="col-12 "  >
                        
                        <h1 className="school-title">School Name</h1>
                        </div>
                          <div>
                            <h1 className="mt-12 school-title-1 mt1-12"> Document of {type} 2025-26</h1>
                        </div>
                        </div>
                        
                        <div className="row mt-5">
                          
                        <div className="col-4 col-md-2">
                            <h3 className="school-title-2 mt5">Event Name:</h3>
                            <h3 className="school-title-2 mt25">Event.Date:</h3>
                            <h3 className="school-title-2 mt25">Description:</h3>
                            <h3 className="school-title-2 mt25" style={{ marginTop: "65px" }}>Photo/Video</h3>
                            <h3  className="school-title-2 mt35" style={{ marginTop: "15px" }} >Select Files:</h3>
                            
   {/* // let[sports,setsports]=useState({eventname:"",day:"",month:"",year:"",Description:"",uploadimages:""}) */}
                        </div>
                         
                        <div className="col-6 col-md-2">
                        <input type="text" ref={ref1} className='form-control   ' placeholder='Event Name' onChange={e=>setsports({...sports1, eventname:e.target.value})} ></input>
                        <div className="d-flex">
                                <input type="text" ref={ref2} className='form-control    '   placeholder='Day'  onChange={e=>setsports({...sports1, day:e.target.value})} ></input>
                                <input type="text" ref={ref3} className='form-control   '  placeholder='Month' onChange={e=>setsports({...sports1, month:e.target.value})} ></input>
                                <input type="text" ref={ref4} className='form-control   '   placeholder='Year' onChange={e=>setsports({...sports1, year:e.target.value}) } ></input>

                        </div>
                         <textarea  type="text" ref={ref5} className='form-control ' rows="3" placeholder='Description' onChange={e=>setsports({...sports1, description:e.target.value})}  ></textarea >
       <select className="form-control mt-2 " ref={ref6} onChange={e=>setCT(e.target.value)}>
        <option className="ip-12">select</option>
        <option className="ip-12">image</option>
        <option className="ip-12">video</option>
       </select>
                         <input type="file" multiple  ref={ref7} className='form-control   mt-2  ' placeholder='Upload Files' onChange={e=>setfiles(Array.from(e.target.files))} ></input>
                         {
                          filesizeerror&&<div>
                            <h6 style={{color:"red"}}>{filesizeerror}</h6>
                            </div>
                         }
                         {/* <input type="file"  className='form-control std_rec_add1 mt-3' placeholder='Upload Videos' onChange={e=>setfiles(Array.from(e.target.files))} ></input> */}

                         <button className='btn btn-primary mt-2 hm-lg-button' disabled={isUploading} onClick={e=>checkfilestype(CT)}>submit</button>
                        </div> 
                </div>

                <div className="mt-5">
                  <button  className="btn btn-primary mt-2 hm-lg-button" onClick={e=>selectphotofun()}>PHOTO</button>
                  <button  className="btn btn-primary mt-2 ms-5 hm-lg-button" onClick={e=>selectvideofun()}>VIDEO</button> 
                </div>
                 <div className="row">
        <div className="col-12 ">
        {/* this div is about the upload info */}
        {

          isUploading==true&&
          <div className="d-flex">
           <h4>please wait while Uploading files: </h4><h4 style={{color:"red"}}>  {uploadedCount}</h4><h4>/</h4><h4>{files.length}</h4>
            </div>
        }

        </div>
      </div>
      <div>
        {showvideo==true && <div className="row">
                  {
                    awsresposes.length>0 ?
                    awsresposes.map((awsrespose,i)=>(
                     <div className="col-4 col-md-2 btn1-12" key={i} style={{ marginTop: "100px" }} >
                    <h3 className="cd-t"  > {  awsrespose.eventname} {awsrespose.day}.{awsrespose.month}.{awsrespose.year}</h3>
                     <div className="card mobile-card-9 gap-9"  style={{width: '14rem' }} >
                     <img src={awsrespose.urlthumbnail} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9 " alt="..."/> 

                           <div className="text-center">               
                            <h5 className="card-title cd-t u-9 "> {awsrespose.description} </h5>
                          </div>
                          <button className='btn btn-primary mt-2 c-btn-2' onClick={e=>pulleventdetailsvideo(awsrespose)}>click here</button> 
                          </div>
                      </div> 
                    )) 
                         :
                        <h1 className="mt-5 school-title-1">No VIDEO Data Found</h1>
                 }
                 </div>}
                 </div>
     

                <div className="row  ">

                  {
                  showphoto==true &&<div className="row">
                   
                 {
                   awsresposes.length>0 ?  (
                    awsresposes.map((awsrespose,i) => (  
                                                         <div className="col-4 col-md-2 btn1-12" key={i} style={{ marginTop: "100px" }} >
                                                            <h3 className="cd-t"  > {  awsrespose.eventname} {awsrespose.day}.{awsrespose.month}.{awsrespose.year}</h3>
                                                                <div className="card mobile-card-9 gap-9"  style={{width: '14rem' }} >
                                                                <img src={awsrespose.urlthumbnail} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9 " alt="..."/> 
                                                                    <div className="text-center">
                                                                         
                                                                        <h5 className="card-title cd-t u-9 "> {awsrespose.description} </h5>
                                                                    </div>
                                                                    <div>
                                                                        <button className='btn btn-primary mt-2 c-btn' onClick={e=>pulleventdetails(awsrespose)}>click here</button>
                                                                        <button className='btn btn-primary mt-2  c-btn c-btn-1' onClick={e=>deleteeventdetails(awsrespose)}>Delete</button>

                                                                    </div>
                                                                </div>
                                                        </div>
                                                        )))
                                                         :
                                                         <h1 className="school-title-1"> No PHOTO data found</h1>
                                                        }
                                                   </div>   }
                 </div>
                 
                 </div>
    )
}

export default Sportspage