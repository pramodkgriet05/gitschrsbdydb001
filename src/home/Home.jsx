


import { useState } from "react";
//import Springbootlogin from "../springboot/login";
//import Sch_createaccount from "./pics/authstd/createaccount";
import labpic from "../../pics/profile/lab.jpg"
import { GET_USER_NAME, isEmailValied } from "../../Utils/Utils";
import SignUP from "../login/SignUP";
//import Signin from "../shared/signin";
import Sch_login from "../login/auth_login";
import axios from "axios";
import Pull_Admin_Records from "./Pull_Admin_Records";
import '../../indexcss/index.css';

function Home()
{   
    let userName=GET_USER_NAME()
               
              if(userName!=null)
              {
               window.location="/stdinfo"
              }
 
 

  
    let[userInputdata, setuserInputdata]=useState({name:"",email:"",mobile:"",password:""})
    let[errorData, seterrorData]=useState({e_name:"",e_email:"",e_mobile:"",e_password:""})
      let[createAccountb, setcreateAccount]=useState(false) 
     let[signin_check, setSignIn]=useState(false)
       let[succ_info, setsucc_info]=useState()
       let[createAccountbb, setcreateAccountbb]=useState(false) 
       let[signUP_check, setsignUP_check]=useState(false)
    // let createAccountb=true
    let noerrors=0
    let noerrors1=0
    let[apiresponce_SB, setapiresponce_SB ]=useState({});
    let[pulladminrecords_a, setpulladminrecords_a]=useState(false);
    let[imgclasssch,setimgclasssch]=useState()

    async function data_child(data)
    {
        
       console.log("form child component",data)
       setcreateAccount(false)
       setcreateAccountbb(true)
       setsucc_info(data)
      
    }
    function setcreateAccount1()
    {
        setcreateAccount(true)
       setcreateAccountbb(false)
        setsignUP_check(false)

    }
    function setSignIn1()
    {
         setcreateAccount(false)
         
         setcreateAccountbb(false)
         setsignUP_check(true)
        
    }
        async  function hello1()
          {
                //let ApiResponse= await axios.get('http://65.2.25.249:8080/hello1')
             // let ApiResponse= await axios.get('http://localhost:8080/hello1')
                let ApiResponse1= await axios.get('http://localhost:8080/student-photo?classNo=4&rollNo=4&extension=png')
                console.log(ApiResponse1)
                //console.log(ApiResponse1.request.response)
                console.log(ApiResponse1.data)
                let imgsch=ApiResponse1.data
                setimgclasssch(imgsch)

                // let imgurl=ApiResponse1.data
                //  console.log(imgurl)
                                  
          }
     /*   async  function pulladminrecords()
          {
            setpulladminrecords_a(true)
            let ApiResponse= await axios.get('http://localhost:8080/admin/recordpull')
            //setpulladminrecords_a(false)

            
          }*/
    





    return(
         <div className="container">
          <div className="row">
                    <div className="col-12">
                  <h1 style={{ marginLeft:"370px",marginTop: "40px", fontSize:"70px" }}>St'Martins school</h1>
                  </div>
                </div>
            <div className="row mt-5 ">
               
               <div className="col-8 mt-5 text-center">  
                <img src={labpic} className="img-lab justify-content-center"></img>
                </div> 
                
                <div className="col-4 justify-content-center">  
                   
              <h1 className="text-center">New user</h1>
               <button className="btn btn-primary ms-3 text-center" onClick={e=>{setcreateAccount1(true )}}>create account</button>
              
               <button className="btn btn-primary ms-3 text-center" onClick={e=>{ setSignIn1(true )}}>Login</button>
                {
                     createAccountbb==true &&
                <div>
                    <br/>
                     <br/>
                     <h5>login to your email:</h5>
               <h3 className="text-success"> "{succ_info }"</h3>
              <h5> to complete Signup process.</h5>
                </div>
                }
              {
                
                createAccountb==true &&

                <SignUP data_P={data_child}/>
                                                         
              }  
                    
              
               {
                signUP_check==true &&
                <Sch_login/>
              }
              


                                                        
                                                        </div>
                                                                     
                                                    </div>
                  <div>
                               </div>

                               <div>
                               {/* <button className="btn btn-primary" onClick={e=>hello1()}>hello1</button>
                               <img src={imgclasssch} className="student-photo"/> */}
                             {/*  <button className="btn btn-primary" onClick={e=>pulladminrecords()}>pulladminrecors</button> */}
                              
                               <div>
                              {  pulladminrecords_a==true&&  <Pull_Admin_Records /> }
                               </div>

                               </div>
                               </div>
                               
                               
 
            
    )
}
export default Home;