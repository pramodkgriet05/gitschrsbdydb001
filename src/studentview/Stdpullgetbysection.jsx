import axios from "axios"
import { useEffect, useState } from "react"
import { GET_USER_ID, GET_USER_NAME } from "../../Utils/Utils"
// import Std_info_c1_e from "./Std_info_c1_e"
// import Add_new_student from "./add_new_student"
 
function Stdpullgetbysection({classid1,sectionid1})
{//Std_info/c1/u/pulldata
    let token=localStorage.getItem("token")
         let token1="Bearer"+" "+token;
    
      let userName=GET_USER_NAME()
           let userId=GET_USER_ID()
                   
         if(userName==null)
           {
             window.location="/homesch"
           }

   //let[stdinfo, setstdinfo]=useState({img1:"",roll_no:"",name:"",standardandsection:"",gender:"",dob:"",doj:"",address:"",mobile:"",father:"", gaurdian:"",classTeacher:"",other:"", userid:""})
   let[stdinfo1, setstdinfo1]=useState({img1:"",rollno:"",name:"",standardandsection:"",gender:"",dob:"",doj:"",address:"",mobile:"",father:"", gaurdian:"",classteacher:"",other:"", userid:""})
   let[stdinfo, setstdinfo]=useState([]) 
   let[stddelapimsg, setstddelapimsg]=useState( )
   let[sendEditData, setsendEditData]=useState()
   let[index, setIndex]=useState(null)
   let[student, setstudent]=useState([])
   let[editcolomdata, seteditcolomdata]=useState()
   let[updateeditcolmdata, setupdateeditcolmdata]=useState()



    
 
  
   useEffect(()=>{

       async function pulldata()
        {
             console.log(classid1)
             console.log(sectionid1)
    
            try{
             //let apiResponse=await axios.post('http://localhost:8080/s/pullrecords') pull all the records
                //let apiResponse=await axios.get(`http://localhost:8080/api/m/s/p/getrecords/${classid1}/${sectionid1}`,{headers:{Authorization:token1}})
              //let apiResponse=await axios.get(`http://65.2.25.249:8080/m/s/p/getrecords/${classid1}/${sectionid1}`,{headers:{Authorization:token1}})
              let apiResponse=await axios.get(`/api/m/s/p/getrecords/${classid1}/${sectionid1}`,{headers:{Authorization:token1}})
               console.log(apiResponse.data)
           //  console.log(apiResponse.data['0'])
               setstdinfo(apiResponse.data)
            }
             
            catch(error)
            {
                console.log(error)
            }

        }

     pulldata()
        
             //  console.log(apiresponse)
              // console.log(apiresponse.data.result)
    },[]) 

    
      
    
    return( 
         <div>
            <h1 className="mt-5">pull data Class: { classid1} - Section:  { sectionid1}</h1>
            <div>
            <h3 className="text-danger">{stddelapimsg}</h3>
            </div>

           
            <div>
             
  
  
            <table className=" mt-5 compact-table table table-sm align-middle table-striped table-hover"> 
                <thead>
                    <tr className="fw-bold"> 
                           <td>rollno</td> 
                           <td>photo</td>
                            <td>Name</td>
                            <td>Gender</td>
                            <td>address</td>
                            <td>Class</td>
                            <td>dob</td>
                            <td>doj</td>
                            <td>mobile</td>
                            <td>father</td>
                            <td> gaurdian</td>
                            <td>classTeacher</td>
                            <td>other</td>
                            
                    </tr>
                </thead>
                <tbody>
       
                 {  
                    stdinfo.map((stdrecord, i)=>(
                        <tr key={i}>
                        <td > 
                             {stdrecord.rollno }  
                            </td> 
                             <td  style={{width:"40px", textAlign:"center"}}>
                                  <img src={stdrecord.imgdata} className="student-photo"/>
                            </td>


                        <td>
                            
                            {stdrecord.name}
                        </td>
                        <td>
                            
                            {stdrecord.gender}
                            </td>
                        <td>
                            
                            {stdrecord.address}
                             
                            </td>
                         <td>
                            
                            {stdrecord.standardandsection}
                           
                            </td> 
                        <td>
                              
                             {stdrecord.dob}
                             
                             </td>
                        <td>
                              
                             {stdrecord.doj}
                             
                             </td> 
                        <td>  
                              
                             {stdrecord.mobile}
                            
                             </td>
                        <td>   

                        {stdrecord.father}
                              </td>
                        <td>
                             
                            {stdrecord.gaurdian}
                            </td>
                        <td> 
                             
                             {stdrecord.classteacher}
                             
                             </td>
                        <td> 
                             {stdrecord.other}
                            
                            </td> 
                       
                        
                    
                        </tr>
                       
                    ))

                    
                 

           }
              
             </tbody>
            </table>
             
           
             
            </div>
          
             </div>
    )
}
export default Stdpullgetbysection;

 
