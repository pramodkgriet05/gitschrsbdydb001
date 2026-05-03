import { useLocation, useNavigate, useParams } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import pic from "../pics/profile/profile_pic.jpg"
import { useEffect, useState } from "react"
import axios from "axios"



function Std_info_page_all()
{

    let location=useLocation()
    let navigate=useNavigate()

    let {y}=useParams()

    let [tabs, settabs]=useState({marks:false,fees:false,activities:false,dailyactivities:false,stdatten:false})
    let[marks1,setmarks]=useState()
    let[awsresposes2,setawsresposes2]=useState()
    let[index, setIndex]=useState(null)
    let std=location.state.stdid
    //console.log("123",stdcode)
    let token=localStorage.getItem("token")
                 
                let token1="Bearer"+" "+token;
                let[data,setdata]=useState({})
                let[pulleventdetailsdata,setpulleventdetailsdata]=useState()
                let[dataa,setdataa]=useState({})
                let[data4,setdata4]=useState({})
                let[data5,setdata5]=useState({})
                let[dailyupdates, setdailyupdates]=useState({})
                let[month,setmonth]=useState()
                let[showtable,setshowtable]=useState(false)
                let[data6,setdata6]=useState({}) 







    useEffect(()=>{
    
           async function pulldata()
            {
                 
                 try{ 
                      //let apiresponse=await axios.post("http://localhost:8080/m/s/checkstd1",{std:std},{headers:{Authorization:token1}})
                     //let apiresponse=await axios.post("http://65.2.25.249:8080/m/s/checkstd1",{std:std},{headers:{Authorization:token1}})
                     let apiresponse=await axios.post(" /api/m/s/checkstd1",{std:std},{headers:{Authorization:token1}})


                      console.log("aws",apiresponse)
                    console.log(apiresponse.data)
                    setdata(apiresponse.data)
                 } 
                catch(error)
                {
                    console.log(error)
                } 
            } 
         pulldata() 
        },[])  

        async function markstab()
        {
           
            
           // let apiresponse=await axios.post("http://localhost:8080/m/s/checkstd2",{std:std},{headers:{Authorization:token1}})
            //let apiresponse=await axios.post("http://65.2.25.249:8080/m/s/checkstd2",{std:std},{headers:{Authorization:token1}})
            let apiresponse=await axios.post("/api/m/s/checkstd2",{std:std},{headers:{Authorization:token1}})

            console.log(apiresponse)
            setawsresposes2(apiresponse.data)



            console.log("markstab")
             settabs({...tabs,marks:true,fees:false,activity:false,dailyactivities:false})
        }
      async  function feestab()
        {
            try{
                    //let apiresponse=await axios.post("http://localhost:8080/m/s/checkstd3",{std:std},{headers:{Authorization:token1}})
                    //let apiresponse=await axios.post("http://65.2.25.249:8080/m/s/checkstd3",{std:std},{headers:{Authorization:token1}})
                    let apiresponse=await axios.post(" /api/m/s/checkstd3",{std:std},{headers:{Authorization:token1}})

            console.log(apiresponse)
            setdataa(apiresponse.data)
             console.log("feestab")
               settabs({...tabs,marks:false,fees:true,activity:false,dailyactivities:false})
            }
            catch(e)
            {
                console.log(e)

            }
        }
      async     function activitytab()
        { 
             try{
                   // let apiresponse=await axios.post("http://localhost:8080/m/s/checkstd4",{std:std},{headers:{Authorization:token1}})
                    //let apiresponse=await axios.post("http://65.2.25.249:8080/m/s/checkstd4",{std:std},{headers:{Authorization:token1}})
                    let apiresponse=await axios.post("/api/m/s/checkstd4",{std:std},{headers:{Authorization:token1}})

                    console.log(apiresponse)
                    setdata4(apiresponse.data)
                    console.log("activitytab")
                    settabs({...tabs,marks:false,fees:false,activity:true,dailyactivities:false})
            }
            catch(e)
            {
                console.log(e)

            } 

        }
        async function pulleventdetails(awsrespose)
              { 
                        navigate(`/stdinfo/abc/s/${y}/d`, { state: {
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

               function dailyactivitiestab()
              {
                                    settabs({...tabs,marks:false,fees:false,activity:false,dailyactivities:true})
                
              }
               async function stdatten()
              {
                let data={
                            stdcode:std,
                            academicyear:y
                        }
                console.log("atdatten")
                                    settabs({...tabs,marks:false,fees:false,activity:false,dailyactivities:false,stdatten:true})
                    //let apiresponse=await axios.post(`http://localhost:8080/api/std/attn/get/1`,data,{headers:{Authorization:token1}})
                    let apiresponse=await axios.post(`/api/std/attn/get/1`,data,{headers:{Authorization:token1}})

                    console.log(apiresponse)
                    setdata6(apiresponse.data)
              }
              function month1(i,mnt)
                {
                    console.log(mnt)
                    setmonth(i)
                   
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
                                    "standred":data.standred,
                                    "section":data.section,
                                    "month":month,
                                    "subject":a
                                  }
                            try
                            {
                            console.log(dupulldata)
                           //let apiresponse= await axios.post(`http://localhost:8080/m/s/duaddpull`,dupulldata,dupulldata,{headers:{ Authorization:token1}})
                            //let apiresponse= await axios.post(`http://65.2.25.249:8080/m/s/duaddpull`,dupulldata,{headers:{ Authorization:token1}})
                            let apiresponse= await axios.post(`/api/m/s/duaddpull`,dupulldata,{headers:{ Authorization:token1}})
 
                            console.log(dupulldata)
                            console.log(apiresponse.data)
                            setdata5(apiresponse.data)
                            setshowtable(true)
 
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






    return(

        <div className="container">
        
            <div className="row">
                <div className="col-12">
                    <Navbar />
                </div>
            </div> 
             
             <div className="row">
                <div className="col-12">
                    <h1 style={{marginLeft:"400px",marginTop:"80px",fontSize:"70px"}}>Student info Page</h1>

                </div>
             </div>

                       <div className="row" style={{marginTop: '100px'}}>
                        <div className=" col-12 card mt-3  "   style={{
                            
                            
                            width: '100rem',
                            backgroundColor: '#f9f9f9',
                            border: '2px solid #120c0c',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                            
                            
                            
                            }}>
                                <div className="row">
                                    <div className="col-4" >
                                        <img src={data.imgFileName} className="profile_pic4 mb-2"
                                            style={{
                                                
                                                    width:'20rem',
                                                    backgroundColor: '#f9f9f9',
                                                    border: '5px solid #7f7d7d',
                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'                                      
                                        
                                        }}></img> 
                                    </div>
                                     <div className="col-6" style={{marginBottom:"10px",marginTop:"20px"}}>

                    <div className="card mt-3" style={{
                           
                            width:'53rem',
                            backgroundColor: '#f9f9f9',
                            border: '2px solid #7f7d7d',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                        
                        
                        }}>
                     <div className="row">                                     
                      <div className="col-6">
                       <div className="card -body std_rec_add" >
                        <div className="d-flex">
                        <label style={{marginLeft:"10px",marginTop:"20px",marginBottom:"10px",marginRight:"5px"}}><strong>Std(rollno)</strong></label>
                        <input type="text" className='form-control std_rec_add1 ' value={data.rollno} style={{marginTop:"10px"}}   ></input>
                       </div>
                        <div className="d-flex">
                        <label style={{marginLeft:"10px",marginTop:"10px",marginBottom:"10px",marginRight:"5px"}}><strong>Name</strong></label>
                        <input type="text" className='form-control std_rec_add1 ' value={data.name} ></input>
                       </div>
                        <div className="d-flex">
                        <label style={{marginLeft:"10px",marginTop:"10px",marginBottom:"10px",marginRight:"5px"}}><strong>Std.code</strong></label>
                        <input type="text" className='form-control std_rec_add1 ' value={data.stdcode} ></input>
                       </div>
                        <div className="d-flex">
                        <label style={{marginLeft:"10px",marginTop:"10px",marginBottom:"10px",marginRight:"5px"}}><strong>Gender</strong></label>
                        <input type="text" className='form-control std_rec_add1 ' value={data.gender} ></input>
                       </div>
                        <div className="d-flex">
                        <label style={{marginLeft:"10px",marginTop:"10px",marginBottom:"10px",marginRight:"5px"}}><strong>DOB</strong></label>
                        <input type="text" className='form-control std_rec_add1 ' value={data.dob} ></input>
                       </div>
                        <div className="d-flex">
                        <label style={{marginLeft:"10px",marginTop:"10px",marginBottom:"10px",marginRight:"5px"}}><strong>DOJ</strong></label>
                        <input type="text" className='form-control std_rec_add1 ' value={data.doj}  style={{marginBottom:"10px"}}   ></input>
                       </div>
                       </div>
                       </div>


                        <div className="col-6"> 
                         <div className="card -body std_rec_add" >
                          <div className="d-flex">
                           <label style={{marginLeft:"10px",marginTop:"20px",marginBottom:"10px",marginRight:"5px"}}><strong>Father</strong></label>
                           <input type="text" className='form-control std_rec_add1 ' value={data.father} style={{marginTop:"10px"}}   ></input>
                          </div>
                          <div className="d-flex">
                           <label style={{marginLeft:"10px",marginTop:"10px",marginBottom:"10px",marginRight:"5px"}}><strong>Mobile</strong></label>
                           <input type="text" className='form-control std_rec_add1 ' value={data.mobile}   ></input>
                          </div>
                          <div className="d-flex">
                           <label style={{marginLeft:"10px",marginTop:"10px",marginBottom:"10px",marginRight:"5px"}}><strong>Class Teacher</strong></label>
                           <input type="text" className='form-control std_rec_add1 ' value={data.classteacher} style={{width:"285px"}}   ></input>
                          </div>
                          <div className="d-flex">
                           <label style={{marginLeft:"10px",marginTop:"10px",marginBottom:"10px",marginRight:"5px"}}><strong>Other</strong></label>
                           <input type="text" className='form-control std_rec_add1 ' value={data.other}   ></input>
                          </div>
                           </div>

                       </div>
                       
                       </div>

                    </div> 
                </div>       
                                
                                
                         </div>
                        </div>
                       </div>
                        <div className="row">

                        <div  style={{
                            borderBottom: "5px solid #bcb9b9",
                            margin: "6px 0",
                            marginTop:"100px"

                            }}></div>
                        
                             <div  style={{
                            borderBottom: "5px solid #bcb9b9",
                            margin: "6px 0"
                            }}>
                                    <button className="btn btn-primary" style={{marginLeft:"5px",marginBottom:"10px"}} onClick={e=>markstab()}>Marks</button>
                                    <button className="btn btn-primary" style={{marginLeft:"15px",marginBottom:"10px"}} onClick={e=>feestab()}>Fees</button>
                                    <button className="btn btn-primary" style={{marginLeft:"15px",marginBottom:"10px"}} onClick={e=>activitytab()}>Activities</button>
                                    <button className="btn btn-primary" style={{marginLeft:"15px",marginBottom:"10px"}} onClick={e=>dailyactivitiestab()}>Daily Project work</button>
                                    <button className="btn btn-primary" style={{marginLeft:"15px",marginBottom:"10px"}} onClick={e=>stdatten()}>Attendance</button>

               
                </div>
                </div>
                {
                     tabs.dailyactivities==true&&
                     <div>

                                <div style={{
                                            borderBottom: "1px solid #bcb9b9",
                                            margin: "6px 0"
                                            }}></div> 
                                         <div className="row">
                                            <div className="col-12" style={{marginTop:'5px'}}>

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
                                        <div>
                                        <button className='btn btn-primary mt-2' style={{marginTop:'20px'}}onClick={e=>subject( "Hindi")  }>Hindi</button>
                                        <button className='btn btn-primary mt-2 ms-2' style={{marginTop:'20px'}}onClick={e=>subject( "Telugu")  }>Telugu</button>
                                        <button className='btn btn-primary mt-2 ms-2' style={{marginTop:'20px'}}onClick={e=>subject( "English")  }>English</button>
                                        <button className='btn btn-primary mt-2 ms-2' style={{marginTop:'20px'}}onClick={e=>subject( "Maths")  }>Maths</button>
                                        <button className='btn btn-primary mt-2 ms-2' style={{marginTop:'20px'}}onClick={e=>subject( "Science")  }>Science</button>
                                        <button className='btn btn-primary mt-2 ms-2' style={{marginTop:'20px'}}onClick={e=>subject( "Social")  }>social</button>
                                        <button className='btn btn-primary mt-2 ms-2' style={{marginTop:'20px'}}onClick={e=>subject( "EV")  }>EV</button>
                                        </div>
                                    </div>
                                   
                                    <div style={{
                            borderBottom: "1px solid #bcb9b9",
                            margin: "6px 0", marginTop:'10px' 
                            }}> 
                                </div>
                                </div>
                      }
 
 
            
                    {
                     tabs.marks==true &&

                        <div className="row">
                        <div className="card mt-3"   style={{
                            
                            
                            width: '85rem',
                            backgroundColor: '#f9f9f9',
                            border: '2px solid #7f7d7d',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                                                        }}>


                           <div>
            <table className=" compact-table table table-sm align-middle table-striped table-hover mt-5">
                <thead>
                    <tr className="fw-bold"> 
                           <th>Rollno</th> 
                            
                            <th>Name asdasda </th>
                            <th>Exam.Name  </th> 
                            <th colSpan="3" >First.lang</th>
                            <th colSpan="3">Sec.lang</th>
                            <th colSpan="3">English</th>
                            <th colSpan="3">Maths</th>
                            <th colSpan="3">Science</th>
                            <th colSpan="3">Social</th>
                             {/* <th colSpan="3">E.V</th>
                            <th colSpan="3">E.V-1</th> */}
                            
                    </tr>
                     <tr className="fw-bold ">  
                           <th> </th> 
                           
                             <th>   </th>
                             <th>   </th>
                            <th>80</th>
                            <th>20</th>
                            <th>T</th>
                            <th>80</th>
                            <th>20</th>
                             <th>T</th>
                            <th>80</th>
                            <th>20</th>
                             <th>T</th>
                            <th>80</th>
                            <th>20</th>
                             <th>T</th>
                            <th>80</th>
                            <th>20</th>
                             <th>T</th>
                            <th>80</th>
                            <th>20</th>
                             <th>T</th>   
                             <th >Total</th>
                            <th>Grade</th>
                             <th>Teacher Feedback</th>
                             <th>Parent Feedback</th>
                    </tr>
                     </thead>
                <tbody className="table-group-divider">
       
                 {  
                    awsresposes2.map((stdrecord, i)=>(
                        <tr key={stdrecord.rollno}>
                        <td> 
                             {stdrecord.rollno }  
                            </td> 
                             
                        <td>
                            {stdrecord.name}
                        </td>
                        <td>
                            {stdrecord.examname}
                        </td>

                        <td>
                            {stdrecord.firstlangw}
                            
                        </td>
                         <td>
                            { stdrecord.firstlango}
                            
                        </td>
                       <td>
                            {stdrecord.tf }
                            
                        </td>
                      
                       
                         <td>
                             { stdrecord.seclangw}
                  
                        </td>
                         <td>
                          {stdrecord.seclango}
                            
                        </td>   
                         <td>
                            { stdrecord.ts }
                            
                      </td>

                          
                          <td>
                           { stdrecord.englishw}
                          </td>
                          <td>
                            {stdrecord.englisho }
                          </td>
                          <td>
                            { stdrecord.te }
                           </td>


                           <td>
                           { stdrecord.mathsw}
                          </td>
                          <td>
                           {stdrecord.mathso }
                          </td>
                          <td>
                            { stdrecord.tm }
                           </td>


                            <td>
                            { stdrecord.sciencew}
                          </td>
                          <td>
                            {stdrecord.scienceo }
                          </td>
                          <td>
                            { stdrecord.tsci }
                           </td>


                           <td>
                           { stdrecord.socialw}
                          </td>
                          <td>
                            { stdrecord.socialo }
                          </td>
                          <td>
                           { stdrecord.tsoc }
                           </td>
                          {/*  <td>
                            {index===i?(<input value={editcolomdata2.socialw} onChange={(e)=>updatesocialw(e)} style={{width:"40px"}} />):( stdrecord.socialw)}
                          </td>
                          <td>
                            {index===i?(<input value={editcolomdata2.socialo} onChange={(e)=>updatesocialo(e)} style={{width:"40px"}}  />):(stdrecord.socialo )}
                          </td>
                          <td>
                            {index===i?(<input value={(Number(editcolomdata2.socialw)+ Number(editcolomdata2.socialo))} onChange={(e)=>updatetsco(e)}  style={{width:"30px"}}/>):( stdrecord.tsoc )}
                           </td> */}
                           {/* <td>
                            {index===i?(<input value={editcolomdata2.socialw} onChange={(e)=>updatesocialw(e)} style={{width:"40px"}} />):( stdrecord.socialw)}
                          </td>
                          <td>
                            {index===i?(<input value={editcolomdata2.socialo} onChange={(e)=>updatesocialo(e)} style={{width:"40px"}}  />):(stdrecord.socialo )}
                          </td>
                          <td>
                            {index===i?(<input value={(Number(editcolomdata2.socialw)+ Number(editcolomdata2.socialo))} onChange={(e)=>updatetsco(e)}  style={{width:"30px"}}/>):( stdrecord.tsoc )}
                           </td> */}
                           

                            <td>
                               {index===i?((Number(editcolomdata2.socialw)+ Number(editcolomdata2.socialo))+ (Number(editcolomdata2.sciencew)+ Number(editcolomdata2.scienceo))
                              +  (Number(editcolomdata2.mathsw)+ Number(editcolomdata2.mathso))+ (Number(editcolomdata2.englishw)+ Number(editcolomdata2.englisho))
                              +  (Number(editcolomdata2.seclangw)+ Number(editcolomdata2.seclango))+  Number(editcolomdata2.firstlangw)+Number(editcolomdata2.firstlango)        ):                    (stdrecord.total)}                                  
                           </td>

                            <td>
                            { stdrecord.grade }
                          </td>
                           <td className="align-top">
                             <div style={{whiteSpace:"pre-wrap"}}> {stdrecord.teacherfeedback }</div> 
                          </td>
                           <td>
                            {index===i?(<textarea value={editcolomdata2.parentfeedback} onChange={(e)=>parentcomment(e)}  style={{
                                width:"120px",
                                height:"100px",
                                verticalAlign:"top",
                                padding:"5px",
                                resize:"vertical"
                            }}  />):   <div style={{whiteSpace:"pre-wrap"}}>{stdrecord.parentfeedback}</div>}
                                                </td>

                           

                           {/* <td>
                            {index===i?(<input value={(Number(editcolomdata2.socialw)+ Number(editcolomdata2.socialo))} onChange={(e)=>updatetsco(e)}  style={{width:"30px"}}/>):( stdrecord.tsoc )}
                           </td>
                           <td>
                            {index===i?(<input value={(Number(editcolomdata2.socialw)+ Number(editcolomdata2.socialo))} onChange={(e)=>updatetsco(e)}  style={{width:"30px"}}/>):( stdrecord.tsoc )}
                           </td>
                           <td>
                            {index===i?(<input value={(Number(editcolomdata2.socialw)+ Number(editcolomdata2.socialo))} onChange={(e)=>updatetsco(e)}  style={{width:"30px"}}/>):( stdrecord.tsoc )}
                           </td>
                          */}
                        {/*  <td>
                            {index===i?(<input value={editcolomdata.gender} onChange={(e)=>updateGender(e)}/>):(updateeditcolmdataR.ScienceW)}
                            
                        </td>
                         <td>
                            {index===i?(<input value={editcolomdata.gender} onChange={(e)=>updateGender(e)}/>):(updateeditcolmdataR.ScienceO)}
                            
                        </td>
                         <td>
                            {index===i?(<input value={editcolomdata.gender} onChange={(e)=>updateGender(e)}/>):(updateeditcolmdataR.TSci)}
                            
                        </td>*/}
                         
                        </tr>
                       
                    )) 
           }
              
             </tbody>
            </table>
          </div>            
                        </div>

                        </div> 
                     }
                    
                    {
                            tabs.fees==true&&
               <div className="row">
                    <div className="card mt-3"   style={{ 
                            width: '47rem',
                            backgroundColor: '#f9f9f9',
                            border: '2px solid #7f7d7d',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)' 
                            
                            }}>
                                <div className="card-body mt-3 mb-3" 
                                
                                 style={{ 
                            width: '45rem',
                            backgroundColor: '#f9f9f9',
                            border: '2px solid #7f7d7d',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                                 <div>
                                    <table className=" compact-table table table-sm align-middle table-striped table-hover">
                                        <thead>
                                            <tr className="fw-bold">
                                                <th style={{ textAlign:"center", fontSize:"20px"}}>act  amt</th > 
                                                <th style={{ textAlign:"center", fontSize:"20px"}}>term1</th>
                                                <th style={{ textAlign:"center", fontSize:"20px"}}>term2  </th>
                                                <th style={{ textAlign:"center", fontSize:"20px"}}>term3</th>
                                                <th style={{ textAlign:"center", fontSize:"20px"}}>term4</th>
                                                <th style={{ textAlign:"center", fontSize:"20px"}}>bal amount</th>
                                                <th style={{ textAlign:"center", fontSize:"20px"}}>total amount</th>

                                            </tr>
                                        </thead>
                                         <tbody className="table-group-divider">
                                         <tr>
                                            <td style={{ textAlign:"center", fontSize:"20px"}}>
                                                {dataa?.actualbalance}
                                            </td>
                                            <td style={{ textAlign:"center"}} >
                                                {dataa?.term1}
                                            </td>
                                            <td style={{ textAlign:"center"}} >
                                                {dataa?.term2}
                                            </td>
                                            <td style={{ textAlign:"center"}} >
                                                {dataa?.term3}
                                            </td>
                                            <td style={{ textAlign:"center"}} >
                                                {dataa?.term4}
                                            </td>
                                            <td style={{ textAlign:"center"}}  >
                                                {dataa?.remainingbalance}
                                            </td> 
                                            <td style={{ textAlign:"center"}}  >
                                                {dataa?.remainingbalance}
                                            </td> 
                                         </tr>
                                         </tbody>


                                    </table>
                                </div> 
                               </div> 
                        </div>
                       </div>
                    }
                   {
                            tabs.activity==true&&
               <div className="row">
                    <div className="card mt-3"   style={{
                            
                            
                            width: '85rem',height:"50rem",
                            backgroundColor: '#f9f9f9',
                            border: '2px solid #7f7d7d',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                            }}>
                                <div className="mt-5 ms-5">
                                     <div className="row">

                                     {
                                                 data4.map((awsrespose,i) => (   
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
                        </div>

                       </div>
                     }
                     {
                        tabs.dailyactivities==true&&
                        <div className="row">
                            <div className="card mt-3"   style={{
                                                    width: '85rem',height:"35rem",
                                                    backgroundColor: '#f9f9f9',
                                                    border: '2px solid #7f7d7d',
                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                                                    }}>
                             
                                <div className="col-12 mt-5 ms-5">
                                    <h3>Daily Updates  </h3>
                                        <div className="col-2 mt-1">
                                            <h6> year<span style={{fontSize:"17px",color: "red" }}>: {y} </span></h6>  
                                            <h6>class: <span style={{fontSize:"17px",  color: "red"}}>: {data.standred} </span></h6> 
                                            <h6>Section:   <span style={{fontSize:"17px",  color: "red"}}>: {data.section} </span></h6> 
                                            <h6>Month: <span style={{fontSize:"17px",  color: "red"}}>: {dailyupdates.month12} </span></h6>  
                                            <h6>Subject <span style={{fontSize:"17px",  color: "red"}}>: {dailyupdates.subj} </span></h6>  
                                        </div> 
                              </div> 
                            
                     <div className="row">
                     <div className="col-12 " style={{marginTop:'40px'}}>
           
            {
           showtable==true&&<div>
              <table className=" compact-table table table-sm align-middle table-striped table-hover">
                <thead>
                    <tr className="fw-bold" > 
                           <th >Date</th>
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
                        data5?.map((data, i)=>(

                            <tr key={i}>
                                    <td >
                                         {data.date}-{data.month}-{data.year}
                                    </td>
                                 
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
                                         {data.updatedby}
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
                                    {/* <td>
                                        <button className="btn btn-primary" onClick={e=>delrecordup(data)}>Delete</button>
                                    </td> */}
                                </tr>
                        ))

                    }
                           </tbody>
                           </table>
                           </div>
            }
        </div>
          </div>
           </div>
                        </div>
                     }
                     {
                        tabs.stdatten==true&& 
                            <div className="row">
                                <div className="card mt-3"   style={{
                                                    width: '95rem',height:"35rem",
                                                    backgroundColor: '#f9f9f9',
                                                    border: '2px solid #7f7d7d',
                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                                                    }}>
                             
                                <div className="col-12 mt-5 ms-5">
                                    <h3>Attendance  </h3> 
                                    <div>
                                        <table className="table compact-table table-sm align-middle table-striped table-hover" style={{margin:"auto"}} >
                <thead>
                    <tr className="fw-bold"  style={{ textAlign:"center", fontSize:"20px"}}> 
                             <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >JUNE</th>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >JULY</th>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >AUG</th>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >SEP</th>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >OCT</th>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >NOV</th>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >DEC</th>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >JAN</th>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >FEB</th>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >MAR</th>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >APR</th>


                            {/* <th colSpan="3" >APR</th> */}
                    </tr>
                    <tr>
                         <td style={{  textAlign:"center"}}>T </td>  
                        <td style={{  textAlign:"center"}}>P </td>
                        <td style={{  textAlign:"center"}}>A </td>
                        <td style={{  textAlign:"center"}}>T </td>
                        <td style={{  textAlign:"center"}}>P </td>
                        <td style={{  textAlign:"center"}}>A </td>
                        <td style={{  textAlign:"center"}}>P</td>
                        <td style={{  textAlign:"center"}}>T </td>
                        <td style={{  textAlign:"center"}}>A </td>
                        <td style={{  textAlign:"center"}}>T </td>
                        <td style={{  textAlign:"center"}}>P </td>
                        <td style={{  textAlign:"center"}}>A </td>
                        <td style={{  textAlign:"center"}}>T </td>
                        <td style={{  textAlign:"center"}}>P </td>
                        <td style={{  textAlign:"center"}}>A </td>
                        <td style={{  textAlign:"center"}}>T </td>
                        <td style={{  textAlign:"center"}}>P </td>
                        <td style={{  textAlign:"center"}}>A </td>
                        <td style={{  textAlign:"center"}}>T </td>
                        <td style={{  textAlign:"center"}}>P </td>
                        <td style={{  textAlign:"center"}}>A </td>
                        <td style={{  textAlign:"center"}}>T </td>
                        <td style={{  textAlign:"center"}}>P </td>
                        <td style={{  textAlign:"center"}}>A </td>
                        <td style={{  textAlign:"center"}}>T </td>
                        <td style={{  textAlign:"center"}}>P </td>
                        <td style={{  textAlign:"center"}}>A </td>
                        <td style={{  textAlign:"center"}}>T </td>
                        <td style={{  textAlign:"center"}}>P </td>
                        <td style={{  textAlign:"center"}}>A </td>
                        <td style={{  textAlign:"center"}}>T </td>
                        <td style={{  textAlign:"center"}}>P </td>
                        <td style={{  textAlign:"center"}}>A </td>
                         
                        {/* <td style={{  textAlign:"center"}}>T </td>
                        <td style={{  textAlign:"center"}}>P </td>
                        <td style={{  textAlign:"center"}}>A </td> */}
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.junet}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.junep}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.junea}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.julyt}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.julyp}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.julya}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.augt}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.augp}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.auga}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.sept}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.sepp}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.sepa}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.octt}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.octp}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.octa}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.novt}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.novp}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.nova}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.dect}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.decp}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.deca}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.jant}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.janp}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.jana}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.febt}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.febp}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.feba}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.mart}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.marp}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.mara}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.aprt}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.aprp}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                        {data6.apra}
                                    </td>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                                                        
                                    

                                
                        </tr>   
                    </tbody>

                    </table>    
           
                                    </div>


                                </div>
                                </div>
                            </div>
                     }
 
        </div>
 
     )
}
export default Std_info_page_all