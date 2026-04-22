import { useEffect, useState } from "react"
import Navbar from "../Navbar/Navbar";
import axios from "axios";

function SchUserList()
{
              
    let[stdinfo, setstdinfo]=useState([])
    let token = localStorage.getItem("token");
    let token1="Bearer "+token;
    let[awsresposes,setawsresposes]=useState([])
    let[index, setIndex]=useState(null)
    let[updateeditcolmdata, setupdateeditcolmdata]=useState()
    let[stdinfo1,setstdinfo1]=useState()
    let[editcolomdata,seteditcolomdata]=useState()

    let t="Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiQURNSU4iLCJuYW1lIjoicHJhbW9kIiwiaWQiOjMzLCJlbWFpbCI6InByYW1vZGsuZ3JpZXQwNTA1QGdtYWlsLmNvbSIsInN1YiI6InByYW1vZGsuZ3JpZXQwNTA1QGdtYWlsLmNvbSIsImlhdCI6MTc3Njg0OTQ2NSwiZXhwIjoxNzc3NzM4NDk3fQ.4B6oPlXkpmGRBGf8aeZ96nSa-cJnXO3MCXTTDOEG-aWQivGT3zA9CkCkoeL2U8qfuQsF1zbHOegcnpfdha0pQA"
    

    console.log("user token:",token1)


 useEffect(()=>{
 
        async function pulldata()
         {
               try{
 
                  // const apiResponse = await axios.get(`http://localhost:8080/admin/get/users`,{headers:{Authorization:token1}}) 
                    //  let apiResponse= await axios.get('http://65.2.25.249:8080/admin/get/users', 
                        
                        
                    //      {headers:{Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiQURNSU4iLCJuYW1lIjoicHJhbW9kIiwiaWQiOjMzLCJlbWFpbCI6InByYW1vZGsuZ3JpZXQwNTA1QGdtYWlsLmNvbSIsInN1YiI6InByYW1vZGsuZ3JpZXQwNTA1QGdtYWlsLmNvbSIsImlhdCI6MTc3Njg0OTQ2NSwiZXhwIjoxNzc3NzM4NDk3fQ.4B6oPlXkpmGRBGf8aeZ96nSa-cJnXO3MCXTTDOEG-aWQivGT3zA9CkCkoeL2U8qfuQsF1zbHOegcnpfdha0pQA"

                    //      }})
                const apiResponse = await axios.get(`http://65.2.25.249:8080/admin/get/users`,{headers:{Authorization:token1}}) 

                                 
                    console.log(apiResponse) 
                    setawsresposes(apiResponse.data)
             }
              
             catch(error)
             {
                 console.log(error)
             }
          }
        pulldata()
  },[]) 

  function Editcolomchange(i, stdrecord)
     {
        console.log(i)
        setIndex(i)
          console.log(stdrecord)
         seteditcolomdata(stdrecord)
         setupdateeditcolmdata(stdrecord)
         setstdinfo1(stdrecord)
     }

     function updateName(e)
     {
        //console.log(e.target.value)
         seteditcolomdata(e)
         setupdateeditcolmdata({...updateeditcolmdata, name:e.target.value})
         setstdinfo1({...stdinfo1, name:e.target.value })
     }



     function updatedesignation(e)
     {
        //console.log(e.target.value)
         seteditcolomdata(e)
         setupdateeditcolmdata({...updateeditcolmdata, designation:e.target.value})
         setstdinfo1({...stdinfo1, designation:e.target.value })
     }

     function updateclassteacher(e)
     {
        //console.log(e.target.value)
         seteditcolomdata(e)
         setupdateeditcolmdata({...updateeditcolmdata, classteacher2:e.target.value})
         setstdinfo1({...stdinfo1, isactive:e.target.value })
     }

     function updateisactive(e)
     {
        //console.log(e.target.value)
         seteditcolomdata(e)
         setupdateeditcolmdata({...updateeditcolmdata, classteacher2:e.target.value})
         setstdinfo1({...stdinfo1, isactive:e.target.value })
     }




     async function  saveRow1( )
   {
    const confirmEdit = window.confirm("Do you want to edit this record?");

          if(confirmEdit)
          {

    try{
    {/*    setstdinfo1({...stdinfo1, userid:GET_USER_ID()})*/}
      // let ApiResponse= await axios.post('http://localhost:8080/s/save',stdinfo1)
       //let ApiResponse= await axios.post('http://65.2.25.249:8080/s/save',stdinfo1)
       console.log("stdinfo",stdinfo1)
      // let ApiResponse= await axios.post('http://65.2.25.249:8080/s/save',stdinfo1,{headers:{Authorization:token1}})///Std_info/c1/u/10/C
      //  let ApiResponse= await axios.post('http://localhost:8080/admin/get/users/p',stdinfo1,{headers:{Authorization:token1}})///Std_info/c1/u/10/C
        let ApiResponse= await axios.post('http://65.2.25.249:8080/admin/get/users/p',stdinfo1,{headers:{Authorization:token1}})///Std_info/c1/u/10/C

        setIndex(null)
       setstdinfo1({})
      // const apiResponse = await axios.get(`http://localhost:8080/admin/get/users`,{headers:{Authorization:token1}}) 
       const apiResponse = await axios.get(`http://65.2.25.249:8080/admin/get/users`,{headers:{Authorization:token1}}) 
                               
       console.log(apiResponse) 
       setawsresposes(apiResponse.data)
      // window.location=`/std_info/c1/u/${stdid1}/${section1}`


    }
    catch(error)
    {
        console.log(error)
    }
}
}

async function deleterow(stdrecord)
    {
        console.log(stdrecord)
          const confirmEdit = window.confirm("Do you want to DELETE this record?");

          if(confirmEdit)
          {
       try 
       { 
            const data =    {
                                name: stdrecord.name,
                                email:stdrecord.email

                            };
         
            
          //  let ApiResponse= await axios.post('http://localhost:8080/s/'+e.id+'/dele')
          //  let ApiResponse= await axios.post('http://65.2.25.249:8080/s/'+e.id+'/dele')
         // let ApiResponse= await axios.post('http://localhost:8080/m/admin/dele',data,{headers:{Authorization:token1}})
          let ApiResponse= await axios.post('http://65.2.25.249:8080/m/admin/dele',data,{headers:{Authorization:token1}})
 
       //  const apiResponse = await axios.get(`http://localhost:8080/admin/get/users`,{headers:{Authorization:token1}}) 
         const apiResponse = await axios.get(`http://65.2.25.249:8080/admin/get/users`,{headers:{Authorization:token1}}) 
                               
       console.log(apiResponse) 
       setawsresposes(apiResponse.data)

                      
       }
       catch(error)
       {
        console.log(error)
       }
    }
    }


     




    
 



    return(
        <div className="container">
            <div className="row " style={{marginBottom:"50px"}}>
                <Navbar/> 

            </div>
              <div className="row mt-5">
                <div className="col-12 mt-5 " style={{marginBottom:"50px"}}>

                    <table className="table compact-table table-sm align-middle table-striped table-hover" style={{margin:"auto"}} >
                <thead>
                    <tr className="fw-bold"  style={{ textAlign:"center", fontSize:"20px"}}> 
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Name</td> 
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Image</td> 
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Email</td>
                            <td style={{ textAlign:"center", fontSize:"20px"}}>ROLE</td>
                            <td style={{ textAlign:"center", fontSize:"20px"}}>DESIGNATION</td>
                         
                            <td style={{ textAlign:"center", fontSize:"20px"}}>CLASS TEACHER</td>
                            <td style={{ textAlign:"center", fontSize:"20px"}}>MOBILE   </td>

                            <td style={{ textAlign:"center", fontSize:"20px"}}>IS ACTIVE</td>
                            {/* <td style={{ textAlign:"center", fontSize:"20px"}}>Address</td>
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Mobile</td>
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Father</td>
                            <td style={{ textAlign:"center", fontSize:"20px"}}> Gaurdian</td>
                            <td style={{ textAlign:"center", fontSize:"20px"}}>ClassTeacher</td>*/}
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Delete</td> 
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Edit</td>
                            
                    </tr>
                </thead>
                <tbody>
       
                 {  
                    awsresposes.map((stdrecord, i)=>(
                        <tr key={i}>
                        <td  style={{width:"20px", textAlign:"center"}}> 

                              {index===i?(<input value={editcolomdata.name } onChange={(e)=>updateName(e)}  style={{width:"100px",fontSize:"15px"}} />):    <h4 style={{fontSize:"20px"}} > {stdrecord.name }  </h4>  }
                            </td> 

                            <td  style={{width:"40px", textAlign:"center"}}> 
                                <img src={stdrecord.imgurl} className="student-photo"/>
                            </td> 


                            <td  style={{width:"60px", textAlign:"center"}}>
                          <h4 style={{fontSize:"20px"}} > {stdrecord.email }  </h4>

                                  
                            </td>
                            
                        <td style={{width:"100px", textAlign:"center", color:"red"}}>
                               <h6> {(stdrecord.role)}  </h6>   
                                                                                                                                                             
                        </td>
                        <td style={{width:"40px", textAlign:"center"}}>
                            {index===i?(<select value={editcolomdata.designation} onChange={(e)=>updatedesignation(e)} style={{width:"100px",fontSize:"15px"}} >
                                       <option>TEACHER</option>
                                       <option>STAFF</option>
                                       <option>STUDENT</option>

                            </select>):  <h6  >  {(stdrecord.designation)}   </h6>}
            
                           </td>
                        <td style={{width:"40px", textAlign:"center"}}>
                             {index===i?(<select value={editcolomdata.classteacher2 } onChange={(e)=>updateclassteacher(e)}  style={{width:"50px",fontSize:"15px"}}>
                                
                                     <option>1</option>
                                     <option>2</option>
                                     <option>3</option>
                                     <option>4</option>
                                     <option>5</option>
                                     <option>6</option>
                                     <option>7</option>
                                     <option>8</option>
                                     <option>9</option>
                                     <option>10</option>

                                
                                 </select>):  <h6>   {(stdrecord.classteacher2)}  </h6>  }
                       </td>

                        
                        <td style={{width:"40px", textAlign:"center"}}>   
                              <h6>   {(stdrecord.mobile)}  </h6>  
        
                        </td>
                       <td style={{width:"40px", textAlign:"center"}}>
                            {index===i?(<select value={editcolomdata.otpverified} onChange={(e)=>updateisactive(e)} style={{width:"100px",fontSize:"15px"}} >
                                       
                                       <option>false</option>
                                       <option>true</option>

                            </select>):  <h6 style={{color:"red"}} >  {String(stdrecord.otpverified)}   </h6>}
            
                           </td>
                          {/* <td style={{width:"40px", textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata.gaurdian } onChange={(e)=>updategaurdian(e)} style={{width:"80px"}}   />):   <h6>   {(stdrecord.gaurdian)}  </h6>  }    
                            </td>
                        <td style={{width:"40px", textAlign:"center"}}> 
                             {index===i?(<input value={editcolomdata.classteacher } onChange={(e)=>updateTeacher(e)} style={{width:"120px", fontSize:"14px"}}  />):  <h6>   {(stdrecord.classteacher)}  </h6>  }
                                                                                                                                                                 
                             
                             </td>
                         */}
                        <td  style={{width:"40px", textAlign:"center"}}>  <button className="btn btn-primary" onClick={e=>deleterow(stdrecord)}>Delete</button></td>

                         <td  style={{width:"40px", textAlign:"center"}}>  {index === i ? (
                  <button className="btn btn-success" onClick={() => saveRow1()}>Save</button>
                ) : (
                  <button className="btn btn-primary" onClick={() => Editcolomchange(i,stdrecord)}>Edit</button>
                )}</td>
                        </tr>
                    ))
           }
                 </tbody>
            </table>
                </div>
            </div> 
        </div> 

    )
}
export default SchUserList