import axios from "axios"
import { useEffect, useState } from "react";
import { GET_USER_NAME } from "../../Utils/Utils";

function Cnfrestpassword()
{
  let userName=GET_USER_NAME()
                 
                if(userName!=null)
                {
                 window.location="/stdinfo"
                }
   

     let[userInputdata, setuserInputdata]=useState({name:"",email:"",mobile:"",password:"", id:"",conformpassword:""})
     let searchkeyword=""
     let tempdata1=""
       let[emailError, setemailError]=useState({email: false, apiError: false,apiSuccess:false})
    let[ApiMsg, setApiMsg]=useState({success:"", failed:""})
   

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
        setuserInputdata({...userInputdata, password:e.target.value})
        

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
   async function createaccount()
  {
               try
               {  
                 

            // let apires=await axios.post('http://localhost:8080/sendmessage',userInputdata) 
            //let apires=await axios.post('http://localhost:8080/forgotpasswrord',userInputdata)
           // let apires=await axios.post('http://localhost:8080/s/rp/update',userInputdata) 
              let apires=await axios.post('/api/s/rp/update',userInputdata)

              // window.location='http://localhost:8080/login'
              console.log(apires)
              console.log(apires.data)
              setapiresponce_SB({...apires.data})
              console.log(userInputdata)
              if(apires.data.status=="success")
                    {
                        
                        console.log("p")

                         setemailError({...emailError, apiSuccess:true, apiError:false })
                       
                         setApiMsg({...ApiMsg, success:apires.data.message})
                      
                    }
                    else
                    {  
                        
                        setemailError({...emailError, email:false})
                        setemailError({...emailError, apiError:true })
                         setApiMsg({...ApiMsg, failed:apires.data.message})

                         
                        console.log("np")

                    }
           
               }
               catch(err)
               {
                console.log(err)
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
                                <h3>Reset password</h3>
                                            <div className="card ">
                                                    <div className="card -body ">
                                                      {
                                                        emailError.apiSuccess==false &&
                                                    <>   
                                                         
                                                        <div className='mt-3'>
                                                            <label><strong>password</strong></label>
                                                            <input type="password" className='form-control' placeholder='password' onChange={e => updatePassword(e)}></input>
                                                      </div>

                                                    <div className='mt-3'>
                                                            <label><strong>conform password</strong></label>
                                                            <input type="password" className='form-control' placeholder='conformpassword' onChange={e => updateconformpassword(e)}></input>
                                                    </div>
                                                    
                                                    </>
                                                       }      
                                                           
                                                             
                                                            {
                                                              emailError.apiSuccess==true && <div> <h2 className="text-success mt-3 ">{ApiMsg.success} </h2></div>
                                                              
                                                            }
                                                            {
                                                              emailError.apiError==true &&  <div> <h4 className="text-success mt-3 ">{ApiMsg.failed} </h4></div>
                                                            }
                                                             
                                                             
                                                        <div className=' d-grid mt-3 md-3'>
                                                        <button className=" btn btn-primary" onClick={e=>createaccount()}>submit</button>
                                                        
                                                        </div>                                                                      
                                                    </div>
                                                </div>
                                                 
                        
                        </div>
                   </div>
             </div>
                     
                     
         
    )
}
export default Cnfrestpassword;