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
                    <div className="col-12">

                <h1 style={{ marginLeft:"480px",marginTop: "125px" }}>ACTIVITIES BY CLASS</h1>
                </div>
            </div>


            <div className="row" style={{marginTop:"50px"}}>
                  <div className="col-2"  >
                    <h3  >Class 1</h3>
                            <div className="card"  style={{width: '13rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h2 className="card-title"></h2>
                                     

                                        <Link to="/stdinfo/ac/t/2026/1/A" className="btn btn-primary me-2">1 A</Link>
                                        <Link to="/stdinfo/ac/t/2026/1/B" className="btn btn-primary  me-2">1 B</Link>
                                        <Link to="/stdinfo/ac/t/2026/1/C" className="btn btn-primary ">1 C</Link>
                                    </div>
                            </div>
                        </div>
                         <div className="col-2 ms-5">
                                                    <h3  >Class 2</h3>
                                                    <div className="card"  style={{width: '13rem'}} >
                                                            <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                                            <div className="card-body">
                                                                <h2 className="card-title"></h2>
                                                                 
                                                                <Link to="/stdinfo/ac/t/2026/2/A" className="btn btn-primary me-2">2 A</Link>
                                                                <Link to="/stdinfo/ac/t/2026/2/B" className="btn btn-primary  me-2">2 B</Link>
                                                                <Link to="/stdinfo/ac/t/2026/2/C" className="btn btn-primary ">2 C</Link>
                                                            </div>
                                                    </div>
                                                </div>
                                                 <div className="col-2 ms-5">
                                                    <h3  >Class 3</h3>
                                                    <div className="card"  style={{width: '13rem'}} >
                                                            <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                                            <div className="card-body">
                                                                <h2 className="card-title"></h2>
                                                                 
                                                                <Link to="/stdinfo/ac/t/2026/3/A" className="btn btn-primary me-2">3 A</Link>
                                                                <Link to="/stdinfo/ac/t/2026/3/B" className="btn btn-primary  me-2">3 B</Link>
                                                                <Link to="/stdinfo/ac/t/2026/3/C" className="btn btn-primary ">3 C</Link>
                                                            </div>
                                                    </div>
                                                </div>
                                                 <div className="col-2 ms-5">
                                                    <h3  >Class 4</h3>
                                                    <div className="card"  style={{width: '13rem'}} >
                                                            <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                                            <div className="card-body">
                                                                <h2 className="card-title"></h2>
                                                                 
                                                                <Link to="/stdinfo/ac/t/2026/4/A" className="btn btn-primary me-2">4 A</Link>
                                                                <Link to="/stdinfo/ac/t/2026/4/B" className="btn btn-primary  me-2">4 B</Link>
                                                                <Link to="/stdinfo/ac/t/2026/4/C" className="btn btn-primary ">4 C</Link>
                                                            </div>
                                                    </div>
                                                </div>
                                                 <div className="col-2 ms-5">
                                                    <h3  >Class 5</h3>
                                                    <div className="card"  style={{width: '13rem'}} >
                                                            <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                                            <div className="card-body">
                                                               <h2 className="card-title"></h2>
                                                                
                                                                <a href="/stdinfo/ac/t/2026/5/A" className="btn btn-primary me-2">5 A</a>
                                                                <a href="/stdinfo/ac/t/2026/5/B" className="btn btn-primary me-2">5 B</a>
                                                                <a href="/stdinfo/ac/t/2026/5/C" className="btn btn-primary  ">5 C</a>
                                                            </div>
                                                    </div>
                                                </div>
                                                 <div className="col-2 mt-5">
                                            <h3  >Class 6</h3>
                                                    <div className="card"  style={{width: '13rem'}} >
                                                            <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                                            <div className="card-body">
                                                                <h2 className="card-title"></h2>
                                                                 
                                                               <a href="/stdinfo/ac/t/2026/6/A" className="btn btn-primary me-2">6 A</a>
                                                                <a href="/stdinfo/ac/t/2026/6/B" className="btn btn-primary me-2">6 B</a>
                                                                <a href="/stdinfo/ac/t/2026/6/C" className="btn btn-primary  ">6 C</a>
                                                            </div>
                                                    </div>
                                                </div>
                        
                                                <div className="col-2 ms-5 mt-5">
                                                    <h3  >Class 7</h3>
                                                    <div className="card"  style={{width: '13rem'}} >
                                                            <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                                            <div className="card-body">
                                                                <h2 className="card-title"></h2>
                                                                 
                                                                <a href="/stdinfo/ac/t/2026/7/A" className="btn btn-primary me-2">7 A</a>
                                                                <a href="/stdinfo/ac/t/2026/7/B" className="btn btn-primary me-2">7 B</a>
                                                                <a href="/stdinfo/ac/t/2026/7/C" className="btn btn-primary  ">7 C</a>
                                                            </div>
                                                    </div>
                                                </div>
                                                 <div className="col-2 ms-5 mt-5">
                                                    <h3  >Class 8</h3>
                                                    <div className="card"  style={{width: '13rem'}} >
                                                            <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                                            <div className="card-body">
                                                                <h2 className="card-title"></h2>
                                                                 
                                                               <a href="/stdinfo/ac/t/2026/8/A" className="btn btn-primary me-2">8 A</a>
                                                                <a href="/stdinfo/ac/t/2026/8/B" className="btn btn-primary me-2">8 B</a>
                                                                <a href="/stdinfo/ac/t/2026/8/C" className="btn btn-primary  ">8 C</a>
                                                            </div>
                                                    </div>
                                                </div>
                                                 <div className="col-2 ms-5 mt-5">
                                                    <h3  >Class 9</h3>
                                                    <div className="card"  style={{width: '13rem'}} >
                                                            <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                                            <div className="card-body">
                                                                <h2 className="card-title"></h2>
                                                                 
                                                                <a href="/stdinfo/ac/t/2026/9/A" className="btn btn-primary me-2">9 A</a>
                                                                <a href="/stdinfo/ac/t/2026/9/B" className="btn btn-primary  me-2">9 B</a>
                                                                <a href="/stdinfo/ac/t/2026/9/C" className="btn btn-primary  ">9 C</a>
                                                            </div>
                                                    </div>
                                                </div>
                                                 <div className="col-2 ms-5 mt-5">
                                                    <h3  style={{}}>    Class 10</h3>
                                                    <div className="card"  style={{width: '14rem'}} >
                                                            <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                                            <div className="card-body">
                                                                <h2 className="card-title"></h2>
                                                                 
                                                                 <a href="/stdinfo/ac/t/2026/10/A" className="btn btn-primary me-2">10 A</a>
                                                                <a href="/stdinfo/ac/t/2026/10/B" className="btn btn-primary me-2">10 B</a>
                                                                <a href="/stdinfo/ac/t/2026/10/C" className="btn btn-primary  ">10 C</a>
                                                            </div>
                                                    </div>
                                                </div> 
            </div>

        </div>



    )
}

export default ActivitiesByClass