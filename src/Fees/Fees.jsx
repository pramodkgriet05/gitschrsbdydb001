import axios from "axios"
import { useEffect, useState } from "react"

import { Link, useNavigate, useParams } from "react-router-dom"
import { GET_USER_ID, GET_USER_NAME } from "../../Utils/Utils"
import api from "../api/Interaxios"

function Fees()
{
     let userName=GET_USER_NAME()
     let userid=GET_USER_ID()
     console.log(userName)
     console.log(userid)
                 
                 if(userName==null)
                {
                 window.location="/"
                }

                 let token=localStorage.getItem("token")
        console.log(token)
        let token1="Bearer"+" "+token;
       
     

  let[fees,setfees]=useState({acadamicyear:"", class1:"" ,section:"",month:"",year:"",description:"",uploadimages1:""})

  let[uploadimages, setuploadimages]=useState({})


  let[files, setfiles]=useState([])
   let[awsresposes,setawsresposes]=useState([])
 let {year}=useParams()
 let {type}=useParams()
let[pulleventsdetails,setpulleventsdetails]=useState(false)
let[pulleventdetailsdata, setpulleventdetailsdata]=useState([])

const [uploadedCount, setUploadedCount] = useState(0);
const [isUploading, setIsUploading] = useState(false);

let[editcolomdata2, seteditcolomdata2]=useState([])
let[updateeditcolmdataR,setupdateeditcolmdataR]=useState([])
 let[index, setIndex]=useState(null)
  const [errorg, setErrorg] = useState(0);
let[pleasecheck,setpleasecheck]=useState("")
 let[markserrorw,setmarkserrorw]=useState(false)
     let[markserroro,setmarkserroro]=useState(false)



let navigate=useNavigate() 
          

          

                 

 console.log(year)
  console.log(type)

      
        function Editcolomchange(i,data)
        {
             setIndex(i)
            console.log(i)
            console.log(data)
            seteditcolomdata2({...data})
            setupdateeditcolmdataR({...data,  updatedby1:userName,userid:userid})
          //   setupdateeditcolmdataR({...updateeditcolmdataR, updatedby1:userName})

        }

        async function saveandsend()
        {
          
          try
          {
          if(errorg===0)
          {
            const confirmEdit = window.confirm("Do you want to edit this record?");
            if(confirmEdit)
            {   
               //let apiresponse1=await axios.post(`http://localhost:8080/auth/admin/fees`,updateeditcolmdataR,{headers:{Authorization:token1}})
               //let apiresponse1=await axios.post(`http://65.2.25.249:8080/auth/admin/fees`,updateeditcolmdataR,{headers:{Authorization:token1}})
               let apiresponse1=await api.post(`/auth/admin/fees`,updateeditcolmdataR,{headers:{Authorization:token1}})
               console.log(apiresponse1);
              setIndex(null)
              setupdateeditcolmdataR({})
              setpleasecheck(" ")
          
          }
           // let apiresponse = await axios.post(`http://localhost:8080/m/s/fees`,fees,{headers:{Authorization:token1}})
         //let apiresponse = await axios.post(`http://65.2.25.249:8080/m/s/fees`,fees,{headers:{Authorization:token1}})
         let apiresponse = await api.post(`/m/s/fees`,fees,{headers:{Authorization:token1}})

         console.log(apiresponse)
             setpulleventsdetails(true)
             setpulleventdetailsdata(apiresponse.data)
     }
     }
     catch(e)
     {
          console.log(e)
     }


       }
        function updatefirstlangW(e)
        {
             let val=e.target.value
             console.log(val)
             seteditcolomdata2(prev => ({ ...prev, actualbalance: val }));
            
               if (Number(val) > 50000)
          {
         
              setErrorg(1); 
              console.log("eg:",errorg)
             setmarkserrorw(true)
              setpleasecheck("actual amount  greater than 50000")
          }
          else{
            setErrorg(0); 
          setmarkserrorw(false) 
                    setupdateeditcolmdataR(prev => ({ ...prev,  actualbalance: val, }));
        }

        }
        function updateterm1(e)
        {
          let val=Number(e.target.value)
          let t1=val;
          let t2=Number(editcolomdata2.term2||0)
          let t3 = Number(editcolomdata2.term3 || 0);
          let t4 = Number(editcolomdata2.term4 || 0);

          let ab=Number(editcolomdata2.actualbalance || 0)

          let total=t1+t2+t3+t4;

          seteditcolomdata2(prev => ({ ...prev, term1: val }));
          console.log(ab)
          console.log(val)
          console.log(e)
          
          if(total>ab)
          {
               setErrorg(1); 
               console.log("eg:",errorg)
               setmarkserrorw(true)
               setpleasecheck("Total is greater than actual  balance")

          }
        else{
           setErrorg(0); 
          setmarkserrorw(false) 
          setupdateeditcolmdataR(prev => ({ ...prev,  term1: val }));
          setpleasecheck("Total is greater than actual  balance")


        }
        }
         function updateterm2(e)
        {
          let val=Number(e.target.value)
          let t1=Number(editcolomdata2.term1||0)
          let t2=val;
          let t3 = Number(editcolomdata2.term3 || 0);
          let t4 = Number(editcolomdata2.term4 || 0);
        
          let ab=Number(editcolomdata2.actualbalance||0)
          let total=t1+t2+t3+t4;

          seteditcolomdata2(prev => ({ ...prev, term2: val }));
           if(total>ab)
          {
               setErrorg(1); 
               console.log("eg:",errorg)
               setmarkserrorw(true)
               setpleasecheck("total fees greater than actual balance") 
        }
        else{
           setErrorg(0); 
          setmarkserrorw(false) 
          setupdateeditcolmdataR(prev => ({ ...prev,  term2: val }));
          setpleasecheck("") 
        }
        }

        function updateterm3(e)
        {
          let val=Number(e.target.value)
          console.log(val)
          let t1=Number(editcolomdata2.term1||0)
          let t2=Number(editcolomdata2.term2||0)
          let t3=val;
          let t4=Number(editcolomdata2.term4||0)
          let ab=Number(editcolomdata2.actualbalance)
          let total=t1+t2+t3+t4;
          seteditcolomdata2(prev => ({ ...prev, term3: val }));
           
          if(total>ab)
          {
               setErrorg(1); 
              console.log("eg:",errorg)
             setmarkserrorw(true)
              setpleasecheck("total fees greater than actual balance")

          }
        else{
           setErrorg(0); 
          setmarkserrorw(false) 
          setupdateeditcolmdataR(prev => ({ ...prev,  term3: val }));
          setpleasecheck("") 

           }
        }
        function updateterm4(e)
        {
          let val=Number(e.target.value)
          let t1=Number(editcolomdata2.term1)
          let t2=Number(editcolomdata2.term2)
          let t3=Number(editcolomdata2.term3)
          let t4=val;
          let ab=Number(editcolomdata2.actualbalance)
          let total=t1+t2+t3+t4;
          seteditcolomdata2(prev => ({ ...prev, term4: val }));
           
          if(total>ab)
          {
               setErrorg(1); 
               console.log("eg:",errorg)
               setmarkserrorw(true)
               setpleasecheck("total fees greater than actual balance")

          }
        else{
           setErrorg(0); 
          setmarkserrorw(false) 
          setupdateeditcolmdataR(prev => ({ ...prev,  term4: val }));
          setpleasecheck("")

        }
        }

 
async function submitapi()
{
       
                //let apiresponse = await axios.post(`http://localhost:8080/api/m/s/fees`,fees, {headers:{Authorization:token1}})
                //let apiresponse = await axios.post(`http://65.2.25.249:8080/m/s/fees`,fees,{headers:{Authorization:token1}})
                let apiresponse = await api.post(`/m/s/fees`,fees,{headers:{Authorization:token1}}) 
                console.log(apiresponse)
                setpulleventsdetails(true)
                setpulleventdetailsdata(apiresponse.data)
}                  
                 
                   return(
         <div className="container ">
              
                <div className="row">
                  <div  style={{position:"relative"}}>
                          <Link  to={`/stdinfo`} style={{ position:"absolute", top:"100px",right:"100px"}}className="btn btn-primary ms-3">Back</Link>
                          <Link  to={`/`} style={{ position:"absolute", top:"100px",right:"10px"}}className="btn btn-primary ms-3">Home</Link>
                  </div>
                   
                        <div className="col-12   d-flex justify-content-center align-items-center" style={{ width:"50vh",height: "30vh"}}>
                        
                        <h1>School Name </h1>
                        </div>
                        <div>
                            <h1> Department of Fees 2025-26</h1>
                        </div>
                        </div>
                        <div className="row mt-5">
                     
                        <div className="   col-2">
                            <h3>Academic Year</h3>
                            <h3>Class:</h3>
                            <h3>Section</h3>
                           

                            
   {/* // let[sports,setsports]=useState({eventname:"",day:"",month:"",year:"",Description:"",uploadimages:""}) */}

                            
                        </div>
                         
                        <div className="   col-2">
                        <select className='form-control std_rec_add1 ' value={fees.acadamicyear} placeholder='select year' onChange={e=>setfees({...fees, acadamicyear:e.target.value})} >
                        <option>select year</option>
                        <option>2026</option>
                        <option>2027</option>
                        <option>2028</option>
                        </select>
                        <select className='form-control std_rec_add1 ' value={fees.class1} placeholder='select year' onChange={e=>setfees({...fees, class1:e.target.value})} >
                        <option>select class</option>
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
                        </select>
                        <select className='form-control std_rec_add1 ' value={fees.section} placeholder='select year' onChange={e=>setfees({...fees, section:e.target.value})} >
                        <option>select section</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        </select>
                        <button className='btn btn-primary mt-2' onClick={e=>submitapi()}>submit</button>
                        </div>
                         
                </div>
                <div className="row" style={{marginTop:'50px'}}></div>
                <div style={{
                            borderBottom: "1px solid #bcb9b9",
                            margin: "6px 0"
                            }}></div>

                 <div className="row" style={{marginTop:'50px'}}></div>
                 {
                    markserrorw==true&&
                    <div    className="col-12"> <h2 className="text-danger  text-center"> {pleasecheck }   </h2></div>
                 }


                <div className="row">
                     <table className=" compact-table table table-sm align-middle table-striped table-hover">
                <thead>
                    <tr className="fw-bold" > 

                           <th >Rollno</th> 
                           <th>Photo</th>
                           <th>Name  </th>
                           <th>class</th> 
                           <th>sec</th>
                           <th>class teacher  </th>
                           <th>f.name</th>
                           <th>mobile no.</th>

                           <th style={{ textAlign:"center", fontSize:"20px"}}>act  amt</th > 
                           <th style={{ textAlign:"center", fontSize:"20px"}}>term1</th>
                           <th style={{ textAlign:"center", fontSize:"20px"}}>term2  </th>
                           <th style={{ textAlign:"center", fontSize:"20px"}}>term3</th>
                           <th style={{ textAlign:"center", fontSize:"20px"}}>term4</th>
                           <th style={{ textAlign:"center", fontSize:"20px"}}>bal amount</th>
                           <th style={{ textAlign:"center", fontSize:"20px"}}>total amount</th>
                           <th style={{ textAlign:"center", fontSize:"20px"}}>Updated By</th>
                           <th style={{ textAlign:"center", fontSize:"20px"}}>last added</th>
                           </tr>
                </thead>     
                     <tbody className="table-group-divider">
                    {
                        pulleventdetailsdata.map((data, i)=>(

                            <tr key={i}>
                                 
                                    <td >
                                         {data.rollno}
                                    </td>

                                     <td style={{  textAlign:"center"}}>
                                  <img src={data.imgdatasend} className="student-photo"/>
                                    </td>
                                      
                                     <td style={{ textAlign:"center", fontSize:"20px"}}>
                                         {data.name}
                                    </td>
                                     <td style={{ textAlign:"center"}} >
                                         {data.standred}
                                    </td>
                                    <td style={{ textAlign:"center"}} >
                                         {data.section}
                                    </td>
                                    <td style={{ textAlign:"center"}} >
                                         {data.classteacher}
                                    </td>
                                    <td style={{ textAlign:"center"}} >
                                         {data.father}
                                    </td>
                                    <td style={{ textAlign:"center"}}  >
                                         {data.mobile}
                                    </td> 
                                     <td style={{  textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata2.actualbalance?? ""} onChange={(e)=>updatefirstlangW(e)}   style={{width:"100px",border: Number(editcolomdata2.actualbalance ?? 0) > 50000? "2px solid red": "1px solid #ccc" }}/>):( data.actualbalance)}
                            
                                    </td> 
                                     <td style={{  textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata2.term1?? ""} onChange={(e)=>updateterm1(e)}   style={{width:"100px",border: Number(editcolomdata2.term1 ?? 0)  >editcolomdata2.actualbalance? "2px solid red": "1px solid #ccc" }}/>):( data.term1)}
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata2.term2?? ""} onChange={(e)=>updateterm2(e)}   style={{width:"100px",border: Number(editcolomdata2.term1 || 0)+ Number(editcolomdata2.term2||0)   > editcolomdata2.actualbalance? "2px solid red": "1px solid #ccc" }}/>):( data.term2)}
                              
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata2.term3?? ""} onChange={(e)=>updateterm3(e)}   style={{width:"100px",border: Number(editcolomdata2.term1 || 0)+ Number(editcolomdata2.term2||0)+ Number(editcolomdata2.term3||0)  > editcolomdata2.actualbalance? "2px solid red": "1px solid #ccc" }}/>):( data.term3)}
                              
                                    </td>
                                    <td style={{  textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata2.term4?? ""} onChange={(e)=>updateterm4(e)}   style={{width:"100px",border: Number(editcolomdata2.term1 || 0)+ Number(editcolomdata2.term2||0)+ Number(editcolomdata2.term3||0)+Number(editcolomdata2.term4||0)  > editcolomdata2.actualbalance? "2px solid red": "1px solid #ccc" }}/>):( data.term4)}
                              
                                    </td>

                                    <td
                                        style={{
                                        textAlign: "center",
                                        border: Number(data.remainingbalance) > 0
                                             ? "3px solid red"
                                             : "1px solid #ccc"
                                        }}
                                        >
                                        {data.remainingbalance}
                                        </td> 
                                    <td style={{  textAlign:"center"}}>
                                  {data.totalPaid} 
                              
                                    </td>
                                     <td style={{  textAlign:"center"}}>
                                  {data.updatedby1}
                               
                              
                                    </td>
                                    <td  style={{
         width:"120px",
         height:"100px",
         verticalAlign:"top",
         padding:"5px",
         textAlign:"center",
         fontSize:"12px",
         resize:"vertical"
      }} >
                                         {data.paidhistory?.split(",").map((time,index)=>( <div key={index}>{time}</div>))}
                                    </td>


                                    <td>  {index === i ? (
                                            <button className="btn btn-success" onClick={() => saveandsend(i)}>Save</button>
                                            ) : (
                                            <button className="btn btn-primary" onClick={() => Editcolomchange(i,data)}>Edit</button>
                                            )}</td>
                                </tr>
                             

                        ))

                    }
                    
                           </tbody>
                           </table>
                </div> 
                </div>
    )
}

export default Fees