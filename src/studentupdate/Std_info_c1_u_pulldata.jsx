import axios from "axios"
import { useEffect, useState } from "react"
//import Std_info_c1_e from "./Std_info_c1_e"
import Add_new_student from "../studentupdate/Add_new_student"///add student
//import { GET_USER_ID, GET_USER_NAME } from "./utilils"

function Std_info_c1_u_pulldata({stdid1})
{//Std_info/c1/u/pulldata
    // let userName=GET_USER_NAME()
      //    let userId=GET_USER_ID()
                   
        // if(userName==null)
        //   {
        //     window.location="/homesch"
        //   }

        //console.log(stdid1)
       //  const {classid}=useParams()
     //   console.log("std_info_c1_u_pulldata classid:"+stdid1)

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
            console.log("std_info_c1_u_pulldata classid:"+stdid1)
            try{

                                        const apiResponse = await axios.get(
                               `http://13.233.74.60:8080/s/pullrecords1/${stdid1}`
                                );
             //  console.log(apiResponse)

            //  let apiResponse=await axios.get('http://localhost:8080/s/pullrecords1/'+stdid1) //pull all the records
            //  console.log(apiResponse)

            //  let apiResponse=await axios.get('http://localhost:8080/s/pullrecords1') //pull class wise records
            // console.log(apiResponse.data)
           //  console.log(apiResponse.data['0'])
             setstdinfo(apiResponse.data)
             
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
            
            let ApiResponse= await axios.post('http://localhost:8080/s/'+e.id+'/dele')
            console.log(ApiResponse.data.Message)
            setstddelapimsg(ApiResponse.data.Message)
            window.location=`/std_info/c1/u/${stdid1}`
            Std_info_c1_u_pulldata()

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
         setupdateeditcolmdata({...updateeditcolmdata, name:e.target.value})
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
         setupdateeditcolmdata({...updateeditcolmdata, standardandsection:e.target.value})
         setstdinfo1({...stdinfo1, standardandsection:e.target.value })

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
       let ApiResponse= await axios.post('http://localhost:8080/s/save',stdinfo1)
     setIndex(null)
      window.location=`/std_info/c1/u/${stdid1}`
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
         
         <div>
            <h1>pull data</h1>
            <div>
            <h3 className="text-danger">{stddelapimsg}</h3>
            </div>

           
            <div>
             
  
  
            <table className=" compact-table table table-sm align-middle table-striped table-hover">
                <thead>
                    <tr className="fw-bold"> 
                           <td>rollno</td> 
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
                        <td>
                            {index===i?(<input value={editcolomdata.name } onChange={(e)=>updateName(e)} style={{ height: "24px", fontSize: "12px", padding: "2px" }}/>):(stdrecord.name)}
                        </td>
                        <td>
                            {index===i?(<input value={editcolomdata.gender} onChange={(e)=>updateGender(e)}/>):(stdrecord.gender)}
                            
                            </td>
                        <td>
                            {index===i?(<input value={editcolomdata.address } onChange={(e)=>updateAddress(e)}/>):(stdrecord.address)}
                             
                            </td>
                         <td>
                            {index===i?(<input value={editcolomdata.standardandsection } onChange={(e)=>updateStandred(e)}/>):(stdrecord.standardandsection)} 
                           
                            </td> 
                        <td>
                             {index===i?(<input value={editcolomdata.dob } onChange={(e)=>updatedob(e)}/>):(stdrecord.dob)} 
                             
                             </td>
                        <td>
                             {index===i?(<input value={editcolomdata.doj } onChange={(e)=>updatedoj(e)}/>):(stdrecord.doj)} 
                             
                             </td> 
                        <td>  
                             {index===i?(<input value={editcolomdata.mobile } onChange={(e)=>updateMobile(e)}/>):(stdrecord.mobile)} 
                            
                             </td>
                        <td>   {index===i?(<input value={editcolomdata.father } onChange={(e)=>updateFather(e)}/>):(stdrecord.father)} 
                              </td>
                        <td>
                            {index===i?(<input value={editcolomdata.gaurdian } onChange={(e)=>updategaurdian(e)}/>):(stdrecord.gaurdian)} 
                            </td>
                        <td> 
                             {index===i?(<input value={editcolomdata.classteacher } onChange={(e)=>updateTeacher(e)}/>):(stdrecord.classteacher)} 
                             
                             </td>
                        <td> 
                             {index===i?(<input value={editcolomdata.other } onChange={(e)=>updateOther(e)}/>):(stdrecord.other)} 
                            
                            </td> 
                        <td>  <button className="btn btn-primary" onClick={e=>deleterow(stdrecord)}>Delete</button></td>

                         <td>  {index === i ? (
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
    )
}
export default Std_info_c1_u_pulldata

{/*

     {stdrecord.rollno}
                    {stdrecord.gender}
                    {stdrecord.address}
                    {stdrecord.standardandsection}
                    {stdrecord.dob}
                    {stdrecord.doj}
                    {stdrecord.mobile}
                    {stdrecord.father}
                    {stdrecord. gaurdian}
                    {stdrecord.classTeacher}
                    {stdrecord.other}
    
    
    
    
    
    
    */ }
