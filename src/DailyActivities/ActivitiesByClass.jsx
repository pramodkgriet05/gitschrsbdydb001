import Navbar from "../Navbar/Navbar"
 import { Link } from "react-router-dom"
import { GET_USER_ID, GET_USER_NAME } from "../../Utils/Utils"
import profile_pic from "../pics/profile/profile_pic.jpg"




function ActivitiesByClass()
{
    return(

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Navbar />
                </div>
            </div>

            <div className="row">
                    <div className="col-12 col-md-12">

                <h1 className="du1-t-13" style={{ marginLeft:"480px",marginTop: "15px" }}>ACTIVITIES BY CLASS</h1>
                </div>
            </div>

<div className="row mt-3 ">
            
                <div className="col-4 col-md-2   ">
                            <h3 className="c-9 mrgt  " >class 1</h3>
                            <div className="card mobile-card-9 gap-9     "  style={{width: '18rem',}} >
                                    <img src={profile_pic} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9" alt="..."/>
                                    <div className="text-center">
                                        <h5 className="card-title cd-t u-9 ">update</h5>
                                    </div>  
                                    <div className="text-center"> 
                                         <Link to="/stdinfo/ac/t/2026/1/A" className="btn btn-primary b-9 me-2 c-b-9">1A</Link>
                                        <Link to="/stdinfo/ac/t/2026/1/B" className="btn btn-primary b-9 me-2 c-b-9">1B</Link>
                                        <Link to="/stdinfo/ac/t/2026/1/C" className="btn btn-primary b-9 c-b-9">1C</Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 stdinfo-mf stdinfo-mf1 ">
                            <h3 className="c-9 mrgt" >class 2</h3>
                            <div className="card mobile-card-9 gap-9       "  style={{width: '18rem'}} >
                                    <img src={profile_pic} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9" alt="..."/>
                                    <div className="text-center">
                                        <h5 className="card-title cd-t u-9 ">update</h5>
                                    </div>  
                                    <div className="text-center"> 
                                        <Link to="/stdinfo/ac/t/2026/2/A" className="btn btn-primary b-9 me-2 c-b-9">2A</Link>
                                        <Link to="/stdinfo/ac/t/2026/2/B" className="btn btn-primary b-9 me-2 c-b-9">2B</Link>
                                        <Link to="/stdinfo/ac/t/2026/2/C" className="btn btn-primary b-9 c-b-9">2C</Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-4 col-md-2  stdinfo-mf stdinfo-mf1 ">
                            <h3 className="c-9 mrgt" >class 3</h3>
                            <div className="card mobile-card-9 gap-9     "  style={{width: '18rem'}} >
                                    <img src={profile_pic} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9" alt="..."/>
                                    <div className="text-center">
                                        <h5 className="card-title cd-t u-9 ">update</h5>
                                    </div>  
                                    <div className="text-center"> 
                                        <Link to="/stdinfo/ac/t/2026/3/A" className="btn btn-primary b-9 me-2 c-b-9">3A</Link>
                                        <Link to="/stdinfo/ac/t/2026/3/B" className="btn btn-primary b-9 me-2 c-b-9">3B</Link>
                                        <Link to="/stdinfo/ac/t/2026/3/C" className="btn btn-primary b-9 c-b-9">3C</Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 stdinfo-mf stdinfo-mf1">
                            <h3 className="c-9 mrgt" >class 4</h3>
                            <div className="card mobile-card-9 gap-9      "  style={{width: '18rem'}} >
                                    <img src={profile_pic} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9" alt="..."/>
                                    <div className="text-center">
                                        <h5 className="card-title cd-t u-9 ">update</h5>
                                    </div>  
                                    <div className="text-center"> 
                                        <Link to="/stdinfo/ac/t/2026/4/A" className="btn btn-primary b-9 me-2 c-b-9">4A</Link>
                                        <Link to="/stdinfo/ac/t/2026/4/B" className="btn btn-primary b-9 me-2 c-b-9">4B</Link>
                                        <Link to="/stdinfo/ac/t/2026/4/C" className="btn btn-primary b-9 c-b-9">4C</Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 stdinfo-mf stdinfo-mf1">
                            <h3 className="c-9 mrgt" >class 5</h3>
                            <div className="card mobile-card-9 gap-9      "  style={{width: '18rem'}} >
                                    <img src={profile_pic} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9" alt="..."/>
                                    <div className="text-center">
                                        <h5 className="card-title cd-t u-9 ">update</h5>
                                    </div>  
                                    <div className="text-center"> 
                                        <Link to="/stdinfo/ac/t/2026/5/A" className="btn btn-primary b-9 me-2 c-b-9">5A</Link>
                                        <Link to="/stdinfo/ac/t/2026/5/B" className="btn btn-primary b-9 me-2 c-b-9">5B</Link>
                                        <Link to="/stdinfo/ac/t/2026/5/C" className="btn btn-primary b-9 c-b-9">5C</Link>
                                    </div>
                            </div>
                        </div>
            <div className="col-4 col-md-2  ">
                            <h3 className="c-9 mrgt" >class 6</h3>
                            <div className="card mobile-card-9 gap-9     "  style={{width: '18rem'}} >
                                    <img src={profile_pic} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9" alt="..."/>
                                    <div className="text-center">
                                        <h5 className="card-title cd-t u-9 ">update</h5>
                                    </div>  
                                    <div className="text-center "> 
                                        <Link to="/stdinfo/ac/t/2026/6/A" className="btn btn-primary b-9 me-2 c-b-9">6A</Link>
                                        <Link to="/stdinfo/ac/t/2026/6/B" className="btn btn-primary b-9 me-2 c-b-9">6B</Link>
                                        <Link to="/stdinfo/ac/t/2026/6/C" className="btn btn-primary b-9 c-b-9">6C</Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 stdinfo-mf stdinfo-mf1">
                            <h3 className="c-9 mrgt" >class 7</h3>
                            <div className="card mobile-card-9 gap-9    "  style={{width: '18rem'}} >
                                    <img src={profile_pic} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9" alt="..."/>
                                    <div className="text-center">
                                        <h5 className="card-title cd-t u-9 ">update</h5>
                                    </div>  
                                    <div className="text-center"> 
                                        <Link to="/stdinfo/ac/t/2026/7/A" className="btn btn-primary b-9 me-2 c-b-9">7A</Link>
                                        <Link to="/stdinfo/ac/t/2026/7/B" className="btn btn-primary b-9 me-2 c-b-9">7B</Link>
                                        <Link to="/stdinfo/ac/t/2026/7/C" className="btn btn-primary b-9 c-b-9">7C</Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 stdinfo-mf stdinfo-mf1 ">
                            <h3 className="c-9 mrgt" >class 8</h3>
                            <div className="card mobile-card-9 gap-9    "  style={{width: '18rem'}} >
                                    <img src={profile_pic} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9" alt="..."/>
                                    <div className="text-center">
                                        <h5 className="card-title cd-t u-9 ">update</h5>
                                    </div>  
                                    <div className="text-center"> 
                                        <Link to="/stdinfo/ac/t/2026/8/A" className="btn btn-primary b-9 me-2 c-b-9">8A</Link>
                                        <Link to="/stdinfo/ac/t/2026/8/B" className="btn btn-primary b-9 me-2 c-b-9">8B</Link>
                                        <Link to="/stdinfo/ac/t/2026/8/C" className="btn btn-primary b-9 c-b-9">8C</Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 stdinfo-mf stdinfo-mf1">
                            <h3 className="c-9 mrgt" >class 9</h3>
                            <div className="card mobile-card-9 gap-9    "  style={{width: '18rem'}} >
                                    <img src={profile_pic} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9" alt="..."/>
                                    <div className="text-center">
                                        <h5 className="card-title cd-t u-9 ">update</h5>
                                    </div>  
                                    <div className="text-center"> 
                                        <Link to="/stdinfo/ac/t/2026/9/A" className="btn btn-primary b-9 me-2 c-b-9">9A</Link>
                                        <Link to="/stdinfo/ac/t/2026/9/B" className="btn btn-primary b-9 me-2 c-b-9">9B</Link>
                                        <Link to="/stdinfo/ac/t/2026/9/C" className="btn btn-primary b-9 c-b-9">9C</Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 stdinfo-mf stdinfo-mf1">
                            <h3 className="c-9 mrgt" >class 10</h3>
                            <div className="card mobile-card-9 gap-9    "  style={{width: '18rem'}} >
                                    <img src={profile_pic} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9" alt="..."/>
                                    <div className="text-center">
                                        <h5 className="card-title cd-t u-9 ">update</h5>
                                    </div>  
                                    <div className="text-center"> 
                                        <Link to="/stdinfo/ac/t/2026/10/A" className="btn btn-primary b-9 me-2 c-b-9">10A</Link>
                                        <Link to="/stdinfo/ac/t/2026/10/B" className="btn btn-primary b-9 me-2 c-b-9">10B</Link>
                                        <Link to="/stdinfo/ac/t/2026/10/C" className="btn btn-primary b-9 c-b-9">10C</Link>
                                    </div>
                            </div>
                        </div>                                   
                                                    
                                        
                        </div>






            
            

        



  
  
  </div>  )
}

export default ActivitiesByClass