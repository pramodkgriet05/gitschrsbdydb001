import axios from "axios"
import { useEffect, useState } from "react"
//import Std_info_c1_e from "./Std_info_c1_e"
//import Add_new_student from "../studentupdate/Add_new_student"///add student
 
import imgstd from '../pics/profile/profile_pic.jpg'
import { GET_USER_ID, GET_USER_NAME } from "../Utils/Utils"

function PullEditdelawsBySection({stdid1,section1})
{//Std_info/c1/u/pulldata
     let userName=GET_USER_NAME ()
          let userId=GET_USER_ID()
                   
         if(userName==null)
           {
             window.location="/homesch"
           }

        //console.log(stdid1)
       //  const {classid}=useParams()
     //   console.log("std_info_c1_u_pulldata classid:"+stdid1)

   //let[stdinfo, setstdinfo]=useState({img1:"",roll_no:"",name:"",standardandsection:"",gender:"",dob:"",doj:"",address:"",mobile:"",father:"", gaurdian:"",classTeacher:"",other:"", userid:""})
   let[stdinfo1, setstdinfo1]=useState({img1:"",imgFileName:"",rollno:"",name:"",standred:"",section:"",gender:"",dob:"",doj:"",address:"",mobile:"",father:"", gaurdian:"",classteacher:"",other:"", userid:""})
   let[stdinfo, setstdinfo]=useState([]) 
   let[stddelapimsg, setstddelapimsg]=useState( )
   let[sendEditData, setsendEditData]=useState()
   let[index, setIndex]=useState(null)
   let[student, setstudent]=useState([])
   let[editcolomdata, seteditcolomdata]=useState()
   let[updateeditcolmdata, setupdateeditcolmdata]=useState()
   let[deldata, setdeldata]=useState({img1:"",imgFileName:"",rollno:"",name:"",standred:"",section:"",gender:"",dob:"",doj:"",address:"",mobile:"",father:"", gaurdian:"",classteacher:"",other:"", userid:""})
   let sectionoption=section1;

   


       let[awsresposes, setawsresposes]=useState([])

       let classidsch=stdid1;
  
   useEffect(()=>{

       async function pulldata()
        {
            // console.log("std_info_c1_u_pulldata classid:"+stdid1)
             try{

            //                              const apiResponse = await axios.get(
            //                    `http://65.2.25.249:8080/s/pullrecords1/${stdid1}`
            //                     );
            //    console.log(apiResponse)
                //let apiresponse=await axios.get(`http://localhost:8080/m/s/getrecords/${classidsch}`) 
              //  let apiresponse=await axios.get(`http://localhost:8080/m/s/p/getrecords/${classidsch}/${sectionoption}`)
                let apiresponse=await axios.get(`http://65.2.25.249:8080/m/s/p/getrecords/${classidsch}/${sectionoption}`)
                 console.log(apiresponse)
          console.log(apiresponse.data)
          setawsresposes(apiresponse.data)

            //   let apiResponse=await axios.get('http://localhost:8080/s/pullrecords1/'+stdid1) //pull all the records
            //   console.log(apiResponse)

            //  let apiResponse=await axios.get('http://localhost:8080/s/pullrecords1') //pull class wise records
            // console.log(apiResponse.data)
           //  console.log(apiResponse.data['0'])
            // setstdinfo(apiResponse.data)
             
            }
             
            catch(error)
            {
                console.log(error)
            }

        }
        // window.location="/Std_info/c1/u"

     pulldata()
        
             //  console.log(apiresponse)
              // console.log(apiresponse.data.result)
    },[]) 
    function eitColom1(stdrecord)
    {
       // console.log(stdrecord)
     //   seteditcolomdata(stdrecord)
          console.log(editcolomdata)

    }

    async function deleterow(e)
    {
         
       try 
       {

       // console.log(e.imgFileName)
        // setdeldata(e)
      //   const senddeldata=e.imgFileName
                //         setdeldata(prev => ({
                // ...prev,
                // imgdatasend: e.imgFileName,
                // standardandsection: e.standardandsection
                // }));

                                const data = {
                    imgdatasend: e.imgFileName,
                    standred: e.standred,
                    section:e.section,
                    stdcode:e.stdcode,
                    rollno:e.rollno

                };
         setdeldata({...deldata, imgdatasend:e.imgFileName,standardandsection:e.standardandsection})
         //setdeldata({...deldata, standardandsection:e.standardandsection})

            
          //  let ApiResponse= await axios.post('http://localhost:8080/s/'+e.id+'/dele')
          //  let ApiResponse= await axios.post('http://65.2.25.249:8080/s/'+e.id+'/dele')
          //let ApiResponse= await axios.post('http://localhost:8080/m/s/dele',data)
          let ApiResponse= await axios.post('http://65.2.25.249:8080/m/s/dele',data)

          console.log(ApiResponse)

            console.log(ApiResponse.data.Message)
            setstddelapimsg(ApiResponse.data.Message)
             window.location=`/std_info/c1/u/${stdid1}/${section1}`
             

       }
       catch(error)
       {
        console.log(error)
       }
    }
    function Editcolomchange(i, stdrecord)
     {
        console.log(i)
        setIndex(i)
          console.log(stdrecord)
         seteditcolomdata(stdrecord)
         setupdateeditcolmdata(stdrecord)
         setstdinfo1(stdrecord)
     }
      function updateRollno(e)
     {
        //console.log(e.target.value)
         seteditcolomdata(e)
         setupdateeditcolmdata({...updateeditcolmdata, rollno:e.target.value})
         setstdinfo1({...stdinfo1, rollno:e.target.value })
     }
     function updateName(e)
     {
        //console.log(e.target.value)
         seteditcolomdata(e)
         setupdateeditcolmdata({...updateeditcolmdata, name:e.target.value})
         setstdinfo1({...stdinfo1, name:e.target.value })
     }
     function updateGender(e)
     {
         seteditcolomdata(e)
         setupdateeditcolmdata({...updateeditcolmdata, gender:e.target.value})
         setstdinfo1({...stdinfo1, gender:e.target.value })
        
     }
     function updateAddress(e)
     {
         seteditcolomdata(e)
         setupdateeditcolmdata({...updateeditcolmdata, address:e.target.value})
         setstdinfo1({...stdinfo1, address:e.target.value })

     }
     function updateStandred(e)
     {
         seteditcolomdata(e)
         setupdateeditcolmdata({...updateeditcolmdata, standred:e.target.value})
         setstdinfo1({...stdinfo1, standred:e.target.value })

     }
     function updateSection(e)
     {
         seteditcolomdata(e)
         setupdateeditcolmdata({...updateeditcolmdata, section:e.target.value})
         setstdinfo1({...stdinfo1, section:e.target.value })

     }
     function updatedob(e)
     {
         seteditcolomdata(e)
         setupdateeditcolmdata({...updateeditcolmdata, dob:e.target.value})
         setstdinfo1({...stdinfo1, dob:e.target.value })

     }
     function updatedoj(e)
     {
         seteditcolomdata(e)
         setupdateeditcolmdata({...updateeditcolmdata, doj:e.target.value})
         setstdinfo1({...stdinfo1, doj:e.target.value })

     }
     function updateMobile(e)
     {
         seteditcolomdata(e)
         setupdateeditcolmdata({...updateeditcolmdata, mobile:e.target.value})
         setstdinfo1({...stdinfo1, mobile:e.target.value })

     }
     function updateFather(e)
     {
         seteditcolomdata(e)
         setupdateeditcolmdata({...updateeditcolmdata, father:e.target.value})
         setstdinfo1({...stdinfo1, father:e.target.value })

     }
     function updategaurdian(e)
     {
         seteditcolomdata(e)
         setupdateeditcolmdata({...updateeditcolmdata,  gaurdian:e.target.value})
         setstdinfo1({...stdinfo1,  gaurdian:e.target.value })

     }
     function updateTeacher(e)
     {
         seteditcolomdata(e)
         setupdateeditcolmdata({...updateeditcolmdata, classteacher:e.target.value})
         setstdinfo1({...stdinfo1, classteacher:e.target.value })

     }
     function updateOther(e)
     {
         seteditcolomdata(e)
         setupdateeditcolmdata({...updateeditcolmdata, other:e.target.value})
         setstdinfo1({...stdinfo1, other:e.target.value })

     }


     function saveRow()
     {

     }
    
    function Editcolom(e,index,field)
    {
        //console.log(i)
       // setIndex(i)
        // const updatestudent=([...student])
        // updatestudent[index][field]=e.target.value

        // setstudent([...updatestudent])
        console.log(e)
    }
     
  async function  saveRow1( )
   {
    

    try{
    {/*    setstdinfo1({...stdinfo1, userid:GET_USER_ID()})*/}
      // let ApiResponse= await axios.post('http://localhost:8080/s/save',stdinfo1)
       //let ApiResponse= await axios.post('http://65.2.25.249:8080/s/save',stdinfo1)
       console.log("stdinfo",stdinfo1)
      // let ApiResponse= await axios.post('http://localhost:8080/s/save',stdinfo1)///Std_info/c1/u/10/C
        let ApiResponse= await axios.post('http://65.2.25.249:8080/s/save',stdinfo1)///Std_info/c1/u/10/C
       setIndex(null)
       window.location=`/std_info/c1/u/${stdid1}/${section1}`
    }
    catch(error)
    {
        console.log(error)
    }
    function Editcol1(stdrecord)
    {
        console.log(stdrecord)

    }
    function saveRow()
    {

    }
    

   }
    
    
    
    return(
         
        
            <div  className="row">
            <div className="col-12">
            <h1>pulledit & delete  data{deldata.imgdatasend}</h1> 
           <div style={{display:"flex", gap:"10px", alignItems:"center"}}> <h5>Class:</h5> <h3>{classidsch}</h3></div>
           <div style={{display:"flex", gap:"10px", alignItems:"center"}}> <h5>Section:</h5> <h3>{sectionoption}</h3></div>
           <div style={{display:"flex", gap:"10px", alignItems:"center"}}> <h5>Teacher:</h5> <h3>classid</h3></div>
           
           <div>
            <h3 className="text-danger">{stddelapimsg}</h3>
            </div>

           
            <div>
             
  
  
           <table className="table compact-table table-sm align-middle table-striped table-hover" style={{margin:"auto"}} >
                <thead>
                    <tr className="fw-bold"  style={{ textAlign:"center", fontSize:"20px"}}> 
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Rollno</td> 
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Std.Code</td> 
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Photo</td>
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Name</td>
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Gender</td>
                         
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Dob</td>
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Doj</td>
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Address</td>
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Mobile</td>
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Father</td>
                            <td style={{ textAlign:"center", fontSize:"20px"}}> Gaurdian</td>
                            <td style={{ textAlign:"center", fontSize:"20px"}}>ClassTeacher</td>
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Delete</td>
                            <td style={{ textAlign:"center", fontSize:"20px"}}>Edit</td>
                            
                    </tr>
                </thead>
                <tbody>
       
                 {  
                    awsresposes.map((stdrecord, i)=>(
                        <tr key={i}>
                        <td  style={{width:"20px", textAlign:"center"}}> 
                            <h4 style={{fontSize:"20px"}} > {stdrecord.rollno }  </h4>
                            </td> 
                            <td  style={{width:"40px", textAlign:"center"}}> 
                            <h4 style={{fontSize:"20px"}} > {stdrecord.stdcode }  </h4>
                            </td> 


                            <td  style={{width:"60px", textAlign:"center"}}>
                                  <img src={stdrecord.imgdata} className="student-photo"/>
                            </td>
                            
                        <td style={{width:"100px", textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata.name } onChange={(e)=>updateName(e)}  style={{width:"100px",fontSize:"15px"}} />):     <h6> {(stdrecord.name)}  </h6>   }
                                                                                                                                                             
                        </td>
                        <td style={{width:"40px", textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata.gender} onChange={(e)=>updateGender(e)} style={{width:"60px"}} />):  <h6  >  {(stdrecord.gender)}   </h6>}
                             
                            </td>


                        
                        <td style={{width:"40px", textAlign:"center"}}>
                             {index===i?(<input value={editcolomdata.dob } onChange={(e)=>updatedob(e)}  style={{width:"100px",fontSize:"12px"}}/>):  <h6>   {(stdrecord.dob)}  </h6>  }
                             
                             </td>
                        <td style={{width:"40px", textAlign:"center"}}>
                             {index===i?(<input value={editcolomdata.doj } onChange={(e)=>updatedoj(e)} style={{width:"100px",fontSize:"12px"}}/>):  <h6>   {(stdrecord.doj)}  </h6>  }
                             
                             </td> 
                              <td style={{width:"40px", textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata.address } onChange={(e)=>updateAddress(e)} style={{width:"200px",fontSize:"15px", height:"100px", verticalAlign:"top", resize:"vertical"}}/>):  <h6>   {(stdrecord.address)}  </h6>  }
                             
                            </td>
                        <td style={{width:"40px", textAlign:"center"}}>   
                             {index===i?(<input value={editcolomdata.mobile } onChange={(e)=>updateMobile(e)} style={{width:"80px",fontSize:"12px"}}  />): <h6>   {(stdrecord.mobile)}  </h6>  }
                            
                             </td>
                        <td style={{width:"40px", textAlign:"center"}}>   {index===i?(<input value={editcolomdata.father } onChange={(e)=>updateFather(e)}  style={{width:"70px",fontSize:"14px"}}    />):   <h6>   {(stdrecord.father)}  </h6>  }
                              </td>
                        <td style={{width:"40px", textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata.gaurdian } onChange={(e)=>updategaurdian(e)} style={{width:"80px"}}   />):   <h6>   {(stdrecord.gaurdian)}  </h6>  }    
                            </td>
                        <td style={{width:"40px", textAlign:"center"}}> 
                             {index===i?(<input value={editcolomdata.classteacher } onChange={(e)=>updateTeacher(e)} style={{width:"120px", fontSize:"14px"}}  />):  <h6>   {(stdrecord.classteacher)}  </h6>  }
                                                                                                                                                                 
                             
                             </td>
                        
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
             
           
            {  
                sendEditData &&  <Std_info_c1_e SendRow={sendEditData}/>
            }
            </div>
            </div>
            </div>
             
    )
}
export default PullEditdelawsBySection

 
