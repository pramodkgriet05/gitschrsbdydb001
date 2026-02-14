import { useState } from "react"
import { Check_user_login_status, isEmailValied } from "../../Utils/Utils";
//import Homesch from "../school/home-sch"
import axios from "axios";
import Home from "../home/Home"
function SignUP({data_P})
{
    let[userInputdata, setuserInputdata]=useState({name:"",email:"",mobile:"",password:""})
        let[errorData, seterrorData]=useState({e_name:"",e_email:"",e_mobile:"",e_password:""})
        let[ApiMessage, setApiMessage]=useState({message:"",errorMessage:""})
        let[apierrordata, setapierrordata ]=useState(false)
        let error1
        let error2
        let noerrors=0

        let[apiresponce_SB, setapiresponce_SB ]=useState({});
            
               
                   const updateName =(e)=>{
                    console.log(e.target.value)
                    setuserInputdata({...userInputdata, name:e.target.value})
            
                   }  
                   
                   const updateEmail =(e)=>{
                    console.log(e.target.value)
                    setuserInputdata({...userInputdata, email:e.target.value})
            
                   }
                    const updatePassword =(e)=>{
                    console.log(e.target.value)
                    setuserInputdata({...userInputdata, password:e.target.value})
            
                   }
                    const updateMobile =(e)=>{
                    console.log(e.target.value)
                    setuserInputdata({...userInputdata, mobile:e.target.value})
            
                   }
                   async function data_P1()
                   {
                    try
                    {
                     
                        let ApiResponse= await axios.post('http://localhost:8080/s/createaccount', userInputdata)
                         console.log(ApiResponse)
                         console.log(ApiResponse.data)
                         console.log(ApiResponse.data.data)
                         console.log(ApiResponse.data.status)
                         setApiMessage({...ApiMessage, message:ApiResponse.data.status})
                         
                         data_P(userInputdata.email)
                    }
                    catch(error)
                    {
                       
                      
                         console.log(error)
                         error1=error.message
                         error2=error.response.data.message
                         console.log(error.response.data)
                         setApiMessage({...ApiMessage, errorMessage:error2})
                         setapierrordata(true)
                    //  console.log(errorMessage.error)
                        //data_P("Message:"+error1+error2)
                      
                      
                    }
                     
                   
                   }
                  
                    
                 
                     function createAccount()
                      
              {
                var tempdata
                tempdata={...errorData}
               
                if(userInputdata.name.length<3)
                {
                    
                    tempdata={...tempdata, e_name:"Min 3 chars"}
                    noerrors=1
                }else
                     {
                
                    tempdata={...tempdata, e_name:" "}
                   
                }
                 if(isEmailValied(userInputdata.email))
                { 
                 
                   tempdata={...tempdata, e_email:" "}
         
                }
                else
                {
                     
                     tempdata={...tempdata, e_email:" Enter valied email "}
                  noerrors=1
                  setapierrordata(false)
        
                }
                  if(userInputdata.password.length<=8)
                        {
                           
                             noerrors++;
                             tempdata={...tempdata, e_password:" password min 8 char "}
                        }
                        else{
                             
                            tempdata={...tempdata, e_password:" "}
                           
                        }
                 if(userInputdata.mobile.length==10)
                {
                  
                  tempdata={...tempdata, e_mobile:" "}
                }
                else
                {
                     
                 noerrors=1
               
               tempdata={...tempdata, e_mobile:"mobile must be minimum 10 charecters "}
                 }
               seterrorData({...tempdata})
               console.log(noerrors)
               
                       
                        if(noerrors==0)
                        {
                             /*let temp={...userInputdata};
                             temp={temp.email=""
                             temp=temp.mobile=""
                             temp=temp.password=""
                             temp=temp.name=""
        
                             setuserInputdata({...tempdata})*/
                            
                              data_P1()
        
                            console.log("cal api")
                            
                           
                        }
                    }

    return(
         
             
                                 <div className="card mt-3">
                                                    <div className="card -body ">
                                                         
                                                        <h3>Enter Details</h3>
                                                             
                                                            <div className='mt-3'>
                                                                    <label><strong>Name</strong></label>
                                                                    <input type="text" className='form-control' placeholder='Name' onChange={e => updateName(e)}></input>
                                                                    <div className="text-danger">
                                                                        {errorData.e_name} 

                                                                    </div>
                                                            </div>
                                                            <div className='mt-3'>
                                                                    <label><strong>Email</strong></label>
                                                                    <input type="text" className='form-control' placeholder='Email' onChange={e => updateEmail(e)}></input>
                                                                     <div className="text-danger">
                                                                        {errorData.e_email}
                                                                        {
                                                                            apierrordata==true && 
                                                                            <div className="text-danger">
                                                                                {ApiMessage.errorMessage}
        
                                                                                </div>
                                                                        }

                                                                    </div>
                                                            </div>
                                                            <div className='mt-3'>
                                                                    <label><strong>Password</strong></label>
                                                                    <input type="text" className='form-control' placeholder='Password' onChange={e => updatePassword(e)}></input>
                                                                     <div className="text-danger">
                                                                        {errorData.e_password}

                                                                    </div>
                                                            </div>
                                                            <div className='mt-3'>
                                                                    <label><strong>mobile</strong></label>
                                                                    <input type="text" className='form-control' placeholder='Mobile' onChange={e => updateMobile(e)}></input>
                                                                     <div className="text-danger">
                                                                        {errorData.e_mobile}

                                                                    </div>
                                                            </div>
                                                             
                                                        <div className=' d-grid mt-3 md-3'>
                                                        <button className=" btn btn-primary" onClick={e=>createAccount()}>submit</button>
                                                       </div>
                                                       </div>
                                                       </div>
                                                         
    )
}
export default SignUP