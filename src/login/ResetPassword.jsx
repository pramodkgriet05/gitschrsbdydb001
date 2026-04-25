 import { useState } from 'react'
import axios from 'axios'
import { GET_USER_NAME, isEmailValied } from "../../Utils/Utils";
 


function ResetPassword()
{
    let userName=GET_USER_NAME()
                   
                  if(userName!=null)
                  {
                   window.location="/stdinfo"
                  }
     


    let[email, setemail]=useState("")
    let[datadynamoDB, setdatadynamoDB]=useState("")
    let[email1, setemail1]=useState("")
    let[emailError, setemailError]=useState({email: false, apiError: false,apiSuccess:false})
    let[ApiMsg, setApiMsg]=useState("")


    function validateemail()
    {
        if(isEmailValied(email))
        {
           
             
            handleresetpassword()
          
            
         }
         else
         {

            setemailError({...emailError, email:true})
         }
          
    }
     async function validateemail001()

        {
            try
            {
                let apidata5= await axios.post('http://13.233.74.60:8080/hello5', datadynamoDB)
                  console.log(apidata5)
                 // let apidata5= await axios.post('http://localhost:8080/hello5', datadynamoDB)
               //   console.log(apidata5)
             //  let apidata3= await axios.post('http://localhost:8080/s/r/1', datadynamoDB)
              // let apidata4= await axios.get('http://localhost:8080/hello1')
            //   console.log(apidata3)
              // console.log(apidata4)
               // let apidata5= await axios.get('http://13.233.74.60:8080/hello')
               // console.log(apidata5)


          //  let apidata1=await  axios.post('http://localhost:8080/s/resetpassword/checkdb1',datadynamoDB)
           // console.log(apidata1)
        //  let apidata=  await  axios.post('http://13.233.74.60:8080/s/resetpassword/checkdb1', datadynamoDB)
          //console.log(apidata)
            }
            catch(e)
            {
                console.log(e)

            }
           

        }
        async function validateemail0022()
            {
                try{
               // let apidata4= await axios.get('http://localhost:8080/hello1')
                // console.log(apidata4)

               let apidata5= await axios.get('http://13.233.74.60:8080/hello1')
                console.log(apidata5)
               // let apidata5= await axios.get('http://localhost:8080/hello1')
              //  console.log(apidata5)


                }
                catch(e)
                {
                    console.log(e)
                }

            }

     

    const handleresetpassword= async()=>{
        try
        {
            setemailError({...emailError, email:false})
            setemailError({...emailError, apiError:false})
       // let apiresponce=await  axios.post('http://localhost:8080/s/resetpassword',{email:email})
        //let apiresponce=await  axios.post('http://65.2.25.249:8080/s/resetpassword',{email:email})
        let apiresponce=await  axios.post(' /api/s/resetpassword',{email:email})
     
        console.log(apiresponce)
        console.log("try1")
        console.log(apiresponce.data.status)
        if(apiresponce.data.status=="success")
        {
            
            console.log("p")
            setemailError({...emailError, apiSuccess:true})
           
            setApiMsg(apiresponce.data.message)
          
             

        }
        else
        {  
            
             setemailError({...emailError, email:false})
             setemailError({...emailError, apiError:true })
            console.log("np")

        }
         
        }
     
        catch(error)
        {
            
            console.log(error)
           
            console.log("catch1")

        }
       
 }
      
     
    
     return(

         <div className="contaniner mt-5"> 
            <div className="row justify-content-center  ">
                <div className="col-4  ">
                    <div className='text-center'>
                 
                    </div>
                                    
                <div className="card ">
                    <div className="card -body ">
                        <h2>Reset Password</h2>
                        
                        {
                         emailError.apiSuccess==false &&
                        <div className='mt-3'>
                                <label><strong>Email</strong></label>
                                <input type="text" className='form-control' placeholder='Email' onChange={e=>setemail(e.target.value)}   ></input>
                                <div className='text-danger'> {emailError.email==true &&  "E-mail not in correct formoat"} </div>                          
                        </div>
                        }
                        {
                             emailError.apiSuccess==true && <div> <h4 className='text-success mt-4'>{ApiMsg} </h4></div>
                        }
                         
                        <div className=' d-grid mt-3 md-3'>
                            <button className='btn btn-warning mt-3' onClick={e=>validateemail()}  >Submit</button>
                                                    </div>
                        <div className='text-danger'> {emailError.apiError==true && "Email is not register with us"}</div>

                        
                         
                    </div>
                  {/*   <div className='mt-3'>
                                <label><strong>Email</strong></label>
                                <input type="text" className='form-control' placeholder='Email' onChange={e=>setdatadynamoDB({...datadynamoDB, id:e.target.value})}></input>
                                <input type="text" className='form-control' placeholder='Email' onChange={e=>setdatadynamoDB({...datadynamoDB, name:e.target.value})}></input>
                                <input type="text" className='form-control' placeholder='Email' onChange={e=>setdatadynamoDB({...datadynamoDB, email:e.target.value})}></input>
                                {datadynamoDB.id}
                        </div>

                        <div>
                             <button className='btn btn-warning mt-3' onClick={e=>validateemail001()}>Dyanmodb</button>
                             <button className='btn btn-warning mt-3' onClick={e=>validateemail0022()}>hello1</button>
                        </div>*/}
                    </div>
                </div>
            </div>
           
                <div className='row justify-content-center'>
                    <div className='col-4'>
                        <div className='text-center'>
                            <a href="conditions apply ms-3">Conditions apply</a>
                             <a href="conditions apply ms-3">Conditions apply</a>
                              <a href="conditions apply ms-3">Conditions apply</a>
                        </div>
                        <p className='text-center'>@ 1996-2025, Amazon.com</p>


                    </div>
                </div>
        </div>      
    )

}
export default ResetPassword