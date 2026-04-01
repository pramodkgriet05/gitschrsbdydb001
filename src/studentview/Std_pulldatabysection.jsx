import { useParams } from "react-router-dom";
import Stdpullgetbysection from "./Stdpullgetbysection";
import R_SA1_BySec_pull from "./R_SA1_BySec_pull";
import { useState } from "react";
import { GET_USER_NAME } from "../../Utils/Utils";
import Navbar from "../Navbar/Navbar";

    function Std_pulldatabysectionget()
{


    let userName=GET_USER_NAME()
                
                if(userName==null)
               {
                window.location="/"
               }

    
    const {classid}=useParams()
    const {sectionid}=useParams()


    let[show_results, setshow_results]=useState(false)
     let[showpullSA1, setshowpullSA1]=useState(false) 
     let[show_S_A,setshow_S_A]=useState(false)

    let[pullecords, setpullecords]=useState({examname:"",standred:"", section:"",academicyear:""})



     console.log(classid)
     console.log(sectionid)


      function showresults()
                    {
                        setshow_results(true)
                       // setshow_S_A(true)
                    }
                     async function pullSA11(y,e)
                     {
                        console.log(y)
                        console.log(e)
                        console.log(classid)
                        console.log(sectionid)
                        setpullecords({...pullecords, 

                              examname:e,
                              standred:classid,
                              section:sectionid ,
                              academicyear:y
                              //setpullecords

                                          });
                    //   let apiresponse=await axios.post(`http://localhost:8080/m/s/reports/pul`,pullecords)
                    //   console.log(apiresponse)

                      setshow_S_A(true)
                    }



    

   // console.log(classid1)
    return( 
    
       <div className="container">
        <div className="row">
            <div className="col-12">
                <Navbar/>

            </div>

        </div>
        <div className="row">
            <div className="col-12">
                
        <Stdpullgetbysection classid1={classid} sectionid1={sectionid}/>


        </div>
        </div>
        <button className="btn btn-warning   mt-3 mb-5 " type="button" onClick={e=>showresults()}> Show Results</button> 
                                { show_results==true &&
                                <div style={{width:"80vw", marginLeft:"calc(50% - 40vw)"}}>
                                    {/* <button className="btn btn-warning   mt-3 mb-5 me-3" type="button" onClick={e=>ADDresults()}> Addresult</button>  */}
                                    <button className="btn btn-warning   mt-3 mb-5 me-3 " type="button" onClick={e=>pullSA11("2026", "SA1")}> SA1 result</button> 
                                    <button className="btn btn-warning   mt-3 mb-5 me-3 " type="button" onClick={e=>pullSA11("2026", "SA2")}> SA2 result</button> 
                                    <button className="btn btn-warning   mt-3 mb-5 me-3 " type="button" onClick={e=>pullSA11("2026", "SA3")}> SA3 result</button>

                                    <button className="btn btn-warning   mt-3 mb-5 me-3 " type="button" onClick={e=>pullSA11("2026", "FA1")}> FA1 result</button> 
                                    <button className="btn btn-warning   mt-3 mb-5 me-3 " type="button" onClick={e=>pullSA11("2026", "FA2")}> FA2 result</button>
                                    <button className="btn btn-warning   mt-3 mb-5 me-3 " type="button" onClick={e=>pullSA11("2026", "FA3")}> FA3 result</button>  
                                    <button className="btn btn-warning   mt-3 mb-5 me-3 " type="button" onClick={e=>pullSA11("2026", "Final")}> Final</button>  

 
                                    
                                </div>
                                }
                                 <div style={{width:"80vw", marginLeft:"calc(50% - 40vw)" }} >
                                    {/* {showpullSA1==true &&    <R_SA1  /> } */}
                                    {show_S_A==true &&    <R_SA1_BySec_pull stdid1={classid} section1={sectionid} createrecords1={pullecords}/> } 
                               </div>

       </div>
    )
}

export default Std_pulldatabysectionget;