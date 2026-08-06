import axios from "axios"
import { useEffect, useState } from "react";
import { GET_USER_NAME } from "../../Utils/Utils";
import api from "../api/Interaxios";

function Otp()
{

  let userName=GET_USER_NAME()
                 
                if(userName!=null)
                {
                 window.location="/stdinfo"
                }
   
     let[userInputdata, setuserInputdata]=useState({name:"",email:"",mobile:"",password:"", id:"",conformpassword:"", otp:""})
     let searchkeyword=""
     let tempdata1=""
     let[otpvalidinfo, setotpvalidinfo]=useState("")
     let[otpvalidinfomsg, setotpvalidinfomsg]=useState(false)
     let[apierrormsg, setapierrormsg]=useState(false)
     let[apierrorinfo, setapierrorinfo]=useState("")
     let[apierrormsgvalied, setapierrormsgvalied]=useState(false)
     let[apierrorinfovalied, setapierrorinfovalied]=useState("")

   

    //let[products, setproducts]=useState([])
    
     useEffect(() => {
  const queryparameters = new URLSearchParams(window.location.search);
  const searchkeyword = queryparameters.get('id'); 
  setuserInputdata( ({ ...userInputdata, id: searchkeyword }));
}, []);
   
    
           
    // let[idresetpassword, setidresetpassword]=useState()

    // setidresetpassword(searchkeyword)

   // let[userInputdata, setuserInputdata]=useState({name:"",email:"",mobile:"",password:"", id:"",conformpassword:""})

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
        setuserInputdata({...userInputdata, otp:e.target.value})
        

       }
        const updateconformpassword =(e)=>{
        console.log(e.target.value)
        setuserInputdata({...userInputdata, conformpassword:e.target.value})
        
       
       }

       
        

       // setuserInputdata({...userInputdata, id:tempdata}) 
      // function createaccount()
       {
        //console.log(e)
       }         

    /* async function createaccount()
  {
           let apires=await axios.post('http://localhost:8080/login2',userInputdata)
            // window.location='http://localhost:8080/login'
            console.log(apires.data)
            setapiresponce_SB({...apires.data})
            console.log(userInputdata)
  }*/



            function validateotp()
            {

              if(userInputdata.otp.length===6)
              {
                 setotpvalidinfomsg(false)
                 createaccount()
               }
               else
               {
                setotpvalidinfomsg(true)
                setapierrormsg(false)

                setotpvalidinfo("Enter a valied OTP")

               }

            }
   async function createaccount()
  {
               try
               {  
                 

            // let apires=await axios.post('http://localhost:8080/sendmessage',userInputdata) 
            //let apires=await axios.post('http://localhost:8080/forgotpasswrord',userInputdata)
            //let apires=await axios.post('http://localhost:8080/s/rp/update',userInputdata)
           //  let apires=await axios.post('http://localhost:8080/s/otp/createaccount',userInputdata)
             //let apires=await axios.post('http://65.2.25.249:8080/s/otp/createaccount',userInputdata)
             let apires=await api.post('/s/otp/createaccount',userInputdata)

              // window.location='http://localhost:8080/login'
             // console.log(apires.data.result)
            //  console.log(apires)
              setapiresponce_SB({...apires.data.result})
              //console.log(userInputdata)
               
                setuserInputdata({...userInputdata, id:""})
                

             //   console.log(apires.response)
               // console.log(apires.response.data.message)
               setapierrormsgvalied(true)
               setapierrormsg(false)
                setapierrorinfovalied("OTP  match. please login")

               

           
               }
               catch(err)
               {
                console.log(err)
                console.log(err.response)
                console.log(err.response.data)
                console.log(err.response.data.result)
                console.log(err.response.data.message)
                setapierrormsg(true)
                setapierrorinfo("OTP donot match")
                 
               }
  }
  function Springbootreadapi()
  {
    window.location="/springboot/readApi"
  }

    return(
        <div className="contaniner "> 
                    <div className="row justify-content-center ">
                        <div className="col-4 mt-5">
                              <h3>conform OTP</h3>
                                            <div className="card ">
                                                    <div className="card -body ">
                                                        
                                                        <h6>OTP has sent to your email addresssssss</h6>
                                                             { 
                                                             apierrormsgvalied==false &&
                                                            <div className='mt-3'>
                                                                    <label><strong>otp</strong></label>
                                                                    <input type="text" className='form-control' placeholder='otp' onChange={e => updatePassword(e)}></input>
                                                            </div>
                                                            }
                                                             
                                                              
                                                             {
                                                              apierrormsgvalied==true&&
                                                              <div className="text-success mt-3">
                                                             <h4> {apierrorinfovalied}</h4>
                                                              </div>
                                                              
                                                            }
                                                           

                                                            {
                                                              otpvalidinfomsg==true &&
                                                             <div className="text-danger"> { otpvalidinfo} </div>
                                                            }
                                                            {
                                                              apierrormsg==true&&
                                                              <div className="text-danger">{apierrorinfo}</div>
                                                            }
                                                             
                                                             
                                                             
                                                             
                                                        <div className=' d-grid mt-3 md-3'>
                                                        <button className=" btn btn-primary" onClick={e=>validateotp()}>submit</button>
                                                        
                                                        </div>                                                                      
                                                    </div>
                                                </div>
                                                
                        
                        </div>
                   </div>
             </div>
                     
                     
         
    )
}
export default Otp;