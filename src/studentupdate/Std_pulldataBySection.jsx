
import { useState } from "react"
import Add_new_student from "../studentupdate/Add_new_student"//add new student componen
//import { GET_USER_ID, GET_USER_NAME } from "../utilils"
import axios from "axios"
import Std_info_c1_u_pulldata from "../studentupdate/Std_info_c1_u_pulldata"//Std_info_c1_u_pulldata
import { useNavigate, useParams } from "react-router-dom"
import { GET_USER_ID, GET_USER_NAME } from "../../Utils/Utils"
import PullEditdelaws from "../../aws/PullEditdelaws"
import PullEditdelawsBySection from "../../aws/PullEditdelawsBySection"
import R_SA1 from "../../Results/R_SA1"
import R_SA1_BySec from "../../Results/R_SA1_BySec"
 
 
 

function Std_pulldataBySection()
{
    let token=localStorage.getItem("token")
        console.log(token)
        let token1="Bearer"+" "+token;
      let userName=GET_USER_NAME()
      let userId=GET_USER_ID()
      const {stdid}=useParams()
      const {sectionid}=useParams()
      console.log(stdid)
      console.log("Hi from student update")
      let classidsch=stdid;
      let[awsresposes, setawsresposes]=useState([])
      let[awsresposes1, setawsrespose1]=useState([]) 
      let[show_S_A, setshow_S_A]=useState(false) 
      let[show_S_B, setshow_S_B]=useState(false) 
      let[show_S_C, setshow_S_C]=useState(false)
      let[sectionA, setsectionA]=useState("") 
      let[sectionB, setsectionB]=useState("")
      let[sectionC, setsectionC]=useState("")
          const sctionAA =new useNavigate();

      


               
    if(userName==null)
      {
        window.location="/"
      }
    ////Std_info/c1/u
   
    
    let[addstudent,setaddstudent]=useState(false)
    let[stdinfo, setstdinfo]=useState({img1:"",rollno:"",name:"",Standred:"",stdinfo:"",standardandsection:"",gender:"",dob:"",doj:"",address:"",mobile:"",father:"",gaurdian:"",classteacher:"",other:"", userid:""})
    let[o_std_details, seto_std_details]=useState(false)
    let[message, setmessage]=useState(false)
    let[show_A_M, setshow_A_M]=useState(true)
    let[img1, setimg1]=useState("")
    let[apiErrorMessage, setapiErrorMessage]=useState({openMsg:false, apiMessage:false})
   // setstdinfo({...addstudent,userID:userId})
   let[callpulldata, setcallpulldata]=useState( )
   const navigate = useNavigate();
    let[show_results, setshow_results]=useState(false)
    let[showpullSA1, setshowpullSA1]=useState(false) 
    let[pullecords, setpullecords]=useState({examname:"",standred:"", section:"",academicyear:""})
  


    const stdinfoall=new FormData(); 

          // let rollno = String(rollno).padStart(3, '0');
            stdinfoall.append("rollno",stdinfo.rollno);
            stdinfoall.append("name",stdinfo.name);
            stdinfoall.append("Standred", stdinfo.Standred);
             stdinfoall.append("Section", stdinfo.Section);
            stdinfoall.append("gender", stdinfo.gender);
            stdinfoall.append("dob", stdinfo.dob);
            stdinfoall.append("doj", stdinfo.doj);
            stdinfoall.append("address", stdinfo.address);
            stdinfoall.append("mobile", stdinfo.mobile);
            stdinfoall.append("father", stdinfo.father);
            stdinfoall.append("gaurdian", stdinfo.gaurdian);
            stdinfoall.append("classteacher", stdinfo.classteacher);
            stdinfoall.append("other", stdinfo.other);
            stdinfoall.append("img1",stdinfo.img1);


     
    async function awscall()
    {
          //let apiresponse=await axios.post('http://localhost:8080/m/s/saverecord',stdinfoall)
          let apiresponse=await axios.post('http://65.2.25.249:8080/m/s/saverecord',stdinfoall,{
   headers:{
    Authorization:token1
   }
        }) 
 

    }
    async function awscallget()
    {
          //let apiresponse=await axios.get(`http://localhost:8080/m/s/getrecords/${classidsch}`) 
          let apiresponse=await axios.get(`http://65.2.25.249:8080/m/s/getrecords/${classidsch}`,{
   headers:{
    Authorization:token1
   }
        })
          console.log(apiresponse)
          console.log(apiresponse.data)
          setawsresposes(apiresponse.data)
    }
    async function SendApi()
    {
        console.log("cal api")
        setmessage(false) 
       
        
             try{

                //   let apiresponse=await axios.post('http://65.2.25.249:8080/s/saverecord',stdinfo) 
                // console.log(apiresponse)
                 
               
              // let apiresponse=await axios.post('http://localhost:8080/m/s/saverecord',stdinfoall)  
              // let apiresponse=await axios.post('http://65.2.25.249:8080/m/s/saverecord',stdinfoall,{headers:{Authorization:token1}})
               let apiresponse=await axios.post('/api/m/s/saverecord',stdinfoall,{headers:{Authorization:token1}})
   
    
                console.log(apiresponse)
               console.log("cal api:1")
               console.log(apiresponse.data.result)
               setapiErrorMessage({...apiErrorMessage, apiMessage:false})
               setmessage(true)
               setcallpulldata(true)
                
             
             //  navigate("/Std_info/c1/u")
                  window.location=`/std_info/c1/u/${stdid}/${sectionid}`
                  // window.location=`/Std_info/c1/u/stdid`
                  setmessage(true)
               
               }
            
               catch(error)
        {
            console.log(error.response.data.Message)
            //setapiErrorMessage( {...apiErrorMessage, openMsg:true})
            setapiErrorMessage({...apiErrorMessage, apiMessage:true})
            setmessage(false)


        }
     // window.location="/Std_info/c1/u"
    }
 
     
 
                     function showconformdata(data)
                    {
                        setstdinfo(data)
                        seto_std_details(true)
                        setapiErrorMessage({...apiErrorMessage, apiMessage:false})
                     }
                   function back_fun()
                   {
                    window.location="/stdinfo/c/update"
                   }
                    function home_fun()
                   {
                    window.location="/stdinfo"

                   }
                   function logout()
                    {
                        localStorage.clear()
                        window.location="/"
                    }

                   async  function pullAsectionData()
                    {
                        // try
                        // {
                        //  let apiresponse=await axios.get(`http://localhost:8080/m/s/p/getrecords/${classidsch}/A`) 
                        //   console.log(apiresponse)
                        //   setawsrespose1(apiresponse.data)
                        // }
                        // catch(e)
                        // {
                        //     console.log(e)

                        // }

                        //<PullEditdelawsBySection stdid1={stdid} /> 


                        setshow_S_A(true)
                        setsectionA("A")
                        setshow_S_B(false)
                        setshow_S_C(false)
                      //  sctionAA(`/std_info/c1/u/pulldata1/${stdid}/A`)

                    }

                    async  function pullBsectionData()
                    {
                        setshow_S_B(true)
                        setsectionB("B")
                        setshow_S_A(false)
                        setshow_S_C(false)


                    }
                    async  function pullCsectionData()
                    {
                        setshow_S_C(true)
                        setsectionC("C")
                        setshow_S_A(false)
                        setshow_S_B(false)

                    } 
                    function showresults()
                    {
                        setshow_results(true)
                       // setshow_S_A(true)
                    }

                    async function pullSA11(y,e)
                     {
                        console.log(y)
                        console.log(e)
                        console.log(stdid)
                        console.log(sectionid)
                        setpullecords({...pullecords, 

                              examname:e,
                              standred:stdid,
                              section:sectionid ,
                              academicyear:y
                              //setpullecords

                                          });
                    //   let apiresponse=await axios.post(`http://localhost:8080/m/s/reports/pul`,pullecords)
                    //   console.log(apiresponse)

                      setshow_S_A(true)
                    }

                    async function ADDresults()
                    {

                        try{
                             //Does SA1 already exist for class 5 A 2026 ?
                       const createrecords={

                              examname:"FA3",
                              standred:1,
                              section:"A",
                              academicyear:"2026"

                                          };
                        let apiresponse=await axios.post(`http://localhost:8080/m/s/CreateRecords`,createrecords)

                        console.log("new record data")

                        console.log(apiresponse)
                                        }
                                        catch(e)
                                        {
                                            console.log(e)

                                        }


                //                          const data = {
                //     imgdatasend: e.imgFileName,
                //     standardandsection: e.standardandsection
                // };

                         //setshowpullSA1(false)
                    }

                    
    

    return(
        <div className="container">
             <div className="row">
                    <div className="col-12">
                     <h1 style={{ marginLeft:"370px",marginTop: "40px", fontSize:"70px" }}>St'Martins school</h1>
                    </div>
                    </div>
            <div className="mt-5">
            <h6>user,</h6><h3>{userName}</h3>
                <h3> class: {stdid}</h3>
            </div>
            <button className="btn btn-primary mt-5" onClick={e=>home_fun(true)}>Home</button>
             <button className="btn btn-primary ms-3 mt-5" onClick={e=>back_fun()}>Back</button>
             <button className="btn btn-primary mt-5 ms-3" onClick={e=>logout()}>logout</button>
            <div className="row mt-5 ">
           
                <div className="col-4">
                   
                    <button className="btn btn-primary mt-5" onClick={e=>setshow_A_M(true)}>Add Details</button>
                     
                    <h1>  </h1>
                       
                    
                        
                        {
                            message==true && 
                                 <div>
                                    <h2 className="text-success">success </h2>
                                    <h2 className="text-success">record saved</h2>
                                </div>
                        
                        }
                   
                     {
                        o_std_details==true &&
                       <div>
                            <h1> Conform Details</h1>
                            <img src={URL.createObjectURL(stdinfo.img1)}/><br/>

                             
                            Name:    <strong>   {stdinfo.name}  </strong> <br/>
                            rollno: <strong>{stdinfo.rollno}</strong><br/>
                            {
                               apiErrorMessage.apiMessage==true && 
                              <div className="text-danger"> Record with Standred,rollno,section exists, please try new </div>

                            }

                           

                            Standard= <strong> {stdinfo.Standred} </strong><br/>
                            Section= <strong> {stdinfo.Section} </strong><br/>
                            gender=<strong> {stdinfo.gender}</strong><br/>
                            dob=<strong> {stdinfo.dob}</strong><br/>
                            doj=<strong> {stdinfo.doj}</strong><br/>
                            address=<strong> {stdinfo.address}</strong><br/>
                            Mobile=<strong> {stdinfo.mobile}</strong><br/>
                            Father=<strong>  {stdinfo.father}</strong><br/>
                            Gaurdien=<strong> {stdinfo.gaurdian}</strong><br/>
                            classTeacher=<strong> {stdinfo.classteacher  }</strong><br/>
                            Other=<strong>{stdinfo.other}</strong><br/>
                            
                            <button className="btn btn-warning  d-grid mt-3" type="button" onClick={e=>SendApi()}> SAVE</button>

                                    </div>
                    }
               </div>
                        {
                         show_A_M == true && 
                        <Add_new_student rece_data={showconformdata} stdid1={stdid} sectionid={sectionid}/>
                        
                         }
                             {
                         show_A_M==true &&  <PullEditdelawsBySection stdid1={stdid} section1={sectionid}/> 
                            }  

                            {/* <h3 className="text-danger">Select Section</h3>
                             <div className="col-4"> 
                                <button className="btn btn-warning mt-3 mb-5 " type="button" onClick={e=>pullAsectionData()}> A-Section</button> 
                                <button className="btn btn-warning mt-3 ms-5 mb-5" type="button" onClick={e=>pullBsectionData()}> B-Section</button> 
                                <button className="btn btn-warning mt-3 ms-5 mb-5" type="button" onClick={e=>pullCsectionData()}> C-Section</button> 
                           </div> */}
                            <div >
                            
                            {/* {show_S_A==true &&    <PullEditdelawsBySection stdid1={stdid} section1={sectionA}/> } 
                            {show_S_B==true &&    <PullEditdelawsBySection stdid1={stdid} section1={sectionB}/> }
                            {show_S_C==true &&    <PullEditdelawsBySection stdid1={stdid} section1={sectionC}/> } */}
                            </div>
                           
                           
                     
              
                           <div className="row mt-5 ">
                                <div className="col-4">
                        

                         <div>
                         {/* asdfsadfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasd
                         fsdfsdfasdfsdfsfsdfasdfsadfsdfsadfasdfasdfsadfsadfsadfsdfasdfsadfasdfsdfsdfsadfsadfsdfsdfsdfasfasdfsdfsadfsdfsdfsdfsdfasdfasdfasdfsdfsadfsdfasdfasdfsdfasdf
                          */}
                          </div>
                  
   
                         </div>
                                    
                              {/*   <div className="col-4">
                              {/*   <button className="btn btn-warning  d-grid mt-3" type="button" onClick={e=>awscallget()}> SAVE</button>
                                {/* asdfsadfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsdfsdfasdfsdfsfsdfasdfsadfsdfsadfasdfasdfsadfsadfsadfsdfasdfsadfasdfsdfsdfsadfsadfsdfsdfsdfasfasdfsdfsadfsdfsdfsdf */}
                            {/*  </div>
                             </div>

                             <div>
                                {/* asdfsadfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsdfsdfasdfsdfsfsdfasdfsadfsdfsadfasdfasdfsadfsadfsadfsdfasdfsadfasdfsdfsdfsadfsadfsdfsdfsdfasfasdfsdfsadfsdfsdfsdf */}
                               
                               
                             </div>
                             
                    
               
            </div>
                             


       


   {/* <div style={{width:"80vw", marginLeft:"calc(50% - 40vw)"  }}>
   {show_S_A && <PullEditdelawsBySection stdid1={stdid} section1={sectionid}/> }
    {show_S_B && <PullEditdelawsBySection stdid1={stdid} section1={sectionB}/> }
   {show_S_C && <PullEditdelawsBySection stdid1={stdid} section1={sectionC}/> }  
</div>   */}

                       <button className="btn btn-warning   mt-3 mb-5 " type="button" onClick={e=>showresults()}> Show Results</button> 
                                { show_results==true &&
                                <div style={{width:"80vw", marginLeft:"calc(50% - 40vw)"}}>
                                    {/* <button className="btn btn-warning   mt-3 mb-5 me-3" type="button" onClick={e=>ADDresults()}> Addresult</button>  */}
                                    <button className="btn btn-warning   mt-3 mb-5 me-3 " type="button" onClick={e=>pullSA11("2026", "SA1")}> SA1 result</button> 
                                    <button className="btn btn-warning   mt-3 mb-5 me-3 " type="button" onClick={e=>pullSA11("2026", "SA2")}> SA2 result</button> 
                                    <button className="btn btn-warning   mt-3 mb-5 me-3 " type="button" onClick={e=>pullSA11("2026", "SA3")}> SA3 result</button>

                                    <button className="btn btn-warning   mt-3 mb-5 me-3 " type="button" onClick={e=>pullSA11("2026", "FA1")}> FA1 result</button> 
                                    <button className="btn btn-warning   mt-3 mb-5 me-3 " type="button" onClick={e=>pullSA11("2026", "FA2")}> FA2 result</button>
                                    <button className="btn btn-warning   mt-3 mb-5 me-3 " type="button" onClick={e=>pullSA11("2026", "FA3")}> FA3 result</button> 
                                    <button className="btn btn-warning   mt-3 mb-5 me-3 " type="button" onClick={e=>pullSA11("2026", "Final")}> Final</button>  
 

 
                                    
                                </div>
                                }

                                
                        <div>

                       
                             <div style={{width:"80vw", marginLeft:"calc(50% - 40vw)" }} >
                                    {showpullSA1==true &&    <R_SA1  /> }
                                    {show_S_A==true &&    <R_SA1_BySec stdid1={stdid} section1={sectionA} createrecords1={pullecords}/> } 
                               </div>
                               


                            
                            
</div>

  


        </div>
   
    )
}
export default Std_pulldataBySection

 