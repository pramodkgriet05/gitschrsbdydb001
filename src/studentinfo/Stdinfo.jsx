    import profile_pic from "../pics/profile/profile_pic.jpg"
    import dance1 from  "../pics/profile/dance.jpg"
    import sports1 from "../pics/profile/sports.jpg"
    //import { GET_USER_NAME } from "../Utils/Utils"
    

    function Stdinfo()
    {
        //   let userName=GET_USER_NAME()
            
        //   if(userName==null)
        //   {
        //     window.location="homesch"
        //   }


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
                <div className="mt-5">
            { /* <h6> Hi,</h6><h3>{userName} </h3>*/}
                </div>
              <button className="btn btn-primary mt-5" onClick={e=>home_fun(true)}>Home</button>
                <button className="btn btn-primary mt-5 ms-3" onClick={e=>logout()}>logout</button>
                <div className="row mt-5 ">
                
                    <h1>St'Martins school</h1>
                    <div className="col-4">
                        <h1>  </h1>
                        <img src={profile_pic}/> 
                        <h1>userDetails</h1>
                    </div>
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
                                <div className="col-4">
                                        <h3  >Get Records</h3>
                                        <div className="card"  style={{width: '18rem'}} >
                                        <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">Class wise from V</h5>
                                                <a href="/std_info/c/viewrecords" className="btn btn-primary">Click Here</a>
                                            </div>
                                        </div>
                                </div>
                                <div className="row mt-5 ">
                                    <div className="col-4">
                                        
                        
                                    </div>
                            <div className="col-4">
                                <h3  >SPORTS</h3>
                                        <div className="card"  style={{width: '18rem'}} >
                                        <img src={sports1} className="  profile_pic1 shadow " alt="..."/>
                                            <div className="card-body">
                                            
                                                <a href="#" className="btn btn-primary">Click Here</a>
                                            </div>
                                        </div>
                                </div>
                                <div className="col-4">
                                <h3  >Extra Curricular</h3>
                                        <div className="card"  style={{width: '18rem'}} >
                                        <img src={dance1} className=" dance11 shadow" alt="..."/>
                                            <div className="card-body">
                                                
                                                <a href="#" className="btn btn-primary">Click Here</a>
                                            </div>
                                        </div>
                                </div>



                                </div>
                                
                        
                    
                </div>
            </div>

        )
    }
    export default Stdinfo
