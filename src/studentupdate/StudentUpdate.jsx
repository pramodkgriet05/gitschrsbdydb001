
import { useState } from "react"
import Add_new_student from "../studentupdate/Add_new_student"//add new student componen
//import { GET_USER_ID, GET_USER_NAME } from "../utilils"
import axios from "axios"
import Std_info_c1_u_pulldata from "../studentupdate/Std_info_c1_u_pulldata"//Std_info_c1_u_pulldata
import { useNavigate, useParams } from "react-router-dom"
import { GET_USER_ID, GET_USER_NAME } from "../../Utils/Utils"
 
 
 

function StudentUpdate()
{
      let userName=GET_USER_NAME()
      let userId=GET_USER_ID()
      const {stdid}=useParams()
      console.log(stdid)
      console.log("Hi from student update")
               
    if(userName==null)
      {
        window.location="/"
      }
    ////Std_info/c1/u
   
    
    let[addstudent,setaddstudent]=useState(false)
    let[stdinfo, setstdinfo]=useState({img1:"",rollno:"",name:"",standardandsection:"",gender:"",dob:"",doj:"",address:"",mobile:"",father:"",gaurdian:"",classteacher:"",other:"", userid:""})
    let[o_std_details, seto_std_details]=useState(false)
    let[message, setmessage]=useState(false)
    let[show_A_M, setshow_A_M]=useState(true)
    let[img1, setimg1]=useState("")
    let[apiErrorMessage, setapiErrorMessage]=useState({openMsg:false, apiMessage:false})
   // setstdinfo({...addstudent,userID:userId})
   let[callpulldata, setcallpulldata]=useState( )
   const navigate = useNavigate();
     
    

     
    async function SendApi()
    {
        console.log("cal api")
        setmessage(false) 
       
        
             try{

                  let apiresponse=await axios.post('http://65.2.25.249:8080/s/saverecord',stdinfo) 
                console.log(apiresponse)
                 
               
             // let apiresponse=await axios.post('http://localhost:8080/s/saverecord',stdinfo) 
              // console.log(apiresponse)
               console.log("cal api:1")
               console.log(apiresponse.data.result)
               setapiErrorMessage({...apiErrorMessage, apiMessage:false})
               setmessage(true)
               setcallpulldata(true)
                
             
             //  navigate("/Std_info/c1/u")
                  window.location=`/Std_info/c1/u/${stdid}`
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
    

    return(
        <div className="container">
            <div className="mt-5">
            <h6>user,</h6><h3>{userName}</h3>
                <h3> class: {stdid}</h3>
            </div>
            <button className="btn btn-primary mt-5" onClick={e=>home_fun(true)}>Home</button>
             <button className="btn btn-primary ms-3 mt-5" onClick={e=>back_fun()}>Back</button>
             <button className="btn btn-primary mt-5 ms-3" onClick={e=>logout()}>logout</button>
            <div className="row mt-5 ">
             <h1>St'Martins school</h1>
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
                           {/* <img src={URL.createObjectURL(stdinfo.img1)}/><br/>*/}

                            Name={stdinfo.name}<br/>
                            rollno={stdinfo.rollno}<br/>
                            {
                               apiErrorMessage.apiMessage==true && 
                              <div className="text-danger"> Roll.no already exists, try new roll.no </div>

                            }
                            Standardandsection={stdinfo.standardandsection}<br/>
                            gender={stdinfo.gender}<br/>
                            dob={stdinfo.dob}<br/>
                            doj={stdinfo.doj}<br/>
                            address={stdinfo.address}<br/>
                            Mobile={stdinfo.mobile}<br/>
                            Father={stdinfo.father}<br/>
                            Gaurdien={stdinfo.gaurdian}<br/>
                            classTeacher={stdinfo.classteacher  }<br/>
                            Other={stdinfo.other}<br/>
                            
                            <button className="btn btn-warning  d-grid mt-3" type="button" onClick={e=>SendApi()}> SAVE</button>

                                    </div>
                    }
                    
                    
               </div>
                        {
                         show_A_M == true && 
                        <Add_new_student rece_data={showconformdata} stdid1={stdid}/>
                        
                         }
                            {
                         show_A_M==true &&  <Std_info_c1_u_pulldata stdid1={stdid} /> 
                            }
                          
                        
                
                            
                           <div>
                            
                           </div>
                     
              
                           <div className="row mt-5 ">
                                <div className="col-4">
                                       
                                    </div>
                                    <div className="col-4">
                                     </div>
                                <div className="col-4">
                                </div>
                             </div>
                             
                    
                
            </div>
              
        </div>


         
    )
}
export default StudentUpdate

 