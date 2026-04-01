 import { Link } from "react-router-dom"
import { GET_USER_ID, GET_USER_NAME } from "../../Utils/Utils"
import profile_pic from "../pics/profile/profile_pic.jpg"
 
 



function Navbar()
{

     let userName=GET_USER_NAME()
     let userID=GET_USER_ID()

        //    if(userName==null)
        //        {
        //         window.location="/"
        //        }
     function back_fun()
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
                        <div className=" row mt-5">
                            <div className="col-3">

                                <h6> User,</h6><h3>userName </h3>
                                
                                <button className="btn btn-primary mt-5 ms-3" onClick={e=>back_fun()}>Back</button> 
                                <button className="btn btn-primary mt-5 ms-3" onClick={e=>logout()}>logout</button>
                           </div>
                                <div className="col-9">
                                    <h1 style={{ marginLeft:"10px",marginTop: "55px", fontSize:"70px" }}>St'Martines High school</h1>

                            </div>

                        </div>
            
            </div> 
            )
            }
export default Navbar
