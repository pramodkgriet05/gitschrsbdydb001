 import { Link } from "react-router-dom"
import { GET_USER_ID, GET_USER_NAME } from "../../Utils/Utils"
import profile_pic from "../pics/profile/profile_pic.jpg"
 
 



function Std_info__c_update()
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
                     
         {/* <Link to="/stdinfo/dailyupdates/2026/1/A" className="btn btn-primary me-2">1 A</Link>
                                        <Link to="/stdinfo/dailyupdates/2026/1/B" className="btn btn-primary  me-2">1 B</Link>
                                        <Link to="/stdinfo/dailyupdates/2026/1/C" className="btn btn-primary ">1 C</Link>    */}

            

<div className="row mt-5 ">

    <div className="col-4 col-md-2 ">
                <h3 className="c-9 mrgt" >class 1</h3>
                <div className="card mobile-card-9 gap-9"  style={{width: '18rem'}} >
                        <img src={profile_pic} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9" alt="..."/>
                        <div className="text-center">
                            <h5 className="card-title cd-t u-9 ">update</h5>
                        </div>  
                        <div className="text-center "> 
                            <Link to="/std_info/c1/u/1/A" className="btn btn-primary b-9 me-2 c-b-9">1A</Link>
                            <Link to="/std_info/c1/u/1/B" className="btn btn-primary b-9 me-2 c-b-9">1B</Link>
                            <Link to="/std_info/c1/u/1/C" className="btn btn-primary b-9 c-b-9">1C</Link>
                        </div>
                </div>
            </div>
            <div className="col-4 col-md-2 stdinfo-mf stdinfo-mf1 ">
                <h3 className="c-9 mrgt" >class 2</h3>
                <div className="card mobile-card-9 gap-9"  style={{width: '18rem'}} >
                        <img src={profile_pic} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9" alt="..."/>
                        <div className="text-center">
                            <h5 className="card-title cd-t u-9 ">update</h5>
                        </div>  
                        <div className="text-center"> 
                            <Link to="/std_info/c1/u/2/A" className="btn btn-primary b-9 me-2 c-b-9">2A</Link>
                            <Link to="/std_info/c1/u/2/B" className="btn btn-primary b-9 me-2 c-b-9">2B</Link>
                            <Link to="/std_info/c1/u/2/C" className="btn btn-primary b-9 c-b-9">2C</Link>
                        </div>
                </div>
            </div>
            <div className="col-4 col-md-2 stdinfo-mf stdinfo-mf1">
                <h3 className="c-9 mrgt" >class 3</h3>
                <div className="card mobile-card-9 gap-9"  style={{width: '18rem'}} >
                        <img src={profile_pic} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9" alt="..."/>
                        <div className="text-center">
                            <h5 className="card-title cd-t u-9 ">update</h5>
                        </div>  
                        <div className="text-center"> 
                            <Link to="/std_info/c1/u/3/A" className="btn btn-primary b-9 me-2 c-b-9">3A</Link>
                            <Link to="/std_info/c1/u/3/B" className="btn btn-primary b-9 me-2 c-b-9">3B</Link>
                            <Link to="/std_info/c1/u/3/C" className="btn btn-primary b-9 c-b-9">3C</Link>
                        </div>
                </div>
            </div>
            <div className="col-4 col-md-2 stdinfo-mf stdinfo-mf1">
                <h3 className="c-9 mrgt" >class 4</h3>
                <div className="card mobile-card-9 gap-9"  style={{width: '18rem'}} >
                        <img src={profile_pic} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9" alt="..."/>
                        <div className="text-center">
                            <h5 className="card-title cd-t u-9 ">update</h5>
                        </div>  
                        <div className="text-center"> 
                            <Link to="/std_info/c1/u/4/A" className="btn btn-primary b-9 me-2 c-b-9">4A</Link>
                            <Link to="/std_info/c1/u/4/B" className="btn btn-primary b-9 me-2 c-b-9">4B</Link>
                            <Link to="/std_info/c1/u/4/C" className="btn btn-primary b-9 c-b-9">4C</Link>
                        </div>
                </div>
            </div>
            <div className="col-4 col-md-2 stdinfo-mf stdinfo-mf1">
                <h3 className="c-9 mrgt" >class 5</h3>
                <div className="card mobile-card-9 gap-9"  style={{width: '18rem'}} >
                        <img src={profile_pic} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9" alt="..."/>
                        <div className="text-center">
                            <h5 className="card-title cd-t u-9 ">update</h5>
                        </div>  
                        <div className="text-center"> 
                            <Link to="/std_info/c1/u/5/A" className="btn btn-primary b-9 me-2 c-b-9">5A</Link>
                            <Link to="/std_info/c1/u/5/B" className="btn btn-primary b-9 me-2 c-b-9">5B</Link>
                            <Link to="/std_info/c1/u/5/C" className="btn btn-primary b-9 c-b-9">5C</Link>
                        </div>
                </div>
            </div>
<div className="col-4 col-md-2 stdinfo-mf stdinfo-mf1">
                <h3 className="c-9 mrgt" >class 6</h3>
                <div className="card mobile-card-9 gap-9"  style={{width: '18rem'}} >
                        <img src={profile_pic} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9" alt="..."/>
                        <div className="text-center">
                            <h5 className="card-title cd-t u-9 ">update</h5>
                        </div>  
                        <div className="text-center "> 
                            <Link to="/std_info/c1/u/6/A" className="btn btn-primary b-9 me-2 c-b-9">6A</Link>
                            <Link to="/std_info/c1/u/6/B" className="btn btn-primary b-9 me-2 c-b-9">6B</Link>
                            <Link to="/std_info/c1/u/6/C" className="btn btn-primary b-9 c-b-9">6C</Link>
                        </div>
                </div>
            </div>
            <div className="col-4 col-md-2 stdinfo-mf stdinfo-mf1">
                <h3 className="c-9 mrgt" >class 7</h3>
                <div className="card mobile-card-9 gap-9"  style={{width: '18rem'}} >
                        <img src={profile_pic} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9" alt="..."/>
                        <div className="text-center">
                            <h5 className="card-title cd-t u-9 ">update</h5>
                        </div>  
                        <div className="text-center"> 
                            <Link to="/std_info/c1/u/7/A" className="btn btn-primary b-9 me-2 c-b-9">7A</Link>
                            <Link to="/std_info/c1/u/7/B" className="btn btn-primary b-9 me-2 c-b-9">7B</Link>
                            <Link to="/std_info/c1/u/7/C" className="btn btn-primary b-9 c-b-9">7C</Link>
                        </div>
                </div>
            </div>
            <div className="col-4 col-md-2 stdinfo-mf stdinfo-mf1">
                <h3 className="c-9 mrgt" >class 8</h3>
                <div className="card mobile-card-9 gap-9"  style={{width: '18rem'}} >
                        <img src={profile_pic} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9" alt="..."/>
                        <div className="text-center">
                            <h5 className="card-title cd-t u-9 ">update</h5>
                        </div>  
                        <div className="text-center"> 
                            <Link to="/std_info/c1/u/8/A" className="btn btn-primary b-9 me-2 c-b-9">8A</Link>
                            <Link to="/std_info/c1/u/8/B" className="btn btn-primary b-9 me-2 c-b-9">8B</Link>
                            <Link to="/std_info/c1/u/8/C" className="btn btn-primary b-9 c-b-9">8C</Link>
                        </div>
                </div>
            </div>
            <div className="col-4 col-md-2 stdinfo-mf stdinfo-mf1">
                <h3 className="c-9 mrgt" >class 9</h3>
                <div className="card mobile-card-9 gap-9"  style={{width: '18rem'}} >
                        <img src={profile_pic} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9" alt="..."/>
                        <div className="text-center">
                            <h5 className="card-title cd-t u-9 ">update</h5>
                        </div>  
                        <div className="text-center"> 
                            <Link to="/std_info/c1/u/9/A" className="btn btn-primary b-9 me-2 c-b-9">9A</Link>
                            <Link to="/std_info/c1/u/9/B" className="btn btn-primary b-9 me-2 c-b-9">9B</Link>
                            <Link to="/std_info/c1/u/9/C" className="btn btn-primary b-9 c-b-9">9C</Link>
                        </div>
                </div>
            </div>
            <div className="col-4 col-md-2 stdinfo-mf stdinfo-mf1">
                <h3 className="c-9 mrgt" >class 10</h3>
                <div className="card mobile-card-9 gap-9"  style={{width: '18rem'}} >
                        <img src={profile_pic} className="profile_pic1 shadow profile_pic1-cd-sm shadow c-pc-9" alt="..."/>
                        <div className="text-center">
                            <h5 className="card-title cd-t u-9 ">update</h5>
                        </div>  
                        <div className="text-center"> 
                            <Link to="/std_info/c1/u/10/A" className="btn btn-primary b-9 me-2 c-b-9">10A</Link>
                            <Link to="/std_info/c1/u/10/B" className="btn btn-primary b-9 me-2 c-b-9">10B</Link>
                            <Link to="/std_info/c1/u/10/C" className="btn btn-primary b-9 c-b-9">10C</Link>
                        </div>
                </div>
            </div>                                   
                                        
                            
            </div>
        </div>
    )
}
export default Std_info__c_update