 import { Link } from "react-router-dom"
 import profile_pic from "../pics/profile/profile_pic.jpg"
import { GET_USER_ID, GET_USER_NAME } from "../../Utils/Utils"
 
 



function Navbar()
{

     let userName=GET_USER_NAME()
     let userID=GET_USER_ID()

           if(userName==null)
                {
                 window.location="/"
                }
     function back_fun()
                   {
                    window.location="/stdinfo"
                   }
                     
                   function logout()
                    {
                        localStorage.clear()
                        window.location="/"
                    }
                    function home_fun()
                    {
                        window.location="/"

                    }
                   
    return(
             <div className="container">
                         <div className="row">
                            <div className="col-12">
                            <h1 className="school-title">St'Martins school</h1>
                            </div>
                             </div>

                             <div className="flex-gried mt-2">
                                <div>
                                    <h6 className="mt-2"> Hi,</h6> 
                                    <h6 >{userName} </h6>
                                </div> 
                            <div className="button-area">
                        
                                    <button className="btn btn-primary mt-2 ms-5  hm-lg-button " onClick={e=>home_fun(true)}>Home</button>
                                    <button className="btn btn-primary mt-2 ms-3  hm-lg-button " onClick={e=>logout()}>logout</button>

                            </div>
                         </div>
            
            </div> 
            )
            }
export default Navbar
