 import profile_pic from "../pics/profile/profile_pic.jpg"
//import { GET_USER_NAME } from "./utilils"
 



function Std_info__v_update()
{
          
    // let userName=GET_USER_NAME()
                   
    //     if(userName==null)
    //       {
    //         window.location="/homesch"
    //       }
                   function logout()
                    {
                        localStorage.clear()
                        window.location="/homesch"
                    }
                    function back_fun()
                    { 
                       window.location="/Std_info"
                    }

    return(
        <div className="container">
             
            <button className="btn btn-primary mt-5 ms-3" onClick={e=>back_fun()}>Back</button> 
             <button className="btn btn-primary mt-5 ms-3" onClick={e=>logout()}>logout</button>
            <div className="row mt-5 ">
                <h1>St'Martins school</h1>
                 <div className="col-2">
                    <h3  >Class 1</h3>
                            <div className="card"  style={{width: '12rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Records</h5>
                                         
                                        <a href="/std_info/c1/u/pulldata/1" className="btn btn-primary">Click Here</a>
                                    </div>
                            </div>
                        </div>

                        <div className="col-2 ms-5">
                            <h3  >Class 2</h3>
                            <div className="card"  style={{width: '12rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Records</h5>
                                         
                                        <a href="/std_info/c1/u/pulldata/2" className="btn btn-primary">Click Here</a>
                                    </div>
                            </div>
                        </div>
                         <div className="col-2 ms-5">
                            <h3  >Class 3</h3>
                            <div className="card"  style={{width: '12rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Records</h5>
                                         
                                        <a href="/std_info/c1/u/pulldata/3" className="btn btn-primary">Click Here</a>
                                    </div>
                            </div>
                        </div>
                         <div className="col-2 ms-5">
                            <h3  >Class 4</h3>
                            <div className="card"  style={{width: '12rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Records</h5>
                                         
                                        <a href="/std_info/c1/u/pulldata/4" className="btn btn-primary">Click Here</a>
                                    </div>
                            </div>
                        </div>
                         <div className="col-2 ms-5">
                            <h3  >Class 5</h3>
                            <div className="card"  style={{width: '12rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Records</h5>
                                         
                                        <a href="/std_info/c1/u/pulldata/5" className="btn btn-primary">Click Here</a>
                                    </div>
                            </div>
                        </div>
                         <div className="col-2 mt-5">
                    <h3  >Class 6</h3>
                            <div className="card"  style={{width: '12rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Records</h5>
                                         
                                        <a href="/std_info/c1/u/pulldata/6" className="btn btn-primary">Click Here</a>
                                    </div>
                            </div>
                        </div>

                        <div className="col-2 ms-5 mt-5">
                            <h3  >Class 7</h3>
                            <div className="card"  style={{width: '12rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Records</h5>
                                         
                                        <a href="/std_info/c1/u/pulldata/7" className="btn btn-primary">Click Here</a>
                                    </div>
                            </div>
                        </div>
                         <div className="col-2 ms-5 mt-5">
                            <h3  >Class 8</h3>
                            <div className="card"  style={{width: '12rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Records</h5>
                                         
                                        <a href="/std_info/c1/u/pulldata/8" className="btn btn-primary">Click Here</a>
                                    </div>
                            </div>
                        </div>
                         <div className="col-2 ms-5 mt-5">
                            <h3  >Class 9</h3>
                            <div className="card"  style={{width: '12rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Records</h5>
                                         
                                        <a href="/std_info/c1/u/pulldata/9" className="btn btn-primary">Click Here</a>
                                    </div>
                            </div>
                        </div>
                         <div className="col-2 ms-5 mt-5">
                            <h3  >Class 10</h3>
                            <div className="card"  style={{width: '12rem'}} >
                                    <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Get Records</h5>
                                         
                                        <a href="/std_info/c1/u/pulldata/10" className="btn btn-primary">Click Here</a>
                                    </div>
                            </div>
                        </div>
                          
                            
            </div>
        </div>
    )
}
export default Std_info__v_update