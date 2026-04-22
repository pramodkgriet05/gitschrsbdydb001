import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect, useRef, useState } from "react";
import { GET_USER_NAME } from "../../Utils/Utils";
import axios from "axios";

function ActivitiesByClassForm()
{

    let token=localStorage.getItem("token")
        console.log(token)
        let token1="Bearer"+" "+token;
        console.log(token1)
       
   let userName=GET_USER_NAME()
            
            if(userName==null)
           {
            window.location="/"
           }


  let[sports1,setsports]=useState({eventname:"",  eventuniquename:"" ,day:"",month:"",year:"",description:"",uploadimages1:""})

  let[uploadimages, setuploadimages]=useState({})


  let[files, setfiles]=useState()
   let[awsresposes,setawsresposes]=useState([])
 let {y,classid,sectionid}=useParams()
 //let { type}=useParams()

let[pulleventsdetails,setpulleventsdetails]=useState(false)
let[pulleventdetailsdata, setpulleventdetailsdata]=useState({data:""})

const [uploadedCount, setUploadedCount] = useState(0);
const [isUploading, setIsUploading] = useState(false);

let[dailyupdates,setdailyupdates]=useState({})
 let[showsubject, setshowsubject]=useState(false)
 let[month,setmonth]=useState()
const fileRef = useRef();   
let error=0;
let[errormsg,seterrormsg]=useState(false)
 let[apierrormsg, setapierrormsg]=useState(false)
                    let[apierrormsg1, setapierrormsg1]=useState(false)
                    let[name,setname]=useState()
                      let [stdcode1,setstdcode1]=useState()



let navigate=useNavigate() 
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
      dailyupdates.projectname.trim().replaceAll(" ", "_") + "_" + Date.now();
   


    setIsUploading(true);
    setUploadedCount(0);
    let i=0;

    try
        { 
            for( i=0;i<files.length;i++)
            {
                const eventphotos = new FormData();  

                 const compressedFile = await compressImage(files[i]);


                eventphotos.append("academicyear", y)
                eventphotos.append("eventtype", dailyupdates.projectname)
                eventphotos.append("classid", classid )
                eventphotos.append("sectionid", sectionid)
                eventphotos.append("subject", dailyupdates.subject)
                eventphotos.append("month", dailyupdates.mnb)


               
                 eventphotos.append("eventuniquename", eventUniqueName )
               
                eventphotos.append("files",compressedFile)

                 // console.log(files[i]);
                // await axios.post(`http://localhost:8080/m/s/abci`,eventphotos,{headers:{ Authorization:token1}})
                await axios.post(`http://65.2.25.249:8080/m/s/abci`,eventphotos,{headers:{Authorization:token1}})

                  setUploadedCount(i + 1);

            }  
            }

                catch(e)
            {
                console.log(e)
            }
              const eventdata = new FormData();
                eventdata.append("academicyear", y);
                eventdata.append("eventtype", "abc");
                 eventdata.append("classid", classid )
                eventdata.append("sectionid", sectionid)
                 eventdata.append("subject", dailyupdates.subject)
                 

                eventdata.append("eventname", dailyupdates.projectname);
                eventdata.append("description", dailyupdates.description);
                eventdata.append("day", new Date().getDate());
                eventdata.append("month", dailyupdates.mnb);
                eventdata.append("year", new Date().getFullYear());
                eventdata.append("updatedby",userName)
                eventdata.append("eventuniquename", eventUniqueName);
                eventdata.append("projecthead", dailyupdates.projecthead )
                eventdata.append("projectby", stdcode1)
                eventdata.append("projectstdname",name)



              //  await axios.post(`http://localhost:8080/m/s/abcd`,eventdata,{headers:{Authorization:token1}})
                await axios.post(`http://65.2.25.249:8080/m/s/abcd`,eventdata,{headers:{Authorization:token1}})


                let userdata={

                  "academicyear":y,
                  "month":dailyupdates.mnb,
                  "classid":classid,
                  "sectionid":sectionid,
                  "subject":dailyupdates.subject

                }



              //let apiresponse = await axios.post(`http://localhost:8080/m/s/abcd/p`,userdata,{headers:{Authorization:token1}})
              let apiresponse = await axios.post(`http://65.2.25.249:8080/m/s/abcd/p`,userdata,{headers:{Authorization:token1}})
                 fileRef.current.value=" ";

              // console.log(apiresponse)
                setawsresposes(apiresponse.data)
                


             //   await axios.post(`http://65.2.25.249:8080/m/s/abcd`,eventdata,{headers:{Authorization:token1}}) 
                  setUploadedCount(0);
                 setIsUploading(false) 
                 setdailyupdates({})
                 setfiles(null)
}
 
 function month1(i,mnt)
    {
      console.log(i)
      console.log(mnt)
       setmonth(i)
        setshowsubject(true)
        setdailyupdates({...dailyupdates, mnb:mnt})
     }
    async function subject(a)
    {
                setdailyupdates({...dailyupdates, subject:a})

        //setsub({...sub,sub:a})

       let dupulldata={

            "academicyear":y,
            "classid":classid,
            "sectionid":sectionid,
            "month":month,
            "subject":a

        }


        try
        {
      //  let apiresponse= await axios.post(`http://localhost:8080/m/s/abcd/p`,dupulldata,{ headers:{Authorization:token1}})
        let apiresponse= await axios.post(`http://65.2.25.249:8080/m/s/abcd/p`,dupulldata,{ headers:{Authorization:token1}})
         console.log(dupulldata)
         console.log(apiresponse.data)
         setawsresposes(apiresponse.data)
        
        }
        catch(e)
        {
            console.log(e)
        }
         
         dupulldata={

             "acadamicyear":" ",
            "documents":" ",
            "standred:":" ",
            "section": " ",
            "month": " ",
            "subject": " "
         }
    }

    async function pulleventdetails(awsrespose)
              { 
                        navigate(`/stdinfo/abc/${y}/d`, { state: {
                          s3path:`${awsrespose.eventuniquename}`,
                          acadamicyear:`${awsrespose.academicyear}`,
                          classid:`${awsrespose.classid}`,
                          description:`${awsrespose.description}`,
                          eventname:`${awsrespose.eventname}`,
                          sectionid:`${awsrespose.sectionid}`,
                          subject:`${awsrespose.subject}`,
                          projectby:`${awsrespose.projectby}`,
                          projecthead:`${awsrespose.projecthead}`,
                          projectstdname:`${awsrespose.projectstdname}`,
                        
                        }});
              }


               function ssssss()
                {
                  if(error===1)
                  {
                  console.log("Enter 10 digit no:1")
                  }
                  else
                  {
                    console.log("ok")
                  }
                }

              async function stdcode(e)
              {
                
                
                console.log(e.target.value)
                let std=e.target.value
              
                setstdcode1(std)

                if(std.length===0||std.length===10)
                {
                  //console.log("Enter 10 digit no")
                  //submitapi()
                 // let apiresponse=await axios.post("http://localhost:8080/m/s/checkstd",{std:std},{headers:{Authorization:token1}})
                  let apiresponse=await axios.post("http://65.2.25.249:8080/m/s/checkstd",{std:std},{headers:{Authorization:token1}})

                  console.log(apiresponse)
                  console.log(apiresponse.data)
                  let checkerror=apiresponse.data
                   


                              if(checkerror.length===0)
                              {
                                console.log("no data")
                                setapierrormsg(true)
                                setapierrormsg1(false)
                                setname("")


                              }
                              else
                              {
                                console.log("record exist:")
                                setapierrormsg1(true)
                                setapierrormsg(false)
                                setname(apiresponse.data)
                              }

                   seterrormsg(false)
                   setapierrormsg(false)

                }
                else
                {
                  error=1
                  seterrormsg(true) 
                   setapierrormsg1(false)
                    setapierrormsg(false)
                    setname("")

                }

               
                


                console.log(apiresponse)

              }

              
              



                                                                  








    return(

<div className="container">

    <div className="row">
        <div className="col-12">
            <Navbar />
        </div>
    </div>

    <div className="row">
        
                    <div className="col-12">
                    <h1 style={{ marginLeft:"480px",marginTop: "105px" }}>Activities By Class 2026-27</h1>
                    </div>
    </div>
    <div className="row">

         <div className="   col-2 " style={{ marginLeft:"20px",marginTop: "65px" }}>
                            <h3>Project Name:</h3>
                            <h3>Subject</h3>
                            <h3 className="mb-3 ">Event.Date:</h3>
                            <h3 className="mb-5 ">Project Head</h3>
                            <h5 className="mb-5 ">Project By(std.code)</h5>
                            <h3 className="mb-5 ">Student Name</h3>
                            <h3>Description:</h3>
                            
                            <h4 style={{ marginTop: "65px" }} >Upload Images:</h4>
          </div>

       <div className="   col-2" style={{ marginLeft:"20px",marginTop: "65px" }}>

       <input type="text" className='form-control std_rec_add1 ' ref={fileRef} placeholder='Event Name' onChange={e=>setdailyupdates({...dailyupdates, projectname:e.target.value})} ></input>
        <select className='form-control std_rec_add1 ' ref={fileRef}   placeholder='select year' onChange={e=>setdailyupdates({...dailyupdates, subject:e.target.value})} >
                            <option>select subject</option>
                                    <option>HINDI</option>
                                    <option>TELUGU</option>
                                    <option>ENGLISH</option>
                                    <option>MATHS</option>
                                    <option>SCIENCE</option>
                                    <option>SOCIAL</option>
                                    <option>EV</option>
         </select>
          <div className="d-flex" >
                                    <input type="text" className='form-control std_rec_add1' ref={fileRef} value={new Date().getDate()}    ></input>
                                    {/* <input type="text" className='form-control std_rec_add1 ' value={new Date().getMonth()+1}   ></input> */}

                                      <input type="text" className='form-control std_rec_add1 ' ref={fileRef} placeholder="month"  onChange={e=>setdailyupdates({...dailyupdates, mnb:e.target.value})} ></input>

                                    <input type="text" className='form-control std_rec_add1 ' ref={fileRef} value={new Date().getFullYear()}   ></input>

          </div>
         <input type="text" className='form-control std_rec_add1 mb-4' ref={fileRef} placeholder='Project Head' onChange={e=>setdailyupdates({...dailyupdates, projecthead:e.target.value})} ></input>
         
         {
          errormsg==true&& 
           <h6 style={{color:"red"}}>Enter 10 digit No.</h6>
         }


         <input type="text" className='form-control std_rec_add1  mt-2' ref={fileRef} placeholder='Std Code' onChange={(e)=>stdcode(e)} ></input>
         {apierrormsg==true&& 
         
            <h6 style={{color:"red"}}>Student Code Wrong</h6>
         }
          {
          apierrormsg1==true&&
          <h6 style={{color:"green"}}>FOUND</h6>
          
         }
         <input type="text" className='form-control std_rec_add1  mt-3' ref={fileRef} placeholder="name"  value={name }  style={{color:"red" ,fontSize:"20px"}}></input>
           
         
        
         
        




          <textarea  type="text" className='form-control '  rows="3" placeholder='Description' ref={fileRef} onChange={e=>setdailyupdates({...dailyupdates, description:e.target.value})}></textarea>
       
          <input type="file" multiple className='form-control std_rec_add1 ' ref={fileRef} placeholder='Upload Images' onChange={e=>setfiles(Array.from(e.target.files))} ></input>

           <button className='btn btn-primary mt-2'  disabled={isUploading} style={{borderBottom: "3px solid #ccc",  margin: "6px 0" }}onClick={e=>submitapi()}>submit</button>
      
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
      <div className="row">
        {/* this div is about button month and sub */}
        <div className="col-12" style={{marginTop:'100px'}}>

        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(1,"January" )}>January</button>
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1( 2,"February")}>February</button> 
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(3,"March")}>March</button>
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(4,"April")}>April</button>


        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(5,"May" )}>May</button>
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(6,"June")}>June</button> 
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(7,"July")}>July</button>
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(8,"August")}>August</button>

        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(9,"Septembet" )}>Septembet</button>
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1( 10,"October")}>October</button> 
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(11,"November")}>November</button>
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(12,"December")}>December</button>


       </div>
      </div>

       <div className="row"  style={{marginTop:'30px'}}>
        <div className="col-12">
        {showsubject==true&&
        <div>
        
        <button className='btn btn-primary mt-2' style={{marginTop:'20px'}}onClick={e=>subject( "Hindi")  }>Hindi</button>
        <button className='btn btn-primary mt-2 ms-2' style={{marginTop:'20px'}}onClick={e=>subject( "Telugu")  }>Telugu</button>
        <button className='btn btn-primary mt-2 ms-2' style={{marginTop:'20px'}}onClick={e=>subject( "English")  }>English</button>
        <button className='btn btn-primary mt-2 ms-2' style={{marginTop:'20px'}}onClick={e=>subject( "Maths")  }>Maths</button>
        <button className='btn btn-primary mt-2 ms-2' style={{marginTop:'20px'}}onClick={e=>subject( "Science")  }>Science</button>
        <button className='btn btn-primary mt-2 ms-2' style={{marginTop:'20px'}}onClick={e=>subject( "Social")  }>social</button>
        <button className='btn btn-primary mt-2 ms-2' style={{marginTop:'20px'}}onClick={e=>subject( "EV")  }>EV</button>
        </div>
        }
        </div>

       </div>


      <div className="row">
        
        <div className="col-6 mt-3 me-5">
          <h3>List Of Activities</h3>
                 <h6 style={{marginTop:"20px"}}> year<span style={{fontSize:"17px",color: "red" }}>: {y} </span></h6>  
                    <h6>class: <span style={{fontSize:"17px",  color: "red"}}>: {classid} </span></h6> 
                    <h6>Section:   <span style={{fontSize:"17px",  color: "red"}}>: {sectionid} </span></h6> 
                    <h6>Month: <span style={{fontSize:"17px",  color: "red"}}>: {dailyupdates.mnb} </span></h6>  
                    <h6>Subject <span style={{fontSize:"17px",  color: "red"}}>: {dailyupdates.subject} </span></h6> 
  

        </div> 
      </div>


      <div className="row">

        {
                    awsresposes.map((awsrespose,i) => (   
                                                        <div className="col-4  " key={i} style={{ marginTop: "170px" }} >
                                                            <h3  > {  awsrespose.eventname} {awsrespose.day}.{awsrespose.month}.{awsrespose.year}</h3>
                                                                <div className="card"  style={{width: '14rem',height: '20rem'}} >
                                                                <img src={awsrespose.urlthumbnail} className="  profile_pic2 shadow " alt="..."/> 
                                                                    <div className="card-body">
                                                                        <h5 className="card-title"> </h5>
                                                                        <p className="card-text"> {awsrespose.description} </p>
                                                                        <p className="card-text">Project By: {awsrespose.updatedby } </p>
                                                                        <button className='btn btn-primary mt-2' onClick={e=>pulleventdetails(awsrespose)}>click here</button>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                         ))
                                                        }
                      </div>





       
       

         

    </div>

    










</div>)
   
}

export default ActivitiesByClassForm