    import profile_pic from "../pics/profile/profile_pic.jpg"
    import dance1 from  "../pics/profile/dance.jpg"
    import sports1 from "../pics/profile/sports.jpg"
    import abc from "../../pics/abc.jpg"
    import doc from "../../pics/doc.png"
    import sl from "../../pics/listuser.png"
    import fees from "../../pics/fees.jpg"
     
    
import { GET_USER_DATA, GET_USER_NAME } from "../../Utils/Utils"
import { useState } from "react"

import "../../src/css-files/home.css"
  
    

    function Stdinfo_T()
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
                     <div className="col-12">
                  <h1  className="school-title">St'Martins school</h1>
                  </div>

                </div>
                
                <div className="flex-gried mt-2">
                    <div>
                        <h6 className="mt-2"> Hii,</h6> 
                        <h6 >{userName} </h6>
                    </div>


                    <div className="button-area">
                
                    <button className="btn btn-primary mt-2 ms-5  hm-lg-button " onClick={e=>home_fun(true)}>Home</button>
                    <button className="btn btn-primary mt-2 ms-3  hm-lg-button " onClick={e=>logout()}>logout</button>

                    </div>
               </div>

                <div className="row mt-5 ">
                
                    <div className="col-4 dspnun">
                        <h1>  </h1>
                        <img src={userdata1.imgkey} className="profile_pic-std mb-2 dspnun "/> 
                         <h3 className="img-lab-1">userDetails</h3> 
                          
                     </div>

                     { (role==="TEACHER"||role==="ADMIN")&&( 
                            <div className="col-6 col-md-4">
                                <h3 className="mobile-small mrgt" >Update Records</h3>
                                <div className="card mobile-card mrgs-c"  style={{width: '18rem'}} >
                                        <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                        <div className="text-center">
                                            <h5 className="card-title cd-t ">Class wise from I to X</h5>
                                            
                                            <a href="/stdinfo/c/update" className="btn btn-primary hm-lg-button-c c-mb">Click Here</a>
                                        </div>
                                </div>
                            </div>
     )} 
      { (role==="TEACHER"||role==="ADMIN")&&( 
                            <div className="col-6 col-md-4">
                                <h3 className="mobile-small mrgt c2" >SPORT</h3>
                                <div className="card mobile-card mrgs-c c21"  style={{width: '18rem'}} >
                                        <img src={sports1} className="  profile_pic1 shadow " alt="..."/>
                                        <div className="text-center">
                                            <h5 className="card-title cd-t ">pic & videos</h5>
                                            
                                            <a href="/stdinfo/c1/u/2026/sports" className="btn btn-primary hm-lg-button-c c-mb">Click Here</a>
                                        </div>
                                </div>
                            </div>
     )} 
    
                                <div className="row mt-2 ">
                                    
                                     <div className="col-4 img-lab-1">
                                         <h6 > UserName<span style={{fontSize:"17px",color: "red"   }}> {userdata1.UserName} </span></h6>  
                            <h6>Designation: <span style={{fontSize:"17px",  color: "red"}}> {userdata1.designation} </span></h6> 
                            <h6>ClassTeacher:   <span style={{fontSize:"17px",  color: "red"}}> {userdata1.classteacher2} </span></h6> 
                            <h6>Email: <span style={{fontSize:"17px",  color: "red"}}> {userdata1.Email} </span></h6> 
                            {/* <h6>Email: <span style={{fontSize:"17px",  color: "red"}}>: dailyupdates.month </span></h6>   */}
                            <h6>Mobile.No: <span style={{fontSize:"17px",  color: "red"}}> {userdata1.mobile}</span></h6>  
                            <h6>School: <span style={{fontSize:"17px",  color: "red"}}> {userdata1.schoolname} </span></h6> 
                                    </div>

                                     { (role==="TEACHER"||role==="ADMIN")&&( 
                            <div className="col-6 col-md-4">
                                <h3 className="mobile-small mrgt" >Extra Curricular</h3>
                                <div className="card mobile-card mrgs-c"  style={{width: '18rem'}} >
                                        <img src={dance1} className="  profile_pic1 shadow " alt="..."/>
                                        <div className="text-center">
                                            <h5 className="card-title cd-t ">Class wise from I to X</h5>
                                            
                                            <a href="/stdinfo/c1/u/2026/extracurricular" className="btn btn-primary hm-lg-button-c c-mb">Click Here</a>
                                        </div>
                                </div>
                            </div>
     )}  
      { (role==="TEACHER"||role==="ADMIN")&&( 
                            <div className="col-6 col-md-4">
                                <h3 className="mobile-small mrgt c2" >Fees Department</h3>
                                <div className="card mobile-card mrgs-c c21"  style={{width: '18rem'}} >
                                        <img src={fees} className="  profile_pic1 shadow " alt="..."/>
                                        <div className="text-center">
                                            <h5 className="card-title cd-t ">Class wise from I to X</h5>
                                            
                                            <a href="/stdinfo/c1/u/2026/fees" className="btn btn-primary hm-lg-button-c c-mb">Click Here</a>
                                        </div>
                                </div>
                            </div>
     )}  
                                     
                                
    <div className="row">
         <div className="col-12 col-md-4">    </div>

         { (role==="TEACHER"||role==="ADMIN")&&( 
                            <div className="col-6 col-md-4">
                                <h3 className="mobile-small mrgt c-mt " >Daily Updates</h3>
                                <div className="card mobile-card mrgs-c"  style={{width: '18rem'}} >
                                        <img src={doc} className="  profile_pic1 shadow " alt="..."/>
                                        <div className="text-center">
                                            <h5 className="card-title cd-t ">Class wise from I to X</h5>
                                            
                                            <a href="/stdinfo/c1/u/2026/dailyupdates" className="btn btn-primary hm-lg-button-c c-mb">Click Here</a>
                                        </div>
                                </div>
                            </div>
     )} 
                                     { (role==="TEACHER"||role==="ADMIN")&&( 
                            <div className="col-6 col-md-4">
                                <h3 className="mobile-small mrgt c2 c-mt" >School User List</h3>
                                <div className="card mobile-card mrgs-c c21"  style={{width: '18rem'}} >
                                        <img src={sl} className="  profile_pic1 shadow " alt="..."/>
                                        <div className="text-center">
                                            <h5 className="card-title cd-t ">Class wise from I to X</h5>
                                            
                                            <a href="/stdinfo/2026/s/userlist" className="btn btn-primary hm-lg-button-c c-mb">Click Here</a>
                                        </div>
                                </div>
                            </div>
     )}  
    

   
   <div className="row">
    <div className="col-12 col-md-4">

    </div>
     { (role==="TEACHER"||role==="ADMIN")&&( 
                            <div className="col-6 col-md-4">
                                <h3 className="mobile-small mrgt c2 c-mt" >ACTIVITY BY CLASS</h3>
                                <div className="card mobile-card mrgs-c c21"  style={{width: '18rem'}} >
                                        <img src={abc} className="  profile_pic1 shadow " alt="..."/>
                                        <div className="text-center">
                                            <h5 className="card-title cd-t ">Class wise from I to X</h5>
                                            
                                            <a href="/stdinfo/c1/u/ac/2026/dailyactivities" className="btn btn-primary hm-lg-button-c c-mb">Click Here</a>
                                        </div>
                                </div>
                            </div>
     )}  
   

 

   <div className="col-12 col-md-4">

   </div>
    <div className="col-12 col-md-4">

   </div>
  
   </div>
   
         </div>  
            </div>
           </div>
            </div>

        )
    }
    export default Stdinfo_T
