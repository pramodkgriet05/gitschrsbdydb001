    import profile_pic from "../pics/profile/profile_pic.jpg"
    import dance1 from  "../pics/profile/dance.jpg"
    import sports1 from "../pics/profile/sports.jpg"
import { GET_USER_DATA, GET_USER_NAME } from "../../Utils/Utils"
import { useState } from "react"
import Navbar from "../Navbar/Navbar"
import abc from "../../pics/abc.jpg"
    import doc from "../../pics/doc.png"
    import sl from "../../pics/listuser.png"
    import fees from "../../pics/fees.jpg"
  
    



    function Stdinfo_S()
    {
           let userName=GET_USER_NAME()
           let[userdata1,setuserdata1]=useState(GET_USER_DATA())
           
            
            if(userName==null)
           {
            window.location="/"
           }
function GET_ROLE() {
    let token = localStorage.getItem("token");
    if (!token) return null;

    try {
        let payload = JSON.parse(atob(token.split('.')[1]));
        return payload.role;
    } catch {
        return null;
    }
}
console.log(GET_ROLE())

let role=GET_ROLE()

                        function logout()
                        {
                            localStorage.clear()
                            window.location="/"
                        }
    
                       function home_fun()
                       {
                         window.location="/stdinfo"
                       }
        return(
            <div className="container">
                  <div className="row">
                    <Navbar/>

                  </div>


                <div className="row mt-5 ">
                
                    <div className="col-4 img-lab-1">
                        <h1>  </h1>
                        <img src={userdata1.imgkey} className="profile_pic3 mb-2"/> 
                        <h1>userDetails</h1>

                        <div className="mb-2 img-lab-1">
                        <h6 > UserName<span style={{fontSize:"20px",color: "red"   }}> {userdata1.UserName} </span></h6>  
                            <h6>Designation: <span style={{fontSize:"17px",  color: "red"}}> {userdata1.designation} </span></h6> 
                            <h6>ClassTeacher:   <span style={{fontSize:"17px",  color: "red"}}> {userdata1.classteacher2} </span></h6> 
                            <h6>Email: <span style={{fontSize:"17px",  color: "red"}}> {userdata1.Email} </span></h6> 
                            {/* <h6>Email: <span style={{fontSize:"17px",  color: "red"}}>: dailyupdates.month </span></h6>   */}
                            <h6>Mobile.No: <span style={{fontSize:"17px",  color: "red"}}> {userdata1.mobile}</span></h6>  
                            <h6>School: <span style={{fontSize:"17px",  color: "red"}}> {userdata1.schoolname} </span></h6>  
                            </div>


            </div>        
                <div className="col-6 col-md-4">
                                    <h3 className="mobile-small mrgt" >Get Records(STUDENT)</h3>
                                    <div className="card mobile-card mrgs-c"  style={{width: '18rem'}} >
                                            <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                            <div className="text-center">
                                                <h5 className="card-title cd-t ">Class wise from I to X</h5> 
                                                <a href="/std_info/c/viewrecords" className="btn btn-primary hm-lg-button-c c-mb">Click Here</a>
                                            </div>
                                    </div>
                                            </div>
                    
                                


                                <div className="col-6 col-md-4">
                                <h3 className="mobile-small mrgt c2" >SPORTS(STUDENTS)</h3>
                                <div className="card mobile-card mrgs-c c21"  style={{width: '18rem'}} >
                                        <img src={sports1} className="  profile_pic1 shadow " alt="..."/>
                                        <div className="text-center">
                                            <h5 className="card-title cd-t ">pic & videos</h5>
                                            
                                            <a href="/s1/stdinfo/c1/u/2026/sports" className="btn btn-primary hm-lg-button-c c-mb">Click Here</a>
                                        </div>
                                </div>
                            </div>
                                   
                                </div>
                               
                                

                                <div className="row ">

                                <div className="col-4 img-lab-1 ">                                 

                                </div>
                                
                                   <div className="col-6 col-md-4">
                                    <h3 className="mobile-small mrgt" >Extra Curricular(STUDENT)</h3>
                                    <div className="card mobile-card mrgs-c"  style={{width: '18rem'}} >
                                            <img src={dance1} className="  profile_pic1 shadow " alt="..."/>
                                            <div className="text-center">
                                                <h5 className="card-title cd-t ">Class wise from I to X</h5>
                                                
                                                <a href="/s1/stdinfo/c1/u/2026/extracurricular" className="btn btn-primary hm-lg-button-c c-mb">Click Here</a>
                                            </div>
                                    </div>
                                </div>
                                
                                
                                 <div className="col-6 col-md-4">
                                <h3 className="mobile-small mrgt c-mt " >Daily Updates(Students)</h3>
                                <div className="card mobile-card mrgs-c"  style={{width: '18rem'}} >
                                        <img src={doc} className="  profile_pic1 shadow " alt="..."/>
                                        <div className="text-center">
                                            <h5 className="card-title cd-t ">Class wise from I to X</h5>
                                            
                                            <a href="/stdinfo/s/c1/u/2026/dailyupdates" className="btn btn-primary hm-lg-button-c c-mb">Click Here</a>
                                        </div>
                                </div>
                            </div>






                                 
                                 <div className="row">

                                <div className="col-4 img-lab-1">                                 

                                </div>

                                 <div className="col-6 col-md-4">
                                    <h3 className="mobile-small mrgt c2 c-mt" >Activit By Class(Students)</h3>
                                    <div className="card mobile-card mrgs-c c21"  style={{width: '18rem'}} >
                                            <img src={abc} className="  profile_pic1 shadow " alt="..."/>
                                            <div className="text-center">
                                                <h5 className="card-title cd-t ">Class wise from I to X</h5>
                                                
                                                <a href="/stdinfo/ac/s/2026" className="btn btn-primary hm-lg-button-c c-mb">Click Here</a>
                                            </div>
                                    </div>
                                </div> 
                               
                                </div>
                             </div>
                                 </div>
        )
    }
    export default Stdinfo_S
