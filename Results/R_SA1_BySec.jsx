import axios from "axios"
import { useEffect, useState } from "react"
//import Std_info_c1_e from "./Std_info_c1_e"
//import Add_new_student from "../studentupdate/Add_new_student"///add student
//import { GET_USER_ID, GET_USER_NAME } from "./utilils"

import imgstd from '../pics/profile/profile_pic.jpg'
import { useParams } from "react-router-dom"

function R_SA1_BySec({stdid1,section1,createrecords1})
{//Std_info/c1/u/pulldata
     let userName=GET_USER_NAME()
         let userId=GET_USER_ID()
                   
         if(userName==null)
           {
             window.location="/homesch"
           }

        //console.log(stdid1)
       //  const {classid}=useParams()
     //   console.log("std_info_c1_u_pulldata classid:"+stdid1)

   //let[stdinfo, setstdinfo]=useState({img1:"",roll_no:"",name:"",standardandsection:"",gender:"",dob:"",doj:"",address:"",mobile:"",father:"", gaurdian:"",classTeacher:"",other:"", userid:""})
   let[stdinfo1, setstdinfo1]=useState({stdcode:"",img1:"",imgFileName:"",rollno:"",name:"",standred:"",section:"",gender:"",dob:"",doj:"",address:"",mobile:"",father:"", gaurdian:"",classteacher:"",other:"", userid:""})
   let[stdinfo, setstdinfo]=useState([]) 
   let[stddelapimsg, setstddelapimsg]=useState( )
   let[sendEditData, setsendEditData]=useState()
   let[index, setIndex]=useState(null)
   let[student, setstudent]=useState([])
   let[editcolomdata, seteditcolomdata]=useState()
   let[editcolomdata2, seteditcolomdata2]=useState({})
   let[updateeditcolmdata, setupdateeditcolmdata]=useState()
    let[updateeditcolmdataR, setupdateeditcolmdataR]=useState( {})
   let[updateeditcolmdataR1, setupdateeditcolmdataR1]=useState({stdcode:"",img1:"",imgFileName:"",
                                       rollno:"",name:"",firstlangw:"0",firstlango:"0",
                                       seclangw:"0", seclango:"0",
                                       mathsw:"0",mathso:"0",
                                       sciencew:"0",scienceo:"0",
                                       englishw:"0",englisho:"0",
                                       socialw:"0",socialo:"0",
                                       evw:"0",evo:"0",
                                       evw1:"0",evo1:"0",
                                       evw2:"0",vo2:"0",
                                       evw3:"0",evo3:"0",remarks:"",
                                       tf:"0",ts:"0",te:"0",tm:"0",tsci:"0",tsoc:"0",tev:"0",tev1:"0",tev2:"0",tev3:"0",total:"0",grade:""
                                       })
     

    /*let[editcolomdataR, seteditcolomdataR]=useState({img1:"",imgFileName:"",
                                       rollno:"",name:"",firstlangW:"0",firstlangO:"0",
                                       SeclangW:"0", SeclangO:"0",
                                       MathsW:"0",MathsO:"0",
                                       ScienceW:"0",ScienceO:"0",
                                       EnglishW:"0",EnglishO:"0",
                                       SocialW:"0",SocialO:"0",
                                       EVW:"0",EVO:"0",
                                       EVW1:"0",EVO1:"0",
                                       EVW2:"0",EVO2:"0",
                                       EVW3:"0",EVO3:"0",Remarks:"",
                                       TF:"0",TS:"0",TE:"0",TM:"0",TSci:"0",Tsoc:"0",TEV:"0",TEV1:"0",TEV2:"0",TEV3:"0"
                                       })   */
   let sectionoption=section1;

    let[editcolomdata3, seteditcolomdata3]=useState({stdcode:"",img1:"",imgFileName:"",
                                       rollno:"",name:"",firstlangw:"0",firstlango:"0",
                                       seclangw:"0", seclango:"0",
                                       mathsw:"0",mathso:"0",
                                       sciencew:"0",scienceo:"0",
                                       englishw:"0",englisho:"0",
                                       socialw:"0",socialo:"0",
                                       evw:"0",evo:"0",
                                       evw1:"0",evo1:"0",
                                       evw2:"0",vo2:"0",
                                       evw3:"0",evo3:"0",remarks:"",
                                       tf:"0",ts:"0",te:"0",tm:"0",tsci:"0",tsoc:"0",tev:"0",tev1:"0",tev2:"0",tev3:"0",total:"0",grade:""
                                       })

   


       let[awsresposes, setawsresposes]=useState([]) 

       let[awsresposes1, setawsresposes1]=useState([]) 
       let[awsresposes2, setawsresposes2]=useState([]) 
       let errorg1=0;
       let error=0;
       let i=0;
       let[markserrorw,setmarkserrorw]=useState(false) 
       let[markserroro,setmarkserroro]=useState(false)
    let[pullecords, setpullecords]=useState({examname:"",standred:"", section:"",academicyear:""})
    let[errorcolor,seterrorcolor]=useState(false)
    const [errorg, setErrorg] = useState(0);
    let[pleasecheck,setpleasecheck]=useState(false)

       let classidsch=stdid1;
       const {stdid}=useParams()
             const {sectionid}=useParams()
  
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
               // let apiresponse=await axios.get(`http://localhost:8080/m/s/p/getrecords/${classidsch}/${section1}`)
              //  examname:e,
              //                 standred:stdid,
              //                 section:stdid ,
              //                 academicyear:y

               console.log("rsa1")
               console.log(createrecords1)
              //  console.log(createrecords1.section) 
              //  console.log(createrecords1.standred)
                  // const pull1={

                  //             examname:"SA1",
                  //             standred:1,
                  //             section:"A",
                  //             academicyear:"2026"

                  //                         };
              
              
              // let apiresponse=await axios.post(`http://localhost:8080/m/s/reports/pull`,createrecords1)
                 let apiresponse=await axios.post(`http://65.2.25.249:8080/m/s/reports/pull`,createrecords1)



                 console.log("reponse:",apiresponse)
          console.log(apiresponse.data)
          setawsresposes2(apiresponse.data)
           
          //setupdateeditcolmdataR(awsresposes )

            //   let apiResponse=await axios.get('http://localhost:8080/s/pullrecords1/'+stdid1) //pull all the records
            //   console.log(apiResponse)

            //  let apiResponse=await axios.get('http://localhost:8080/s/pullrecords1') //pull class wise records
            // console.log(apiResponse.data)
           //  console.log(apiResponse.data['0'])
            // setstdinfo(apiResponse.data)
            // let apiresponse1=await axios.get(`http://localhost:8080/m/s/reports/pull`)
            //           console.log(apiresponse1)
            //           setawsresposes2(apiresponse1.data)
             
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
    },[createrecords1]) 
    

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
                    standardandsection: e.standardandsection
                };
         setdeldata({...deldata, imgdatasend:e.imgFileName,standardandsection:e.standardandsection})
         //setdeldata({...deldata, standardandsection:e.standardandsection})

            
          //  let ApiResponse= await axios.post('http://localhost:8080/s/'+e.id+'/dele')
          //  let ApiResponse= await axios.post('http://65.2.25.249:8080/s/'+e.id+'/dele')
         // let ApiResponse= await axios.post('http://localhost:8080/m/s/'+e.id+'/dele',data)
          let ApiResponse= await axios.post('http://65.2.25.249:8080/m/s/'+e.id+'/dele',data)


          console.log(ApiResponse)

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
        //  seteditcolomdata(stdrecord)
        //  setupdateeditcolmdata(stdrecord)
        //  setstdinfo1(stdrecord)
        // setupdateeditcolmdataR(stdrecord)
       seteditcolomdata2({...stdrecord})
   setupdateeditcolmdataR({...stdrecord})


     }

      
     function updatefirstlangW(e)
     {
         let val=e.target.value;
        seteditcolomdata2(prev => ({ ...prev, firstlangw: val }));

         if (Number(val) > 80)
          {
         
              setErrorg(1); 
              console.log("eg:",errorg)
             setmarkserrorw(true)
            
          }
          else{
            setErrorg(0); 
          setmarkserrorw(false) 
          setupdateeditcolmdataR(prev => ({ ...prev,  firstlangw: val }));
        }
     }
     function updatefirstlangO(e)
     {
         let val=e.target.value;
        seteditcolomdata2(prev => ({ ...prev, firstlango: val }));

         if (Number(val) > 20)
          {
         
              setErrorg(1); 
              console.log("eg:",errorg)
             setmarkserroro(true)
            
          }
          else{
            setErrorg(0); 
          setmarkserroro(false) 
          setupdateeditcolmdataR(prev => ({ ...prev,  firstlango: val }));
        }
     }
     function updateseclangw(e)
     {
         let val=e.target.value;
        seteditcolomdata2(prev => ({ ...prev, seclangw: val }));

         if (Number(val) > 80)
          {
         
              setErrorg(1); 
              console.log("eg:",errorg)
             setmarkserrorw(true)
            
          }
          else{
            setErrorg(0); 
          setmarkserrorw(false) 
          setupdateeditcolmdataR(prev => ({ ...prev,  seclangw: val }));
        }
     }
     function updateseclango(e)
     {
         let val=e.target.value;
        seteditcolomdata2(prev => ({ ...prev, seclango: val }));

         if (Number(val) > 20)
          {
         
              setErrorg(1); 
              console.log("eg:",errorg)
             setmarkserroro(true)
            
          }
          else{
            setErrorg(0); 
          setmarkserroro(false) 
          setupdateeditcolmdataR(prev => ({ ...prev,  seclango: val }));
        }
     }

      function updateenglishw(e)
     {
         let val=e.target.value;
        seteditcolomdata2(prev => ({ ...prev, englishw: val }));

         if (Number(val) > 80)
          {
         
              setErrorg(1); 
              console.log("eg:",errorg)
             setmarkserrorw(true)
            
          }
          else{
            setErrorg(0); 
          setmarkserrorw(false) 
          setupdateeditcolmdataR(prev => ({ ...prev,  englishw: val }));
        }
     }
     function updateenglisho(e)
     {
         let val=e.target.value;
        seteditcolomdata2(prev => ({ ...prev, englisho: val }));

         if (Number(val) > 20)
          {
         
              setErrorg(1); 
              console.log("eg:",errorg)
             setmarkserroro(true)
            
          }
          else{
            setErrorg(0); 
          setmarkserroro(false) 
          setupdateeditcolmdataR(prev => ({ ...prev,  englisho: val }));
        }
     }
     function updatemathsw(e)
     {
         let val=e.target.value;
        seteditcolomdata2(prev => ({ ...prev, mathsw: val }));

         if (Number(val) > 80)
          {
         
              setErrorg(1); 
              console.log("eg:",errorg)
             setmarkserrorw(true)
            
          }
          else{
            setErrorg(0); 
          setmarkserrorw(false) 
          setupdateeditcolmdataR(prev => ({ ...prev,  mathsw: val }));
        }
     }
     function updatemathso(e)
     {
         let val=e.target.value;
        seteditcolomdata2(prev => ({ ...prev, mathso: val }));

         if (Number(val) > 20)
          {
         
              setErrorg(1); 
              console.log("eg:",errorg)
             setmarkserroro(true)
            
          }
          else{
            setErrorg(0); 
          setmarkserroro(false) 
          setupdateeditcolmdataR(prev => ({ ...prev,  mathso: val }));
        }
     }

     function updatesciencew(e)
     {
         let val=e.target.value;
        seteditcolomdata2(prev => ({ ...prev, sciencew: val }));

         if (Number(val) > 80)
          {
         
              setErrorg(1); 
              console.log("eg:",errorg)
             setmarkserrorw(true)
            
          }
          else{
            setErrorg(0); 
          setmarkserrorw(false) 
          setupdateeditcolmdataR(prev => ({ ...prev,  sciencew: val }));
        }
     }
     function updatescienceo(e)
     {
         let val=e.target.value;
        seteditcolomdata2(prev => ({ ...prev, scienceo: val }));

         if (Number(val) > 20)
          {
         
              setErrorg(1); 
              console.log("eg:",errorg)
             setmarkserroro(true)
            
          }
          else{
            setErrorg(0); 
          setmarkserroro(false) 
          setupdateeditcolmdataR(prev => ({ ...prev,  scienceo: val }));
        }
     }

     function updatesocialw(e)
     {
         let val=e.target.value;
        seteditcolomdata2(prev => ({ ...prev, socialw: val }));

         if (Number(val) > 80)
          {
         
              setErrorg(1); 
              console.log("eg:",errorg)
             setmarkserrorw(true)
            
          }
          else{
            setErrorg(0); 
          setmarkserrorw(false) 
          setupdateeditcolmdataR(prev => ({ ...prev,  socialw: val }));
        }
     }
     function updatesocialo(e)
     {
         let val=e.target.value;
        seteditcolomdata2(prev => ({ ...prev, socialo: val }));

         if (Number(val) > 20)
          {
         
              setErrorg(1); 
              console.log("eg:",errorg)
             setmarkserroro(true)
            
          }
          else{
            setErrorg(0); 
          setmarkserroro(false) 
          setupdateeditcolmdataR(prev => ({ ...prev,  socialo: val }));
        }
     }

        function updatetsc(e){}

        function updatetsco(e){}

        function updateremarks(e)
        {

           seteditcolomdata2({...editcolomdata2, remarks:e.target.value })
            setupdateeditcolmdataR({...updateeditcolmdataR, remarks:e.target.value })

        }

        function TeacherComments(e)
        {

           seteditcolomdata2({...editcolomdata2, teacherfeedback:e.target.value })
            setupdateeditcolmdataR({...updateeditcolmdataR, teacherfeedback:e.target.value })
           
        }

        function parentcomment(e)
        {
           seteditcolomdata2({...editcolomdata2, parentfeedback:e.target.value })
            setupdateeditcolmdataR({...updateeditcolmdataR, parentfeedback:e.target.value })
        }

        function updategrade(e)
        {
           seteditcolomdata2({...editcolomdata2, grade:e.target.value })
          setupdateeditcolmdataR({...updateeditcolmdataR, grade:e.target.value })

        //   setupdateeditcolmdataR({...updateeditcolmdataR, grade:e.target.value,examcode:awsresposes2[i].examcode, standred:awsresposes2[i].standred, section:awsresposes2[i].section,rollno:awsresposes2[i].rollno })
        }

  async function  saveRow1( i )
   {
    console.log("e",errorg)


    try{

    
    {/*    setstdinfo1({...stdinfo1, userid:GET_USER_ID()})*/}
      // let ApiResponse= await axios.post('http://localhost:8080/s/save',stdinfo1)
       //let ApiResponse= await axios.post('http://65.2.25.249:8080/s/save',stdinfo1)
 let updatedData = {
         ...updateeditcolmdataR,
         examcode:awsresposes2[i].examcode,
         standred:awsresposes2[i].standred,
         section:awsresposes2[i].section,
         rollno:awsresposes2[i].rollno
      }
         console.log("updated data",updateeditcolmdataR)
        //console.log(updateeditcolmdataR)
        if(errorg===0)
              {
                console.log("e",errorg)
                setpleasecheck(false)
      let ApiResponse= await axios.post('http://localhost:8080/m/s/e/saverecord',updatedData)
       setupdateeditcolmdataR({})
       let apiresponse1=await axios.post(`http://localhost:8080/m/s/reports/pull`,createrecords1)
                       console.log(apiresponse1)
                      
                        console.log(ApiResponse)
                         setawsresposes2(apiresponse1.data)
       setIndex(null)
              }
               else
    {
      setpleasecheck(false)
      
    }

       //pullSA11();
          
       //window.location=`/std_info/c1/u/${stdid1}`
    }
   
    catch(error)
    {
        console.log(error)
    }
    
     
   }
                    async function pullSA11(y,e)
                    {
                                console.log(y)
                                console.log(e)
                                console.log(stdid)
                                console.log(sectionid)
                                      setpullecords({...pullecords, 

                                            examname:e,
                                            standred:stdid,
                                            section:sectionid ,
                                            academicyear:y
                                            //setpullecords

                                                    });
                    //  let apiresponse1=await axios.post(`http://localhost:8080/m/s/reports/pull`,pullecords) 
                      let apiresponse1=await axios.post(`http://65.2.25.249:8080/m/s/reports/pull`,pullecords) 
                      
                                        console.log(apiresponse1)
                                          setawsresposes2(apiresponse1.data)

                    }
                      
    
    
    return(
          
         <div className="row">
            {/* <button className="btn btn-warning   mt-3 mb-5 " type="button" onClick={e=>pullSA11()}> pullSA1result</button>  */}
              {/* <h1>resutls SA-1</h1>  */}
           <div  className="col-4"style={{display:"flex", gap:"10px", alignItems:"center"}}> <h5>Class:</h5> <h3>{stdid1}/{sectionid}/ <span style={{color: "red",fontSize:"40px"}} > {createrecords1.examname}</span>/ teacher</h3></div>
          
           
           <div className="col-8">
             {markserrorw==true&&  
             <div    className="col-4"> <h2 className="text-danger  text-center mt-5">   Enter value written less than 80  </h2>

            </div>}
                 {markserroro==true&&  
             <div  > <h2 className="text-danger  text-center mt-5">     Enter value oral less than 20 </h2>
            </div>}
            
            {/* {pleasecheck==true&&  
             <div> <h2 className="text-danger  text-center mt-5">           please check </h2>
            </div>} */}
            </div>
            

           
           <div>
            <h3 className="text-danger">{stddelapimsg}</h3>
            </div>

           
            <div>
             
  
  
            <table className=" compact-table table table-sm align-middle table-striped table-hover">
                <thead>
                    <tr className="fw-bold"> 
                           <th>Rollno</th> 
                            <th>Photo</th>
                             <th>Name  </th>
                              <th>Exam.code  </th> 
                            <th colSpan="3" >First.lang</th>
                            <th colSpan="3">Sec.lang</th>
                             <th colSpan="3">English</th>
                            <th colSpan="3">Maths</th>
                            <th colSpan="3">Science</th>
                            <th colSpan="3">Social</th>
                             {/* <th colSpan="3">E.V</th>
                            <th colSpan="3">E.V-1</th> */}
                            
                    </tr>
                     <tr className="fw-bold "> 
                           <th> </th> 
                            <th> </th>
                             <th>   </th>
                             <th>   </th>
                            <th>80</th>
                            <th>20</th>
                            <th>T</th>
                            <th>80</th>
                            <th>20</th>
                             <th>T</th>
                            <th>80</th>
                            <th>20</th>
                             <th>T</th>
                            <th>80</th>
                            <th>20</th>
                             <th>T</th>
                            <th>80</th>
                            <th>20</th>
                             <th>T</th>
                            <th>80</th>
                            <th>20</th>
                             <th>T</th>   
                             <th >Total</th>
                            <th>Grade</th>
                             <th>Teacher Feedback</th>
                             <th>Parent Feedback</th>
                    </tr>
                     </thead>
                <tbody className="table-group-divider">
       
                 {  
                    awsresposes2.map((stdrecord, i)=>(
                        <tr key={stdrecord.rollno}>
                        <td style={{  textAlign:"center"}}> 
                             {stdrecord.rollno }  
                            </td> 
                            <td style={{  textAlign:"center"}}>
                                  <img src={stdrecord.imgpreurl} className="student-photo"/>
                            </td>
                        <td style={{  textAlign:"center"}}>
                            {stdrecord.name}
                        </td>
                        <td style={{  textAlign:"center"}}>
                            {stdrecord.examcode}
                        </td>

                        <td style={{  textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata2.firstlangw || ""} onChange={(e)=>updatefirstlangW(e)}   style={{width:"40px",border: Number(editcolomdata2.firstlangw || 0) > 80? "2px solid red": "1px solid #ccc" }}/>):( stdrecord.firstlangw)}
                            
                        </td>
                         <td style={{  textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata2.firstlango || ""} onChange={(e)=>updatefirstlangO(e)}  style={{width:"40px",border: Number(editcolomdata2.firstlango || 0) > 20? "2px solid red": "1px solid #ccc" }}/>):( stdrecord.firstlango)}
                            
                        </td>
                       <td style={{  textAlign:"center"}}>
                            {index===i?  <span style={{width:"30px"}}>   { Number(editcolomdata2.firstlangw)+Number(editcolomdata2.firstlango)}   </span>: (stdrecord.tf) }
                            
                        </td>
                      
                       
                         <td style={{  textAlign:"center"}}>
                            {index===i?(<input value={ editcolomdata2.seclangw|| ""} onChange={(e)=>updateseclangw(e)}  style={{width:"40px",border: Number(editcolomdata2.seclangw || 0) > 80? "2px solid red": "1px solid #ccc" }} />):( stdrecord.seclangw)}
                  
                        </td>
                         <td style={{  textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata2.seclango|| ""} onChange={(e)=>updateseclango(e)} style={{width:"40px",border: Number(editcolomdata2.seclango || 0) > 20? "2px solid red": "1px solid #ccc" }} />):(stdrecord.seclango)}
                            
                        </td>   
                         <td style={{  textAlign:"center"}}>
                            {index===i?      Number(editcolomdata2.seclangw)+ Number(editcolomdata2.seclango)       :    (stdrecord.ts)       }
                            
                      </td>

                          
                          <td style={{  textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata2.englishw|| ""} onChange={(e)=>updateenglishw(e)} style={{width:"40px",border: Number(editcolomdata2.englishw || 0) > 80? "2px solid red": "1px solid #ccc" }} />):( stdrecord.englishw)}
                          </td>
                          <td style={{  textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata2.englisho|| ""} onChange={(e)=>updateenglisho(e)} style={{width:"40px",border: Number(editcolomdata2.englisho || 0) > 20? "2px solid red": "1px solid #ccc" }}  />):(stdrecord.englisho )}
                          </td>
                          <td style={{  textAlign:"center"}}>
                            {index===i?  Number(editcolomdata2.englishw)+ Number(editcolomdata2.englisho)       :( stdrecord.te )}
                           </td>


                           <td style={{  textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata2.mathsw|| ""} onChange={(e)=>updatemathsw(e)} style={{width:"40px",border: Number(editcolomdata2.mathsw || 0) > 80? "2px solid red": "1px solid #ccc" }} />):( stdrecord.mathsw)}
                          </td>
                          <td style={{  textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata2.mathso|| ""} onChange={(e)=>updatemathso(e)} style={{width:"40px",border: Number(editcolomdata2.mathso || 0) > 20? "2px solid red": "1px solid #ccc" }}  />):(stdrecord.mathso )}
                          </td>
                          <td style={{  textAlign:"center"}}>
                            {index===i? Number(editcolomdata2.mathsw)+ Number(editcolomdata2.mathso) :( stdrecord.tm )}
                           </td>


                            <td style={{  textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata2.sciencew|| ""} onChange={(e)=>updatesciencew(e)} style={{width:"40px",border: Number(editcolomdata2.sciencew || 0) > 80? "2px solid red": "1px solid #ccc" }} />):( stdrecord.sciencew)}
                          </td>
                          <td style={{  textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata2.scienceo|| ""} onChange={(e)=>updatescienceo(e)} style={{width:"40px",border: Number(editcolomdata2.scienceo || 0) > 20? "2px solid red": "1px solid #ccc" }}  />):(stdrecord.scienceo )}
                          </td>
                          <td style={{  textAlign:"center"}}>
                            {index===i?      Number(editcolomdata2.sciencew)+ Number(editcolomdata2.scienceo) :( stdrecord.tsci )}
                           </td>


                           <td style={{  textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata2.socialw|| ""} onChange={(e)=>updatesocialw(e)} style={{width:"40px",border: Number(editcolomdata2.socialw || 0) > 80? "2px solid red": "1px solid #ccc" }} />):( stdrecord.socialw)}
                          </td>
                          <td style={{  textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata2.socialo|| ""} onChange={(e)=>updatesocialo(e)} style={{width:"40px",border: Number(editcolomdata2.socialo || 0) > 20? "2px solid red": "1px solid #ccc" }}  />):(stdrecord.socialo )}
                          </td>
                          <td style={{  textAlign:"center"}}>
                            {index===i? Number(editcolomdata2.socialw)+ Number(editcolomdata2.socialo) :( stdrecord.tsoc )}
                           </td>
                          {/*  <td>
                            {index===i?(<input value={editcolomdata2.socialw} onChange={(e)=>updatesocialw(e)} style={{width:"40px"}} />):( stdrecord.socialw)}
                          </td>
                          <td>
                            {index===i?(<input value={editcolomdata2.socialo} onChange={(e)=>updatesocialo(e)} style={{width:"40px"}}  />):(stdrecord.socialo )}
                          </td>
                          <td>
                            {index===i?(<input value={(Number(editcolomdata2.socialw)+ Number(editcolomdata2.socialo))} onChange={(e)=>updatetsco(e)}  style={{width:"30px"}}/>):( stdrecord.tsoc )}
                           </td> */}
                           {/* <td>
                            {index===i?(<input value={editcolomdata2.socialw} onChange={(e)=>updatesocialw(e)} style={{width:"40px"}} />):( stdrecord.socialw)}
                          </td>
                          <td>
                            {index===i?(<input value={editcolomdata2.socialo} onChange={(e)=>updatesocialo(e)} style={{width:"40px"}}  />):(stdrecord.socialo )}
                          </td>
                          <td>
                            {index===i?(<input value={(Number(editcolomdata2.socialw)+ Number(editcolomdata2.socialo))} onChange={(e)=>updatetsco(e)}  style={{width:"30px"}}/>):( stdrecord.tsoc )}
                           </td> */}
                           

                            <td style={{  textAlign:"center"}}>
                               {index===i?((Number(editcolomdata2.socialw)+ Number(editcolomdata2.socialo))+ (Number(editcolomdata2.sciencew)+ Number(editcolomdata2.scienceo))
                              +  (Number(editcolomdata2.mathsw)+ Number(editcolomdata2.mathso))+ (Number(editcolomdata2.englishw)+ Number(editcolomdata2.englisho))
                              +  (Number(editcolomdata2.seclangw)+ Number(editcolomdata2.seclango))+  Number(editcolomdata2.firstlangw)+Number(editcolomdata2.firstlango)        ):                    (stdrecord.total)}                                  
                           </td>

                            <td style={{  textAlign:"center"}}>
                            {index===i?(<input value={editcolomdata2.grade} onChange={(e)=>updategrade(e)} style={{width:"40px"}}  />):(stdrecord.grade )}
                          </td >
                           <td className="align-top" style={{  textAlign:"center"}}>
                            {index===i?(<textarea value={editcolomdata2.teacherfeedback} onChange={(e)=>TeacherComments(e)}  style={{
         width:"120px",
         height:"100px",
         verticalAlign:"top",
         padding:"5px",
         resize:"vertical"
      }}  />):     <div style={{whiteSpace:"pre-wrap"}}> {stdrecord.teacherfeedback }</div> }
                          </td>
                           <td style={{  textAlign:"center"}}>
                            {index===i?(<textarea value={editcolomdata2.parentfeedback} onChange={(e)=>parentcomment(e)}  style={{
         width:"120px",
         height:"100px",
         verticalAlign:"top",
         padding:"5px",
         resize:"vertical"
      }}  />):   <div style={{whiteSpace:"pre-wrap"}}>{stdrecord.parentfeedback }</div>}
                          </td>

                           

                           {/* <td>
                            {index===i?(<input value={(Number(editcolomdata2.socialw)+ Number(editcolomdata2.socialo))} onChange={(e)=>updatetsco(e)}  style={{width:"30px"}}/>):( stdrecord.tsoc )}
                           </td>
                           <td>
                            {index===i?(<input value={(Number(editcolomdata2.socialw)+ Number(editcolomdata2.socialo))} onChange={(e)=>updatetsco(e)}  style={{width:"30px"}}/>):( stdrecord.tsoc )}
                           </td>
                           <td>
                            {index===i?(<input value={(Number(editcolomdata2.socialw)+ Number(editcolomdata2.socialo))} onChange={(e)=>updatetsco(e)}  style={{width:"30px"}}/>):( stdrecord.tsoc )}
                           </td>
                          */}











                        {/*  <td>
                            {index===i?(<input value={editcolomdata.gender} onChange={(e)=>updateGender(e)}/>):(updateeditcolmdataR.ScienceW)}
                            
                        </td>
                         <td>
                            {index===i?(<input value={editcolomdata.gender} onChange={(e)=>updateGender(e)}/>):(updateeditcolmdataR.ScienceO)}
                            
                        </td>
                         <td>
                            {index===i?(<input value={editcolomdata.gender} onChange={(e)=>updateGender(e)}/>):(updateeditcolmdataR.TSci)}
                            
                        </td>*/}
                        
                         <td>  {index === i ? (
                  <button className="btn btn-success" onClick={() => saveRow1(i)}>Save</button>
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
export default R_SA1_BySec

 
