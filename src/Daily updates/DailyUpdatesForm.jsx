import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GET_USER_NAME } from "../../Utils/Utils";

function DailyUpdatesForm()
{

    let userName=GET_USER_NAME()
                
                if(userName==null)
               {
                window.location="/"
               }
    
    let[dailyupdates, setdailyupdates]=useState({})
    let[file, setfile]=useState()

    let {classid}=useParams()
 let { sectionid}=useParams()
 let {y}=useParams()

 let[sub, setsub]=useState()
 let[month,setmonth]=useState()
 let[showsubject, setshowsubject]=useState(false)
 let[pulleventdetailsdata,setpulleventdetailsdata]=useState([])
 let[successmsg,setsuccessmsg]=useState(false)
 let[successmsg1,setsuccessmsg1]=useState(false)




    async function submitapi()
    {
          const eventUniqueName =
           dailyupdates.projectname.trim().replaceAll(" ", "_") + "_" + Date.now();
       
    
    
        // setIsUploading(true);
        // setUploadedCount(0);
        // let i=0;
    
         try
             { 
                      const eventphotos = new FormData();   
                    eventphotos.append("projectname", dailyupdates.projectname)
                    eventphotos.append("subject", dailyupdates.subject)
                    eventphotos.append("date",new Date().getDate())
                   // eventphotos.append("month",new Date().getMonth()+1) 
                    eventphotos.append("month", dailyupdates.mnb) 
                    eventphotos.append("year",new Date().getFullYear())
                    eventphotos.append("description",dailyupdates.description)
                     eventphotos.append("standred",classid)
                     eventphotos.append("section",sectionid)
                    eventphotos.append("teachername",userName)
                    eventphotos.append("eventuniquename", eventUniqueName )
                   
                    eventphotos.append("file",file)
    
         
                      //await axios.post(`http://localhost:8080/m/s/duadd`,eventphotos)
                      await axios.post(`http://65.2.25.249:8080/m/s/duadd`,eventphotos)

                      window.location=`/stdinfo/dailyupdates/${y}/${classid}/${sectionid}`
                      setdailyupdates({})
                       setsuccessmsg(true)
                       setsuccessmsg1("Record added successfully")
                }
    
                    catch(e)
                {
                    console.log(e)
                }
                      
       //  window.location=`/stdinfo/c1/u/${y}/${classid}/${sectionid}`
                 
    }

    function month1(i,mnt)
    {
        setmonth(i)
        setshowsubject(true)
        setdailyupdates({...dailyupdates, month12:mnt})
      //   window.location=`/stdinfo/c1/u/${y}/${classid}/${sectionid}`


    }



    async function subject(a)
    {
                setdailyupdates({...dailyupdates, subj:a})

        //setsub({...sub,sub:a})

       let dupulldata={

            "acadamicyear":y,
            "documents":"documents",
            "standred":classid,
            "section":sectionid,
            "month":month,
            "subject":a
        }
        try
        {
       // let apiresponse= await axios.post(`http://localhost:8080/m/s/duaddpull`,dupulldata)
        let apiresponse= await axios.post(`http://65.2.25.249:8080/m/s/duaddpull`,dupulldata)

         console.log(dupulldata)
         console.log(apiresponse.data)
         setpulleventdetailsdata(apiresponse.data)
        
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
   async  function delrecordup(data)
    {
        console.log(data)
         let dupulldata={

            "acadamicyear":data.acadamicyear,
            "documents":"documents",
            "standred":data.standred,
            "section":data.section,
            "month":data.month,
            "subject":data.subject,
            "eventUniqueName":data.eventUniqueName
         }
                    //  let apiresponse= await axios.post(`http://localhost:8080/m/s/dudel`,dupulldata)
                      let apiresponse= await axios.post(`http://65.2.25.249:8080/m/s/dudel`,dupulldata)

                      //  window.location=`/stdinfo/dailyupdates/${y}/${classid}/${sectionid}`
                    //  let apiresponse1= await axios.post(`http://localhost:8080/m/s/duaddpull`,dupulldata)
                      let apiresponse1= await axios.post(`http://65.2.25.249:8080/m/s/duaddpull`,dupulldata)

         console.log(dupulldata)
                  setpulleventdetailsdata(apiresponse1.data)



    }
    return(
        
<div className="container">
    <div className="row">
        <Navbar/>
    </div>
     <div className="row mt-5 ">
                <div className="row">
                    <div className="col-12">

                    <h1 style={{ marginLeft:"480px",marginTop: "15px" }}>Daily Updates 2026-27</h1>
                    </div>
                </div>
            </div>




    <div className="row">
        {
            successmsg==true&&<div style={{color:"red"}}>
                {successmsg1}
                </div>
        }
        <div className="   col-2 " style={{ marginLeft:"20px",marginTop: "65px" }}>
                            <h3>Project Name:</h3>
                            <h3>Subject</h3>
                            <h3>Event.Date:</h3>
                            <h3>Description:</h3>
                            <h4 style={{ marginTop: "65px" }} >Upload Images:</h4>
       </div>


       <div className="   col-2" style={{ marginLeft:"20px",marginTop: "65px" }}>
                        <input type="text" className='form-control std_rec_add1 ' placeholder='Event Name' onChange={e=>setdailyupdates({...dailyupdates, projectname:e.target.value})} ></input>

                         <select className='form-control std_rec_add1 '    placeholder='select year' onChange={e=>setdailyupdates({...dailyupdates, subject:e.target.value})} >
                            <option>select class</option>
                                    <option>Hindi</option>
                                    <option>Telugu</option>
                                    <option>English</option>
                                    <option>Maths</option>
                                    <option>Science</option>
                                    <option>Social</option>
                                    <option>EV</option>
                                    
                        </select>
                            <div className="d-flex" >
                                    <input type="text" className='form-control std_rec_add1  ' value={new Date().getDate()}    ></input>
                                    {/* <input type="text" className='form-control std_rec_add1 ' value={new Date().getMonth()+1}   ></input> */}

                                      <input type="text" className='form-control std_rec_add1 ' placeholder="month"  onChange={e=>setdailyupdates({...dailyupdates, mnb:e.target.value})} ></input>

                                    <input type="text" className='form-control std_rec_add1 ' value={new Date().getFullYear()}   ></input>

                            </div>
                         <textarea  type="text" className='form-control '  rows="3" placeholder='Description' onChange={e=>setdailyupdates({...dailyupdates, description:e.target.value})}></textarea>
       
                         <input type="file"  className='form-control std_rec_add1 ' placeholder='Upload Images' onChange={e=>setfile(e.target.files[0])} ></input>

                         <button className='btn btn-primary mt-2'   style={{borderBottom: "3px solid #ccc",  margin: "6px 0" }}onClick={e=>submitapi()}>submit</button>
       </div>
        <div className="row">
        <div className="col-12" style={{marginTop:'100px'}}>

        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(1,"January" )}>January</button>
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1( 2,"February")}>February</button> 
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(3,"March")}>March</button>
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(4,"April")}>April</button>


        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(5,"May" )}>May</button>
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1( 6,"June")}>June</button> 
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
         <div className="row mt-5">
           
                 <h3>Daily Updates  </h3>
                  <div className="col-2 mt-1">
                 <h6> year<span style={{fontSize:"17px",color: "red" }}>: {y} </span></h6>  
                    <h6>class: <span style={{fontSize:"17px",  color: "red"}}>: {classid} </span></h6> 
                    <h6>Section:   <span style={{fontSize:"17px",  color: "red"}}>: {sectionid} </span></h6> 
                    <h6>Month: <span style={{fontSize:"17px",  color: "red"}}>: {dailyupdates.month12} </span></h6>  
                    <h6>Subject <span style={{fontSize:"17px",  color: "red"}}>: {dailyupdates.subj} </span></h6>  

                 </div>
          <div className="col-2">
            <h5>   </h5> 
            

                </div>
              
              

            </div>
        <div className="col-12 " style={{marginTop:'40px'}}>
           
              <table className=" compact-table table table-sm align-middle table-striped table-hover">
                <thead>
                    <tr className="fw-bold" > 

                           <th >Subject</th> 
                          <th >Project Name</th> 

                           <th>Description</th>
                           <th>Teacher Name  </th>
                           <th>class</th> 
                           <th>sec</th>
                         
                           <th>Download file</th>
                           </tr>
                </thead>     
                     <tbody className="table-group-divider">
                    {
                        pulleventdetailsdata?.map((data, i)=>(

                            <tr key={i}>
                                 
                                    <td >
                                         {data.subject}
                                    </td>
                                     <td style={{  textAlign:"center"}}>
                                  {data.projectname}  
                                    </td>

                                     <td style={{  textAlign:"center"}}>
                                  {data.description}  
                                    </td>
                                      
                                     <td style={{ textAlign:"center", fontSize:"20px"}}>
                                         {data.name}
                                    </td>
                                     <td style={{ textAlign:"center"}} >
                                         {data.standred}
                                    </td>
                                    <td style={{ textAlign:"center"}} >
                                         {data.section}
                                    </td>
                                     <td style={{ textAlign:"center"}} >
                                      {/* <a href={data.imgpreurl}  target="_blank"     rel="noopener noreferrer" >{data.imgfilename}</a> */}
                                      <span style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }} onClick={() => window.open(data.imgpreurl, "_blank")}>{data.imgfilename}</span>
                                    </td>
                                    <td>
                                        <button className="btn btn-primary" onClick={e=>delrecordup(data)}>Delete</button>
                                    </td>
                                    
                                    
                                     
                                </tr>
                             

                        ))

                    }
                    
                           </tbody>
                           </table>
        </div>
        </div>


    </div>
    </div>
    )
}
export default DailyUpdatesForm