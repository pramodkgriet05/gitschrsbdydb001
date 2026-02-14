import { useState } from "react"
//import { GET_USER_ID } from "./utilils"
import Std_info_c1_u_pulldata from "./Std_info_c1_u_pulldata"

function Add_new_student({rece_data, stdid1})
{
             //let userId=GET_USER_ID()
            let[userInputdata, setuserInputdata]=useState({name:"",email:"",mobile:"",password:""})
            let[errorData, seterrorData]=useState({e_name:"",e_email:"",e_mobile:"",e_password:""})
            let noerrors=0
             let[addstudent,setaddstudent]=useState(false)
            let[stdinfo, setstdinfo]=useState({img1:"",rollno:"",name:"",standardandsection:stdid1,gender:"",dob:"",doj:"",address:"",mobile:"",father:"",gaurdian:"",classteacher:"",other:""})
            let[stdinfo_error, setstdinfo_error]=useState({img1:false,rollno:false,Name:false,Standardandsection:false,gender:false,DOB:false,DOJ:false,Address:false,Mobile:false,Father:false,gaurdian:false,classteacher:false,Other:false})
            let[o_std_details, seto_std_details]=useState(false)
            let[message, setmessage]=useState(false)
            let nooferrors=0
            let tempErrors
            let stdvalue=stdid1
            tempErrors={...stdinfo_error}
           
             
                   function data_fun(e)
                    {
                        // console.log(e.target)
                         console.log(e.target.files)
                        //  console.log(e.target.files[0].name)
                          console.log(e.target.files.name)
                          
                        // setimg1(e.target.files[0])
                        
                    }
                    function verifystd()
                    {
                      try
                      {
                          if(stdinfo.rollno.length<2)
                          {
                              tempErrors={...tempErrors, roll_no:true}
                              nooferrors=1
                          }
                          else
                              {
                                  tempErrors={...tempErrors, roll_no:false}

                              }
                       
                        if(stdinfo.name.length<3)
                          {
                              tempErrors={...tempErrors, Name:true}
                              nooferrors=1
                          }
                          else
                              {
                                  tempErrors={...tempErrors, Name:false}
                                  
                              }

                        if(stdinfo.standardandsection.length<0)
                          {
                              tempErrors={...tempErrors, Standardandsection:true}
                              nooferrors=1
                          }
                          else
                              {
                                  tempErrors={...tempErrors, Standardandsection:false}
                                  
                              }
                        
                        if(stdinfo.gender.length==0)
                          {
                            tempErrors={...tempErrors, gender:true}
                            nooferrors=1
                          }
                            else
                              {
                                  tempErrors={...tempErrors, gender:false}
                                  
                          }
                          if(stdinfo.dob.length<3)
                          {
                            tempErrors={...tempErrors, DOB:true}
                            nooferrors=1
                          }
                            else
                              {
                                  tempErrors={...tempErrors, DOB:false}
                                  
                          }
                          if(stdinfo.father.length<3)
                          {
                            tempErrors={...tempErrors, Father:true}
                            nooferrors=1
                          }
                            else
                              {
                                  tempErrors={...tempErrors, Father:false}
                              }
                        if(stdinfo.classteacher.length<3)
                        {
                          tempErrors={...tempErrors, classTeacher:true}
                          nooferrors=1
                        }
                          else
                            {
                                tempErrors={...tempErrors, classTeacher:false}
                            }

                         setstdinfo_error({...tempErrors})
                        
                            if(nooferrors==0)

                        {
    
                            rece_data(stdinfo)
                        }
                        else{
                          console.log("error")
                          }
                        }
                        catch(error)
                        {
                          console.log(error)
                        }
                    console.log(nooferrors)
                    
                    }
                  
                    
                    
                         
                         

    return(
      
                  <div className="col-8">
                                <h3>Enter New Student Detailssssssss class:{stdid1}</h3> 
                                   <div className="card mt-3" style={{width:'60rem'}}>
                                     
                                        <div className="row">
                                             
                                            <div className="col-6">
                                            
                                                <div className="card -body std_rec_add"> 
                                                 <label><strong>Std(rollno)</strong></label>
                                                 <input type="text" className='form-control std_rec_add1 ' placeholder='Std(roll_no)' onChange={e=>setstdinfo({...stdinfo, rollno:e.target.value})} ></input>
                                                 
                                                 { stdinfo_error.rollno==true && <div className="text-danger"> Min 2 charecters</div>}
                                                
                                                 <label><strong>Name</strong></label>
                                                 <input type="text" className='form-control std_rec_add1 ' placeholder='Name' onChange={e=>setstdinfo({...stdinfo, name:e.target.value})}></input>
                                                 { stdinfo_error.Name==true && <div className="text-danger"> Min 3 charecters</div>}
                                               
                                                 <label><strong>Standard and section</strong></label>
                                                 <input type="text" className='form-control std_rec_add1 '   placeholder={stdid1} onChange={e=>setstdinfo({...stdinfo, standardandsection:stdid1})} ></input>
                                                  
                                                 <strong>Gender</strong> 
                                                  
                                                <spam>   <input type="radio" value="male" name="Gender" onChange={e=>setstdinfo({...stdinfo, gender:"Male"})}></input>Male </spam>
                                                 <spam> <input type="radio" value="female" name="Gender" onChange={e=>setstdinfo({...stdinfo, gender:"Female"})}></input>Female </spam>

                                                 { stdinfo_error.gender==true && <div className="text-danger"> Select Gender</div>}
                                                <label><strong>DOB</strong></label>
                                                <input type="text" className='form-control std_rec_add1 ' placeholder='YYYY-MM-DD' onChange={e=>setstdinfo({...stdinfo, dob:e.target.value})}></input>
                                                 { stdinfo_error.DOB==true && <div className="text-danger"> Min 3 charecters</div>}
                                                 <label><strong>DOJ</strong></label>
                                                 <input type="text" className='form-control std_rec_add1 ' placeholder='YYYY-MM-DD' onChange={e=>setstdinfo({...stdinfo, doj:e.target.value})}></input>
                                                
                                                 <label><strong>Address</strong></label>
                                                 <input type="text" className='form-control std_rec_add1_Address ' placeholder='Address' onChange={e=>setstdinfo({...stdinfo, address:e.target.value})}></input>
                                                   
                                                    
                                                 </div>
                                            </div>

                                            <div className="col-6">   
                                                    <div className="card -body std_rec_add">
                                                        <div className="row">
                                                            <div className="col-3">
                                                             <label className="mt-1 ms-3"> Mobile   </label>
                                                             <label className="mt-3 ms-3"> Father</label>
                                                             
                                                             <label className="mt-3 ms-3">   mother/Gaudien name   </label>

                                                             <label className="mt-1 ms-3"> Class Teacher   </label>

                                                             <label className="mt-3 ms-3"> Other   </label>


                                                            </div>
                                                            <div className="col-9">
                                                                <input type="text" className='form-control' placeholder="Contact info" onChange={e=>setstdinfo({...stdinfo, mobile:e.target.value})}/>
                                                                <input type="text" className='form-control' placeholder="Father Name"onChange={e=>setstdinfo({...stdinfo, father:e.target.value})}/>
                                                                { stdinfo_error.Father==true && <div className="text-danger"> Min 3 charecters</div>}
                                                                <input type="text" className='form-control mt-4' placeholder="--optional--" onChange={e=>setstdinfo({...stdinfo, gaurdian:e.target.value})}/>
                                                                
                                                                <input type="text" className='form-control mt-1' placeholder="Class Teacher" onChange={e=>setstdinfo({...stdinfo, classteacher:e.target.value})}/>
                                                                { stdinfo_error.classteacher==true && <div className="text-danger"> Min 3 charecters</div>}

                                                                <input type="text" className='form-control std_rec_add1_Address ' placeholder='Other Info' onChange={e=>setstdinfo({...stdinfo, other:e.target.value})}></input>
                                                                
                                                            </div>
                                                           
                                                          
                                                        </div>
                                                         <label className=" text-danger mt-3 ms-3">UPLOAD PROFILE PIC</label>
                                                             
                                                            <input type="file" className="form-control mt-1" placeholer="file" onChange={e=>setstdinfo({...stdinfo, img1:e.target.files[0]})}></input>
                                                            <button className="btn btn-warning  d-grid mt-3" type="button" onClick={e=>verifystd()}> SUBMIT</button>
                                                    </div>
                                           </div>
                                                
                                         </div>
                                  </div>
                                  </div>
                                 
                           
                                  
                                  

                            
                          


                                    
                                
                                
                                


                              
                                               
    )

}
export default Add_new_student