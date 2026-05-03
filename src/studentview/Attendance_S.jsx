import axios from "axios";
import { useEffect, useState } from "react";

function Attendance_S({stdid1,section1})
{
    let token=localStorage.getItem("token")
    let token1="Bearer"+" "+token;
    let[attendata,setattendata]=useState([])
    let[index, setIndex]=useState(null)
    let[editcolomdata2,seteditcolomdata2]=useState({})


    let data={
        classid:stdid1,
        sectionid:section1
    }

    useEffect(()=>{
    
            async function attendacepull()
            {
                    //let apiresponse=await axios.post(`http://localhost:8080/api/std/attn/get`,data,{headers:{Authorization:token1}})
                    let apiresponse=await axios.post(`/api/std/attn/get`,data,{headers:{Authorization:token1}})
                        console.log(apiresponse)
                    setattendata(apiresponse.data)
    
            }
            attendacepull(); 
    
        },[])

        function Editcolomchange(i, data)
     {
        console.log("i",i)
        setIndex(i)
        console.log("data",data)
        //  seteditcolomdata(stdrecord)
        //  setupdateeditcolmdata(stdrecord)
        //  setstdinfo1(stdrecord)
        // setupdateeditcolmdataR(stdrecord)
       seteditcolomdata2({...data})
        
     }


        function parentcomment(e)
        {
           seteditcolomdata2(prev=>({...prev, parentfeedback:e.target.value }))
            setupdateeditcolmdataR(prev=>({...prev, parentfeedback:e.target.value }))
        }

        async function saveandsend(i)
     {  

        let data1={
            stdcode:attendata[i].stdcode,
             parentfeedback:editcolomdata2.parentfeedback
                }

                     let conformedit=window.confirm("Do u want to SAVE this record?")
                    if(conformedit)
                    {

                         console.log("no error")
                         //await axios.post(`http://localhost:8080/api/std/attn/edit/1`,data1,{headers:{Authorization:token1}})
                         await axios.post(`/api/std/attn/edit`,data1,{headers:{Authorization:token1}})

                         //let apiresponse=await axios.post(`http://localhost:8080/api/std/attn/get`,data,{headers:{Authorization:token1}})
                         let apiresponse=await axios.post(`/api/std/attn/get`,data,{headers:{Authorization:token1}})

                         console.log(apiresponse)
                         setattendata(apiresponse.data)

                     }
                 
                else
                {
                    console.log("error")
                }

                //await axios.post(`http://localhost:8080/api/std/attn/edit`,data1,{headers:{Authorization:token1}})
                // let apiresponse=await axios.post(`http://localhost:8080/api/std/attn/get`,data,{headers:{Authorization:token1}})
                setIndex(null)
              console.log("re3ceived:")
              //seterror(0);
              
         }


        
    

    
    
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
               <div>
                <h5 className="ms-5" >Attendance </h5>
                <h5 className="ms-5" >Class: {stdid1}   </h5>
                <h5 className="ms-5" >Section:  {section1} </h5>
                <h5 className="ms-5" >Acadamic Year: 2026-27</h5>
             </div>
             </div>
             <div className="row">
                <div>
                    <table className="table compact-table table-sm align-middle table-striped table-hover" style={{margin:"auto"}} >
                <thead>
                    <tr className="fw-bold"  style={{ textAlign:"center", fontSize:"20px"}}> 
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Rollno</td> 
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Std.Code</td> 
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Photo</td>
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Name</td>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >JUNE</th>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >JULY</th>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >AUG</th>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >SEP</th>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >OCT</th>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >NOV</th>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >DEC</th>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >JAN</th>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >FEB</th>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >MAR</th>
                            <th colSpan="3" style={{ textAlign:"center", fontSize:"20px"}} >APR</th>
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Teacher Feedback</td>
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Parent Feedback</td>



                            {/* <th colSpan="3" >APR</th> */}
                    </tr>
                    <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td style={{  textAlign:"center",background:"blue"}}>T </td>  
                        <td style={{  textAlign:"center",background:"green"}}>P </td>
                        <td style={{  textAlign:"center",background:"red"}}>A </td>
                        <td style={{  textAlign:"center",background:"blue"}}>T </td>  
                        <td style={{  textAlign:"center",background:"green"}}>P </td>
                        <td style={{  textAlign:"center",background:"red"}}>A </td>
                        <td style={{  textAlign:"center",background:"blue"}}>T </td>  
                        <td style={{  textAlign:"center",background:"green"}}>P </td>
                        <td style={{  textAlign:"center",background:"red"}}>A </td>
                        <td style={{  textAlign:"center",background:"blue"}}>T </td>  
                        <td style={{  textAlign:"center",background:"green"}}>P </td>
                        <td style={{  textAlign:"center",background:"red"}}>A </td>
                        <td style={{  textAlign:"center",background:"blue"}}>T </td>  
                        <td style={{  textAlign:"center",background:"green"}}>P </td>
                        <td style={{  textAlign:"center",background:"red"}}>A </td>
                        <td style={{  textAlign:"center",background:"blue"}}>T </td>  
                        <td style={{  textAlign:"center",background:"green"}}>P </td>
                        <td style={{  textAlign:"center",background:"red"}}>A </td>
                        <td style={{  textAlign:"center",background:"blue"}}>T </td>  
                        <td style={{  textAlign:"center",background:"green"}}>P </td>
                        <td style={{  textAlign:"center",background:"red"}}>A </td>
                        <td style={{  textAlign:"center",background:"blue"}}>T </td>  
                        <td style={{  textAlign:"center",background:"green"}}>P </td>
                        <td style={{  textAlign:"center",background:"red"}}>A </td>
                        <td style={{  textAlign:"center",background:"blue"}}>T </td>  
                        <td style={{  textAlign:"center",background:"green"}}>P </td>
                        <td style={{  textAlign:"center",background:"red"}}>A </td>
                            <td style={{  textAlign:"center",background:"blue"}}>T </td>  
                        <td style={{  textAlign:"center",background:"green"}}>P </td>
                        <td style={{  textAlign:"center",background:"red"}}>A </td>
                        <td style={{  textAlign:"center",background:"blue"}}>T </td>  
                        <td style={{  textAlign:"center",background:"green"}}>P </td>
                        <td style={{  textAlign:"center",background:"red"}}>A </td>
                       
                         
                        {/* <td style={{  textAlign:"center"}}>T </td>
                        <td style={{  textAlign:"center"}}>P </td>
                        <td style={{  textAlign:"center"}}>A </td> */}
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            attendata.map((data,i)=>
                                <tr key={data.rollno}>
                                    <td style={{  textAlign:"center"}}>
                                        {data.rollno}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                     {data.stdcode}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                      <img src={data.imgpreurl} className="student-photo"/>
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                                     {data.name}
                                    </td>
                                    <td style={{  textAlign:"center",background:"blue"}}>
                                        {data.junet}
                                    </td>
                                    <td style={{  textAlign:"center",background:"green"}}>
                                        {data.junep}
                                    </td>
                                    <td style={{  textAlign:"center",background:"red"}}>
                                        {data.junea}
                                    </td>
                                    <td style={{  textAlign:"center",background:"blue"}}>
                                        {data.julyt}
                                    </td>
                                    <td style={{  textAlign:"center",background:"green"}}>
                                        {data.julyp}
                                    </td>
                                    <td style={{  textAlign:"center",background:"red"}}>
                                        {data.julya}
                                    </td>
                                    <td style={{  textAlign:"center",background:"blue"}}>
                                        {data.augt}
                                    </td>
                                    <td style={{  textAlign:"center",background:"green"}}>
                                        {data.augp}
                                    </td>
                                    <td style={{  textAlign:"center",background:"red"}}>
                                        {data.auga}
                                    </td>
                                    <td style={{  textAlign:"center",background:"blue"}}>
                                        {data.sept}
                                    </td>
                                    <td style={{  textAlign:"center",background:"green"}}>
                                        {data.sepp}
                                    </td>
                                    <td style={{  textAlign:"center",background:"red"}}>
                                        {data.sepa}
                                    </td>
                                    <td style={{  textAlign:"center",background:"blue"}}>
                                        {data.octt}
                                    </td>
                                    <td style={{  textAlign:"center",background:"green"}}>
                                        {data.octp}
                                    </td>
                                    <td style={{  textAlign:"center",background:"red"}}>
                                        {data.octa}
                                    </td>
                                    <td style={{  textAlign:"center",background:"blue"}}>
                                        {data.novt}
                                    </td>
                                    <td style={{  textAlign:"center",background:"green"}}>
                                        {data.novp}
                                    </td>
                                    <td style={{  textAlign:"center",background:"red"}}>
                                        {data.nova}
                                    </td>
                                    <td style={{  textAlign:"center",background:"blue"}}>
                                        {data.dect}
                                    </td>
                                    <td style={{  textAlign:"center",background:"green"}}>
                                        {data.decp}
                                    </td>
                                    <td style={{  textAlign:"center",background:"red"}}>
                                        {data.deca}
                                    </td>
                                    <td style={{  textAlign:"center",background:"blue"}}>
                                        {data.jant}
                                    </td>
                                    <td style={{  textAlign:"center",background:"green"}}>
                                        {data.janp}
                                    </td>
                                    <td style={{  textAlign:"center",background:"red"}}>
                                        {data.jana}
                                    </td>
                                    <td style={{  textAlign:"center",background:"blue"}}>
                                        {data.febt}
                                    </td>
                                    <td style={{  textAlign:"center",background:"green"}}>
                                        {data.febp}
                                    </td>
                                    <td style={{  textAlign:"center",background:"red"}}>
                                        {data.feba}
                                    </td>
                                    <td style={{  textAlign:"center",background:"blue"}}>
                                        {data.mart}
                                    </td>
                                    <td style={{  textAlign:"center",background:"green"}}>
                                        {data.marp}
                                    </td>
                                    <td style={{  textAlign:"center",background:"red"}}>
                                        {data.mara}
                                    </td>
                                    <td style={{  textAlign:"center",background:"blue"}}>
                                        {data.aprt}
                                    </td>
                                    <td style={{  textAlign:"center",background:"green"}}>
                                        {data.aprp}
                                    </td>
                                    <td style={{  textAlign:"center",background:"red"}}>
                                        {data.apra}
                                    </td>
                                     <td className="align-top">
                             <div style={{whiteSpace:"pre-wrap"}}> {data.teacherfeedback }</div> 
                          </td>
                           <td>
                            {index===i?(<textarea value={editcolomdata2.parentfeedback} onChange={(e)=>parentcomment(e)}  style={{
                                                                                                                                    width:"120px",
                                                                                                                                    height:"100px",
                                                                                                                                    verticalAlign:"top",
                                                                                                                                    padding:"5px",
                                                                                                                                    resize:"vertical"
                                                    }}  />):   <div style={{whiteSpace:"pre-wrap"}}>{data.parentfeedback }</div>}
                                                                        </td> 


                                                                        <td> 
                                        {
                                            index===i?(
                                                <button className="btn btn-success" onClick={e=>(saveandsend(i))}>SAVE</button>

                                            ):(
                                                <button className="btn btn-primary" onClick={e=>(Editcolomchange(i,data))}>EDIT</button>

                                            )
                                        }
                                    </td>
                              </tr>
                        )}
                    </tbody>
                    </table>



                </div>
                
             </div>

            </div>

        </div>
            
    )
}
export default Attendance_S