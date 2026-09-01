import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { GET_USER_NAME } from "../../Utils/Utils";
import api from "../api/Interaxios";

function Pulldataafter({classid1})
{
    let token=localStorage.getItem("token")
        console.log(token)
        let token1="Bearer"+" "+token;
        

           let userName=GET_USER_NAME()
                       
             if(userName==null)
               {
                window.location="/"
              }

     let[stdinfo,setstdinfo]=useState([])
     let[index, setIndex]=useState(null)
     
     const {classid}=useParams()
     useEffect(()=>{

       async function pulldata()
        {
            console.log("std_info_c1_u_pulldata classid:" +classid)
             try{
                console.log("HI")

            }
             
            catch(error)
            {
                console.log(error)
            }

        }
        // window.location="/Std_info/c1/u"

     pulldata()
        
             //  console.log(apiresponse)
              // console.log(apiresponse.data.result)
    },[]) 

    function logout()
                        {
                            localStorage.clear()
                            window.location="/"
                        }
    
                       function home_fun()
                       {
                         window.location="/stdinfo"

                       }
                       function backfun()
                       {
                        window.location="/std_info/c/viewrecords"

                       }

     

    return (
    
        <div>
           
            <h6 className="mt-5"> Hi,</h6><h3 className="mb-5">{userName} </h3>
            <div>
                <div className='mt-3'>
                <label><strong>Class Name:  {classid}</strong></label><br />
                <label><strong>Class Teacher</strong></label><br />
                <label><strong>Section</strong></label><br />
                <label><strong>No.of Students:n</strong></label><br />
                    
                </div>
                <div>
                    <button className="btn btn-primary mt-5 mb-3" onClick={e=>home_fun(true)}>Home</button>
                    <button className="btn btn-primary mt-5 ms-3 mb-3" onClick={e=>backfun()}>Back</button>
                    <button className="btn btn-primary mt-5 ms-3 mb-3" onClick={e=>logout()}>logout</button>
                </div>


            {/*<h3 className="text-danger">{stddelapimsg}</h3>*/}
            </div>

           
            <div>
             
                    <table mt-3 className=" compact-table table table-sm align-middle table-striped table-hover">
                        <thead>
                            <tr className="fw-bold"> 
                                <td>rollno</td> 
                                    <td>Name</td>
                                    <td>Gender</td>
                                    <td>address</td>
                                    <td>Class</td>
                                    <td>dob</td>
                                    <td>doj</td>
                                    <td>mobile</td>
                                    <td>father</td>
                                    <td> gaurdian</td>
                                    <td>classTeacher</td>
                                    <td>other</td>
                                    
                            </tr>
                        </thead>

                         <tbody>
       
                 {  
                    stdinfo.map((stdrecord, i)=>(
                        <tr key={i}>
                        <td > 
                             {stdrecord.rollno }  
                            </td> 
                        <td>
                            
                            {stdrecord.name}
                        </td>
                        <td>
                            
                            {stdrecord.gender}
                            </td>
                        <td>
                            
                            {stdrecord.address}
                             
                            </td>
                         <td>
                            
                            {stdrecord.standardandsection}
                           
                            </td> 
                        <td>
                              
                             {stdrecord.dob}
                             
                             </td>
                        <td>
                              
                             {stdrecord.doj}
                             
                             </td> 
                        <td>  
                              
                             {stdrecord.mobile}
                            
                             </td>
                        <td>   

                        {stdrecord.father}
                              </td>
                        <td>
                             
                            {stdrecord.gaurdian}
                            </td>
                        <td> 
                             
                             {stdrecord.classteacher}
                             
                             </td>
                        <td> 
                             {stdrecord.other}
                            
                            </td> 
                       
                        
                    
                        </tr>
                       
                    ))

                    
                
           }
              
             </tbody>
                        
            </table>
            </div>
        </div>
    
)
}

export default Pulldataafter