 import { Link } from "react-router-dom"
import { GET_USER_NAME } from "../../Utils/Utils"
import profile_pic from "../pics/profile/profile_pic.jpg"

 



function Std_info__v_update()
{
          
     let userName=GET_USER_NAME()
                   
         if(userName==null)
           {
             window.location="/"
           }
                   function logout()
                    {
                        localStorage.clear()
                        window.location="/"
                    }
                    function back_fun()
                    { 
                       window.location="/stdinfo"
                    }

    return(
        <div className="container">
             
            <button className="btn btn-primary mt-5 ms-3" onClick={e=>back_fun()}>Back</button> 
             <button className="btn btn-primary mt-5 ms-3" onClick={e=>logout()}>logout</button>
            <div className="row mt-5 ">
                  <h6> Hi,</h6><h3 className="mb-5">{userName} </h3>
               
                 <div className="col-2 ">
                    <h3  >Class 1</h3>
                            <div className="card"  style={{width: '13rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Records</h5>
                                         <Link to="/std_info/c1/u/pulldata1/1/A" className="btn btn-primary me-2">1 A</Link>
                                        <Link to="/std_info/c1/u/pulldata1/1/B" className="btn btn-primary  me-2">1 B</Link>
                                        <Link to="/std_info/c1/u/pulldata1/1/C" className="btn btn-primary ">1 C</Link>
                                    </div>
                            </div>
                        </div>

                        <div className="col-2 ms-5">
                            <h3  >Class 2</h3>
                            <div className="card"  style={{width: '13rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Records</h5>
                                         
                                        <Link to="/std_info/c1/u/pulldata1/2/A" className="btn btn-primary me-2">2 A</Link>
                                        <Link to="/std_info/c1/u/pulldata1/2/B" className="btn btn-primary  me-2">2 B</Link>
                                        <Link to="/std_info/c1/u/pulldata1/2/C" className="btn btn-primary ">2 C</Link>
                                    </div>
                            </div>
                        </div>
                         <div className="col-2 ms-5">
                            <h3  >Class 3</h3>
                            <div className="card"  style={{width: '13rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Records</h5>
                                         
                                        <Link to="/std_info/c1/u/pulldata1/3/A" className="btn btn-primary me-2">3 A</Link>
                                        <Link to="/std_info/c1/u/pulldata1/3/B" className="btn btn-primary  me-2">3 B</Link>
                                        <Link to="/std_info/c1/u/pulldata1/3/C" className="btn btn-primary ">3 C</Link>
                                    </div>
                            </div>
                        </div>
                         <div className="col-2 ms-5">
                            <h3  >Class 4</h3>
                            <div className="card"  style={{width: '13rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Records</h5>
                                         
                                       <Link to="/std_info/c1/u/pulldata1/4/A" className="btn btn-primary me-2">4 A</Link>
                                        <Link to="/std_info/c1/u/pulldata1/4/B" className="btn btn-primary  me-2">4 B</Link>
                                        <Link to="/std_info/c1/u/pulldata1/4/C" className="btn btn-primary ">4 C</Link>
                                    </div>
                            </div>
                        </div>
                         <div className="col-2 ms-5">
                            <h3  >Class 5</h3>
                            <div className="card"  style={{width: '13rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Records</h5>
                                         
                                         <Link to="/std_info/c1/u/pulldata1/5/A" className="btn btn-primary me-2">5 A</Link>
                                        <Link to="/std_info/c1/u/pulldata1/5/B" className="btn btn-primary  me-2">5 B</Link>
                                        <Link to="/std_info/c1/u/pulldata1/5/C" className="btn btn-primary ">5 C</Link>
                                    </div>
                            </div>
                        </div>
                         <div className="col-2 mt-5">
                    <h3  >Class 6</h3>
                            <div className="card"  style={{width: '13rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Records</h5>
                                         
                                         <Link to="/std_info/c1/u/pulldata1/6/A" className="btn btn-primary me-2">6 A</Link>
                                        <Link to="/std_info/c1/u/pulldata1/6/B" className="btn btn-primary  me-2">6 B</Link>
                                        <Link to="/std_info/c1/u/pulldata1/6/C" className="btn btn-primary ">6 C</Link>
                                    </div>
                            </div>
                        </div>

                        <div className="col-2 ms-5 mt-5">
                            <h3  >Class 7</h3>
                            <div className="card"  style={{width: '13rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Records</h5>
                                         
                                         <Link to="/std_info/c1/u/pulldata1/7/A" className="btn btn-primary me-2">7 A</Link>
                                        <Link to="/std_info/c1/u/pulldata1/7/B" className="btn btn-primary  me-2">7 B</Link>
                                        <Link to="/std_info/c1/u/pulldata1/7/C" className="btn btn-primary ">7 C</Link>
                                    </div>
                            </div>
                        </div>
                         <div className="col-2 ms-5 mt-5">
                            <h3  >Class 8</h3>
                            <div className="card"  style={{width: '13rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Records</h5>
                                         
                                        <Link to="/std_info/c1/u/pulldata1/8/A" className="btn btn-primary me-2">8 A</Link>
                                        <Link to="/std_info/c1/u/pulldata1/8/B" className="btn btn-primary  me-2">8 B</Link>
                                        <Link to="/std_info/c1/u/pulldata1/8/C" className="btn btn-primary ">8 C</Link>
                                    </div>
                            </div>
                        </div>
                         <div className="col-2 ms-5 mt-5">
                            <h3  >Class 9</h3>
                            <div className="card"  style={{width: '13rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Records</h5>
                                         
                                        <Link to="/std_info/c1/u/pulldata1/9/A" className="btn btn-primary me-2">9 A</Link>
                                        <Link to="/std_info/c1/u/pulldata1/9/B" className="btn btn-primary  me-2">9 B</Link>
                                        <Link to="/std_info/c1/u/pulldata1/9/C" className="btn btn-primary ">9 C</Link>
                                    </div>
                            </div>
                        </div>
                         <div className="col-2 ms-5 mt-5">
                            <h3  >Class 10</h3>
                            <div className="card"  style={{width: '14rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Records</h5>
                                         
                                        <Link to="/std_info/c1/u/pulldata1/10/A" className="btn btn-primary me-2">10 A</Link>
                                        <Link to="/std_info/c1/u/pulldata1/10/B" className="btn btn-primary  me-2">10 B</Link>
                                        <Link to="/std_info/c1/u/pulldata1/10/C" className="btn btn-primary ">10 C</Link>
                                    </div>
                            </div>
                        </div>
                          
                            
            </div>
        </div>
    )
}
export default Std_info__v_update