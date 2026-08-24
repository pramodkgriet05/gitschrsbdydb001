import { useState } from "react"
//import { GET_USER_ID } from "./utilils"
import Std_info_c1_u_pulldata from "./Std_info_c1_u_pulldata"
import "../../src/css-files/10.css"

function Add_new_student({rece_data, stdid1,sectionid})
{
           //console.log(stdid1)
           console.log("Add_new_student:"+stdid1)
             //let userId=GET_USER_ID()
            let[userInputdata, setuserInputdata]=useState({name:"",email:"",mobile:"",password:""})
            let[errorData, seterrorData]=useState({e_name:"",e_email:"",e_mobile:"",e_password:""})
            let noerrors=0
             let[addstudent,setaddstudent]=useState(false)
            let[stdinfo, setstdinfo]=useState({img1:"",rollno:"",name:"",Standred:stdid1,Section:sectionid, gender:"",dob:"",doj:"",address:"",mobile:"",father:"",gaurdian:"",classteacher:"",other:""})
            let[stdinfo_error, setstdinfo_error]=useState({img1:false,rollno:false,Name:false,Section:false,gender:false,DOB:false,DOJ:false,Address:false,Mobile:false,Father:false,gaurdian:false,classteacher:false,Other:false})
            let[o_std_details, seto_std_details]=useState(false)
            let[message, setmessage]=useState(false)
            let nooferrors=0
            let tempErrors
            let stdvalue=stdid1
            
            tempErrors={...stdinfo_error}

            // const stdinfoall=new FormData();

            // stdinfoall.append("rollno",stdinfo.rollno);
           
             
                   function data_fun(e)
                    {
                        // console.log(e.target)
                         console.log(e.target.files)
                        //  console.log(e.target.files[0].name)
                          console.log(e.target.files.name)
                          
                        // setimg1(e.target.files[0])
                        
                    }

                    const resizeImage = (file) => {
                                      return new Promise((resolve) => {
                                        const img = new Image();
                                        const reader = new FileReader();

                                        reader.onload = (e) => {
                                          img.src = e.target.result;
                                        };

                                        img.onload = () => {
                                          const canvas = document.createElement("canvas");

                                          const targetWidth = 144;
                                          const ratio = targetWidth / img.width;
                                          const targetHeight = img.height * ratio;

                                          canvas.width = targetWidth;
                                          canvas.height = targetHeight;

                                          const ctx = canvas.getContext("2d");
                                          ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

                                          canvas.toBlob((blob) => {
                                            resolve(blob);
                                          }, "image/jpeg");
                                        };

                                        reader.readAsDataURL(file);
                                      });
                                    };




                    function verifystd()
                    {
                   
                      try
                      {
                          if(stdinfo.rollno.length==0)
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
                              if(!stdinfo.Section){
                                    tempErrors = {...tempErrors, Section:true};
                                    nooferrors = 1;
                                }else{
                                    tempErrors = {...tempErrors, Section:false};
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

                            if(!stdinfo.img1)
                            {
                               nooferrors=1
                               tempErrors={...tempErrors, img1:true}
                            }
                            else{
                               tempErrors={...tempErrors, img1:false}


                            }

                         setstdinfo_error({...tempErrors})
                        
                       if(nooferrors==0)
                        {
                                                    if (stdinfo.img1) {
                                  resizeImage(stdinfo.img1).then((resizedBlob) => {

                                      const updatedData = {
                                          ...stdinfo,
                                          img1: new File([resizedBlob], stdinfo.img1.name, {
                                              type: "image/jpeg"
                                          })
                                      };

                                      rece_data(updatedData);
                                 });
                        }
                        else{
                          console.log("error")
                          }
                        }
                      }
                        catch(error)
                        {
                          console.log(error)
                        }
                    console.log(nooferrors)
                    
                    }
                  
                    
                    
                         
                         

    return(
      
<div className="col-12 col-md-8  ">
        <h3>Enter New Student Details class:{stdid1}/{sectionid} </h3> 
            <div className="card mt-3 ascrd-10" style={{width:'60rem'}}>
              
                <div className="row">
                      
                    <div className="col-6">
                    
                        <div className="card-body std_rec_add"> 
                          <label><strong className="h-10">Std(rollno)</strong></label>
                          <input type="text" className='form-control std_rec_add1 ip-10 h-10' placeholder='Std(roll_no)' onChange={e=>setstdinfo({...stdinfo, rollno:e.target.value})} ></input>
                          
                          { stdinfo_error.rollno==true && <div className="text-danger er-msg-10"> Min 2 charecters</div>}
                        
                          <label><strong className="h-10" >Name</strong></label>
                          <input type="text" className='form-control std_rec_add1 ip-10 h-10' placeholder='Name' onChange={e=>setstdinfo({...stdinfo, name:e.target.value})}></input>
                          { stdinfo_error.Name==true && <div className="text-danger er-msg-10"> Min 3 charecters</div>}
                        
                          {/* <label><strong>Standard and section</strong></label>
                          <input type="text" className='form-control std_rec_add1 '   placeholder={stdid1} onChange={e=>setstdinfo({...stdinfo, standardandsection:stdid1})} ></input>
                            
                          <label><strong>Standard and Section</strong></label>*/}

                          <div className="d-flex align-items-center gap-2 mt-1 mb-1">

                          < strong className="h-10">Standard: </strong> <strong>{stdid1}</strong>
                           <strong className="h-10">Sec:   </strong> <strong>{sectionid}</strong>  
                          </div>
                          {stdinfo_error.Section && 
                            <div className="text-danger er-msg-10">Please select section</div>
                            }

                            <div>

                          <strong className="me-2 h-10">Gender</strong> 
                          </div>
                          <div> 
                            <div>
                             <input type="radio" className="h-10" value="male" name="Gender" onChange={e=>setstdinfo({...stdinfo, gender:"Male"})}></input>Male  
                           </div>
                           <div>
                           <input type="radio" value="female" name="Gender" onChange={e=>setstdinfo({...stdinfo, gender:"Female"})}></input>Female  
                           </div>
                          { stdinfo_error.gender==true && <div className="text-danger er-msg-10"> Select Gender</div>}
                          </div>
                        <label><strong className="h-10">DOB</strong></label>
                        <input type="text" className='form-control std_rec_add1 ip-10 h-10' placeholder='YYYY-MM-DD' onChange={e=>setstdinfo({...stdinfo, dob:e.target.value})}></input>
                          { stdinfo_error.DOB==true && <div className="text-danger er-msg-10"> Min 3 charecters</div>}
                          <label><strong className="h-10">DOJ</strong></label>
                          <input type="text" className='form-control std_rec_add1 ip-10 h-10' placeholder='YYYY-MM-DD' onChange={e=>setstdinfo({...stdinfo, doj:e.target.value})}></input>
                        
                          <label><strong className="h-10">Address</strong></label>
                          <input type="text" className='form-control std_rec_add1_Address h-10 ' placeholder='Address' onChange={e=>setstdinfo({...stdinfo, address:e.target.value})}></input>
                             
                          </div>
                    </div>

                    <div className="col-6">   
                            <div className="card-body std_rec_add">
                                <div className="row">
                                    

                                      <label className="  "> <strong className="h-10">Mobile </strong>  </label>
                                      <input type="text" className='form-control ip-10 h-10' placeholder="Contact info" onChange={e=>setstdinfo({...stdinfo, mobile:e.target.value})}/>

                                      <label className="mt-3  "><strong className="h-10"> Father</strong></label>
                                       <input type="text" className='form-control ip-10 h-10' placeholder="Father Name"onChange={e=>setstdinfo({...stdinfo, father:e.target.value})}/>
                                        { stdinfo_error.Father==true && <div className="text-danger er-msg-10"> Min 3 charecters</div>}
                                      
                                      <label className="mt-3  "> <strong className="h-10">  Mother/Gaudien   </strong> </label>
                                      <input type="text" className='form-control ip-10 h-10' placeholder="--optional--" onChange={e=>setstdinfo({...stdinfo, gaurdian:e.target.value})}/>

                                      <label className="mt-3 "><strong className="h-10"> Class Teacher </strong>  </label>
                                      <input type="text" className='form-control ip-10 h-10' placeholder="Class Teacher" onChange={e=>setstdinfo({...stdinfo, classteacher:e.target.value})}/>
                                        { stdinfo_error.classteacher==true && <div className="text-danger er-msg-10"> Min 3 charecters</div>}
                                        <label className="mt-3 "><strong className="h-10">Other info</strong>  </label>
                                      <input type="text" className='form-control ip-10 h-10' placeholder="Other Info" onChange={e=>setstdinfo({...stdinfo, other:e.target.value})}/>
                                       
                                       </div>
                                </div>
                                  <label className=" text-success h-10">UPLOAD PROFILE PIC</label> 
                                    <input type="file" className="form-control mt-1 " placeholer="file" onChange={e=>setstdinfo({...stdinfo, img1:e.target.files[0]})}></input>
                                      { stdinfo_error.img1==true && <div className="text-danger er-msg-10"> Upload profile pic</div>}
                                    <button className="btn btn-warning  d-grid mt-3 mb-3" type="button" onClick={e=>verifystd()}> SUBMIT</button>
                                    
                             
                    </div>
                        
                  </div>
          </div>
          </div>                                                   
    )
}
export default Add_new_student