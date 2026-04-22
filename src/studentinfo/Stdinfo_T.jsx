    import profile_pic from "../pics/profile/profile_pic.jpg"
    import dance1 from  "../pics/profile/dance.jpg"
    import sports1 from "../pics/profile/sports.jpg"
import { GET_USER_DATA, GET_USER_NAME } from "../../Utils/Utils"
import { useState } from "react"
  
    

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
                  <h1 style={{ marginLeft:"370px",marginTop: "55px", fontSize:"70px" }}>St'Martins school</h1>
                  </div>

                </div>
                
                <div className="mt-5">
              <h6> Hi,</h6><h3>{userName} </h3>
                </div>
               
              <button className="btn btn-primary mt-5" onClick={e=>home_fun(true)}>Home</button>
                <button className="btn btn-primary mt-5 ms-3" onClick={e=>logout()}>logout</button>
                <div className="row mt-5 ">
                
                    <div className="col-4">
                        <h1>  </h1>
                        <img src={userdata1.imgkey} className="profile_pic3 mb-2"/> 
                         <h3>userDetails</h3> 
                          
                     </div>

                     { (role==="TEACHER"||role==="ADMIN")&&( 
                            <div className="col-4">
                                <h3  >Update Recordssss</h3>
                                <div className="card"  style={{width: '18rem'}} >
                                        <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">Class wise from I to X</h5>
                                            
                                            <a href="/stdinfo/c/update" className="btn btn-primary">Click Her1e</a>
                                        </div>
                                </div>
                            </div>
     )} 
      { (role==="TEACHER"||role==="ADMIN")&&(
                            <div className="col-4">
                                <h3  >SPORTS</h3>
                                        <div className="card"  style={{width: '18rem'}} >
                                        <img src={sports1} className="  profile_pic1 shadow " alt="..."/>
                                            <div className="card-body">
                                            
                                                <a href="/stdinfo/c1/u/2026/sports" className="btn btn-primary">Click Here</a>
                                            </div>
                                        </div>
                                </div>
                                     )}
                                <div className="row mt-5 ">
                                    
                                     <div className="col-4">
                                         <h6 > UserName<span style={{fontSize:"17px",color: "red"   }}> {userdata1.UserName} </span></h6>  
                            <h6>Designation: <span style={{fontSize:"17px",  color: "red"}}> {userdata1.designation} </span></h6> 
                            <h6>ClassTeacher:   <span style={{fontSize:"17px",  color: "red"}}> {userdata1.classteacher2} </span></h6> 
                            <h6>Email: <span style={{fontSize:"17px",  color: "red"}}> {userdata1.Email} </span></h6> 
                            {/* <h6>Email: <span style={{fontSize:"17px",  color: "red"}}>: dailyupdates.month </span></h6>   */}
                            <h6>Mobile.No: <span style={{fontSize:"17px",  color: "red"}}> {userdata1.mobile}</span></h6>  
                            <h6>School: <span style={{fontSize:"17px",  color: "red"}}> {userdata1.schoolname} </span></h6>
                                        
                        
                                    </div>
                                    

                                     { (role==="TEACHER"||role==="ADMIN")&&(

                                <div className="col-4">
                                <h3  >Extra Curricular</h3>
                                        <div className="card"  style={{width: '18rem'}} >
                                        <img src={dance1} className=" dance11 shadow" alt="..."/>
                                            <div className="card-body">
                                                
                                                <a href="/stdinfo/c1/u/2026/extracurricular" className="btn btn-primary">Click Here</a>
                                            </div>
                                        </div>
                                </div>)}
                                { (  role==="TEACHER"||role==="ADMIN"   )&&(

                                 <div className="col-4">
                                 <h3  >Fees</h3>
                                        <div className="card"  style={{width: '18rem'}} >
                                        <img src={dance1} className=" dance11 shadow" alt="..."/>
                                            <div className="card-body">
                                                
                                                <a href="/stdinfo/c1/u/2026/fees" className="btn btn-primary">Click Here</a>
                                            </div>
                                        </div>
                                        
                                </div>
   ) }
    <div className="row">
         <div className="col-4">    </div>
                                    
    { (role==="TEACHER"||role==="ADMIN")&&(

                                <div className="col-4 mt-5">
                                    <h3  >Daily Updates</h3>
                                        <div className="card"  style={{width: '18rem'}} >
                                        <img src={dance1} className=" dance11 shadow" alt="..."/>
                                            <div className="card-body">
                                                
                                                <a href="/stdinfo/c1/u/2026/dailyupdates" className="btn btn-primary">Click Here</a>
                                            </div>
                                        </div>

                                </div>

   ) }         

   { (role==="TEACHER"||role==="ADMIN")&&(

                                <div className="col-4 mt-5">
                                    <h3  >School User List</h3>
                                        <div className="card"  style={{width: '18rem'}} >
                                        <img src={dance1} className=" dance11 shadow" alt="..."/>
                                            <div className="card-body">
                                                
                                                <a href="/stdinfo/2026/s/userlist" className="btn btn-primary">Click Here</a>
                                            </div>
                                        </div>

                                </div>
   ) }
   <div className="row">
    <div className="col-4">

    </div>
   


    { (role==="TEACHER"||role==="ADMIN")&&(

                                <div className="col-4 mt-5">
                                    <h3  >ACTIVITY BY CLASS</h3>
                                        <div className="card"  style={{width: '18rem'}} >
                                        <img src={dance1} className=" dance11 shadow" alt="..."/>
                                            <div className="card-body">
                                                
                                                <a href="/stdinfo/c1/u/ac/2026/dailyactivities" className="btn btn-primary">Click Here</a>
                                            </div>
                                        </div>

                                </div>
   ) } 

   <div className="col-4">

   </div>
    <div className="col-4">

   </div>
  
   </div>
   
         </div>  
            </div>
           </div>
            </div>

        )
    }
    export default Stdinfo_T
