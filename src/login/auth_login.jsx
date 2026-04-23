import { useState } from "react"
import {isEmailValied } from "../../Utils/Utils";
//import Homesch from "../school/home-sch"
import Home from "../home/Home"
import ResetPassword from "../login/ResetPassword";

import axios from "axios";

function Sch_login({ })
{

    
        let[userInputdata, setuserInputdata]=useState({ email:"" ,password:""})
        let[errorData, seterrorData]=useState({ e_email:"",e_password:""})
        let[signinDataError, setsigninDataerror]=useState({E_email:'false', E_password:'false', apierror:''})
        let[imgkey, setimgkey]=useState()
        let token = localStorage.getItem("token");
        let token1="Bearer "+token; 
        
        let noerrors=0

        let[apiresponce_SB, setapiresponce_SB ]=useState({});
            
            //    let isUserloggin=Check_user_login_status()  
               
            //    console.log(isUserloggin)
            //            if(isUserloggin==true)
            //            {
                          
            //                window.location="homesch"
                          
            //            }
                   
                   
                   const updateEmail =(e)=>{
                    console.log(e.target.value)
                    setuserInputdata({...userInputdata, email:e.target.value})
            
                   }
                    const updatePassword =(e)=>{
                    console.log(e.target.value)
                    setuserInputdata({...userInputdata, password:e.target.value})
            
                   }

                   function createAccount1()
                   {
                     window.location="stdinfo"
                   }
                    
                   
                 
                    async function createAccount()
                      
              {
                var tempdata
                tempdata={...errorData}
                var tempdata1
                tempdata1={...signinDataError}
               
                 
                 if(isEmailValied(userInputdata.email))
                { 
                 
                   tempdata={...tempdata, e_email:" "}
                   tempdata1={...tempdata1, email:" "}
         
                }
                else
                {
                     
                     tempdata={...tempdata, e_email:" Enter valied email "}
                     tempdata1={...tempdata1, email:true}

                  noerrors=1
        
                }
                  if(userInputdata.password.length<8)
                        {
                           
                             noerrors=1
                             tempdata={...tempdata, e_password:" password min 8 char "}
                              tempdata1={...tempdata1, password:true}
                        }
                        else{
                             
                            tempdata={...tempdata, e_password:" "}
                            tempdata1={...tempdata1, password:" "}
                           
                        }
                
               seterrorData({...tempdata})
               setsigninDataerror({...tempdata1})
               console.log(noerrors)
               
                       
                        if(noerrors==0)
                        {
                            try
                            {
                                let ApiResponse= await axios.post('http://65.2.25.249:8080/s/login', userInputdata)
                            //   const apiResponse1 = await axios.get(`http://65.2.25.249:8080/admin/get/users`,{headers:{Authorization:token1}}) 
                               // console.log(apiResponse1)
                        
                               //  let ApiResponse= await axios.post('http://localhost:8080/s/login', userInputdata)
                                  console.log(ApiResponse)
                            
                            console.log(ApiResponse.data.Message.userData)
                            setimgkey(ApiResponse.data.Message.userData.imgkey)
                            console.log(ApiResponse.data.Message.token)
                             
                            localStorage.setItem("userData", JSON.stringify(ApiResponse.data.Message.userData))
                            localStorage.setItem("token", ApiResponse.data.Message.token)
                            window.location="/stdinfo"
                            }
                            catch(error)
                            {
                                console.log(error)
                                console.log(error.response.data.message)
                                setsigninDataerror({...signinDataError, apierror:error.response.data.message})
                            }

             
                        }
                    }

    return(
         
             
                                 <div className="card mt-3">
                                                    <div className="card -body ">
                                                         
                                                        <h3>Enter Login Details</h3>
                                                                                                                       
                                                            <div className='mt-3'>
                                                                    <label><strong>Email</strong></label>
                                                                    <input type="text" className='form-control' placeholder='Email' onChange={e => updateEmail(e)}></input>
                                                                     <div className="text-danger">
                                                                        {
                                                                              signinDataError.E_email==true &&
                                                                         errorData.e_email 
                                                                        }

                                                                    </div>
                                                            </div>
                                                            <div className='mt-3'>
                                                                    <label><strong>Password</strong></label>
                                                                    <input type="password" className='form-control' placeholder='Password' onChange={e => updatePassword(e)}></input>
                                                                     <div className="text-danger">
                                                                        {
                                                                            signinDataError.apierror!=null &&
                                                                            signinDataError.apierror}

                                                                    </div>
                                                            </div>
                                                       
                                                           
                                                             
                                                        <div className=' d-grid mt-3 md-3'>
                                                        <button className=" btn btn-primary" onClick={e=>createAccount()}>SignIN</button>
                                                        <a href="/restpassword">Forgot Password</a>
                                                       </div>
                                                       </div>
                                                       </div>
                                                         
    )
}
export default Sch_login