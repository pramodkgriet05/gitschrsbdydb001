    import profile_pic from "../pics/profile/profile_pic.jpg"
    import dance1 from  "../pics/profile/dance.jpg"
    import sports1 from "../pics/profile/sports.jpg"
import { GET_USER_DATA, GET_USER_NAME } from "../../Utils/Utils"
import { useRef, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
  
    

    function Stdinfo()
    {
           let userName=GET_USER_NAME()

                let[userdata1,setuserdata1]=useState(GET_USER_DATA())
                let[errormsg,seterrormsg]=useState(false)
                let[apierrormsg, setapierrormsg]=useState(false)
                let[apierrormsg1, setapierrormsg1]=useState(false)
                let[name,setname]=useState()
                let [stdcode1,setstdcode1]=useState()
                const fileRef = useRef(); 
                let error=0;
                let token=localStorage.getItem("token")
                //console.log(token)
                let token1="Bearer"+" "+token;
                let navigate=useNavigate()
                let std
    
  


               
            
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

async function stdcode(e)
              {
                               
                console.log(e.target.value)
                 std=e.target.value
              
                setstdcode1(std)

                if(std.length===0||std.length===10)
                {
                  //console.log("Enter 10 digit no")
                  //submitapi()
                  //let apiresponse=await axios.post("http://localhost:8080/api/m/s/checkstd1",{std:std},{headers:{Authorization:token1}})
                 // let apiresponse=await axios.post("http://65.2.25.249:8080/m/s/checkstd1",{std:std},{headers:{Authorization:token1}})
                  let apiresponse=await axios.post("/api/m/s/checkstd1",{std:std},{headers:{Authorization:token1}})
         
                  console.log(apiresponse)
                  console.log(apiresponse.data)
                  let checkerror=apiresponse.data
                  if(checkerror.length===0)
                              {
                                console.log("no data")
                                setapierrormsg(true)
                                setapierrormsg1(false)
                                setname("")
                                seterrormsg(false)
                              }
                              else
                              {
                                console.log("record exist:")
                                setapierrormsg1(true)
                                setapierrormsg(false)
                                seterrormsg(false)
                                
                              setTimeout(() => {
                                                  navigate("/std/info/2026",{state:{stdid:std}})
                                 
                                }, 2000);
                                  console.log("123",stdcode1)
                                 setname(apiresponse.data.name)
                               } 
                }
                else
                {
                  error=1
                  seterrormsg(true) 
                  setapierrormsg1(false)
                  setapierrormsg(false)
                  setname("")
                }
                //console.log(apiresponse)

              }
 

        return(
            <div className="container">
                 <div className="row">
                    <div className="col-12">
                  <h1 style={{ marginLeft:"370px",marginTop: "55px", fontSize:"70px" }}>St'Martins school</h1>
                  </div>

                    
                </div>
                
                
                <div className="mt-5 ">
                    <h3 style={{ marginLeft:"1070px", fontSize:"30px" }}>Enter Std.Code</h3>
                    {

                        errormsg==true&& 
                        <h6 style={{color:"red",marginLeft:"1070px"}}>Enter 10 digit No.</h6>
                        }


                        <input type="text" className='form-control std_rec_add1  mt-2' ref={fileRef} placeholder='Std Code' style={{width:"200px",marginLeft:"1070px"}} onChange={(e)=>stdcode(e)} ></input>
                        {apierrormsg==true&& 
                        
                            <h6 style={{color:"red",marginLeft:"1070px"}}>Student with code not found</h6>
                        }
                        {
                        apierrormsg1==true&&
                        <div className="d-flex mt-2" > 
                        <h6 style={{color:"green",marginLeft:"1070px" }}>Found,</h6>
                        <h6 style={{color:"red",marginLeft:"1px" }}> {name}</h6>

 
                        </div>
                        
                    }
                 <h6> Hi,</h6>
                 
                 <h3>{userName} </h3>
                 

                </div>
               
              <button className="btn btn-primary mt-5" onClick={e=>home_fun(true)}>Home</button>
                <button className="btn btn-primary mt-5 ms-3" onClick={e=>logout()}>logout</button>
                <div className="row mt-5 ">
                
                    <div className="col-4">
                        <h1>  </h1>
                        <img src={userdata1.imgkey} className="profile_pic3 mb-2"/> 
                        {/* <h1>userDetails</h1> */}
                         
                            <h6 > UserName<span style={{fontSize:"17px",color: "red"   }}> {userdata1.UserName} </span></h6>  
                            <h6>Designation: <span style={{fontSize:"17px",  color: "red"}}> {userdata1.designation} </span></h6> 
                            <h6>ClassTeacher:   <span style={{fontSize:"17px",  color: "red"}}> {userdata1.classteacher2} </span></h6> 
                            <h6>Email: <span style={{fontSize:"17px",  color: "red"}}> {userdata1.Email} </span></h6> 
                            {/* <h6>Email: <span style={{fontSize:"17px",  color: "red"}}>: dailyupdates.month </span></h6>   */}
                            <h6>Mobile.No: <span style={{fontSize:"17px",  color: "red"}}> {userdata1.mobile}</span></h6>  
                            <h6>School: <span style={{fontSize:"17px",  color: "red"}}> {userdata1.schoolname} </span></h6>  
                    </div>
                     
                     

                      
                            <div className="col-4">
                                <h3  >Teacher Update Records</h3>
                                <div className="card"  style={{width: '18rem'}} >
                                        <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">Class wise from I to X</h5>
                                            
                                            <a href="/stdinfo/t" className="btn btn-primary">Click Here</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <h3  >Student View Records</h3>
                                <div className="card"  style={{width: '18rem'}} >
                                        <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">Class wise from I to X</h5>
                                            
                                            <a href="/stdinfo/s" className="btn btn-primary">Click Here</a>
                                        </div>
                                </div>
                            </div>
      
     
                                      
                                </div>
                </div>
           

        )
    }
    export default Stdinfo
