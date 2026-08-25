import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import api from "../api/Interaxios";

function Attendance({stdid1,section1})
{
    let token=localStorage.getItem("token")
    let token1="Bearer"+" "+token;
    let[attendata,setattendata]=useState([])
    let[editcolomdata2,seteditcolomdata2]=useState({})
    let[updateeditcolmdataR,setupdateeditcolmdataR]=useState({})
    let[index, setIndex]=useState(null)
    //let[error,seterror]=useState(0)
    let[errmsg,seterrmsg]=useState()
    let[errmsgshow,seterrmsgshow]=useState(false)
    let[SI,setSI]=useState({"June":false,"July":false,"aug":false,"sep":false,"oct":false,"nov":false,"dec":false,"jan":false,"feb":false,"mar":false,"apr":false})
    let error=0
    let{classid,sectionid}=useParams()

  

     
    let data={
        classid:stdid1,
        sectionid:section1
    }

    useEffect(()=>{

        async function attendacepull()
        {
                //let apiresponse=await axios.post(`http://localhost:8080/api/std/attn/get`,data,{headers:{Authorization:token1}})
                let apiresponse=await api.post(`/std/attn/get`,data,{headers:{Authorization:token1}})

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

     
     function updateaprp(e)
     {
       seteditcolomdata2({...editcolomdata2,aprp:e.target.value})
     }
     function updateapra(e)
     {
         seteditcolomdata2({...editcolomdata2,apra:e.target.value})
     }
      
        function funapril()
        {
        let val=Number(editcolomdata2.aprt)
        let v2=Number(editcolomdata2.aprp)
        let v3=Number(editcolomdata2.apra)
        let v4=v2+v3
        console.log('april:',val,v2,v3)
        
        if(val>=v4&&val<=31)
        {
            //seterror(0)
             seterrmsg("valied")
             seterrmsgshow(true)
             console.log("no error:")
             setSI({...SI,Apr:false})
        }
        else
        {
             error=error+1
             seterrmsg("Invalied")
             seterrmsgshow(true)
             console.log("error:",error)
             setSI({...SI,Apr:true})   
        } 
        }
        function funjune()
        {
        let val=Number(editcolomdata2.junet)
        let v2=Number(editcolomdata2.junep)
        let v3=Number(editcolomdata2.junea)
        let v4=v2+v3
        console.log('june:',val,v2,v3)
        
        if(val>=v4&&val<=31)
        {
            //seterror(0)
             seterrmsg("valied")
             seterrmsgshow(true)
             console.log("no error:")
             setSI(prev=>({...prev,June:false}))
             
        }
        else
        {
             error=error+1
             seterrmsg("Invalied")
             seterrmsgshow(true)
             console.log("error:",error)
             setSI(prev=>({...prev,June:true}))
             console.log(SI.June)   
        } 
        }
        function funjuly()
        {
        let val=Number(editcolomdata2.julyt)
        let v2=Number(editcolomdata2.julyp)
        let v3=Number(editcolomdata2.julya)
        let v4=v2+v3
        console.log('july:',val,v2,v3)
        
        if(val>=v4&&val<=31)
        {
            //seterror(0)
             seterrmsg("valied")
             seterrmsgshow(true)
             console.log("no error:")
             setSI(prev=>({...prev,July:false}))
        }
        else
        {
             error=error+1
             seterrmsg("Invalied")
             seterrmsgshow(true)
             console.log("error:",error)
             setSI(prev=>({...prev,July:true}))
        } 
        }
        function funaug()
        {
        let val=Number(editcolomdata2.augt)
        let v2=Number(editcolomdata2.augp)
        let v3=Number(editcolomdata2.auga)
        let v4=v2+v3
        console.log('july:',val,v2,v3)
        
        if(val>=v4&&val<=31)
        {
            //seterror(0)
             seterrmsg("valied")
             seterrmsgshow(true)
             console.log("no error:")
             setSI(prev=>({...prev,aug:false}))
        }
        else
        {
             error=error+1
             seterrmsg("Invalied")
             seterrmsgshow(true)
             console.log("error:",error)
             setSI(prev=>({...prev,aug:true}))
        } 
        }
        function funsep()
        {
        let val=Number(editcolomdata2.sept)
        let v2=Number(editcolomdata2.sepp)
        let v3=Number(editcolomdata2.sepa)
        let v4=v2+v3
        console.log('sep:',val,v2,v3)
        
        if(val>=v4&&val<=31)
        {
            //seterror(0)
             seterrmsg("valied")
             seterrmsgshow(true)
             console.log("no error:")
             setSI(prev=>({...prev,sep:false}))
        }
        else
        {
             error=error+1
             seterrmsg("Invalied")
             seterrmsgshow(true)
             console.log("error:",error)
             setSI(prev=>({...prev,sep:true}))
        } 
        }
        function funoct()
        {
        let val=Number(editcolomdata2.octt)
        let v2=Number(editcolomdata2.octp)
        let v3=Number(editcolomdata2.octa)
        let v4=v2+v3
        console.log('oct:',val,v2,v3)
        
        if(val>=v4&&val<=31)
        {
            //seterror(0)
             seterrmsg("valied")
             seterrmsgshow(true)
             console.log("no error:")
             setSI(prev=>({...prev,oct:false}))
        }
        else
        {
             error=error+1
             seterrmsg("Invalied")
             seterrmsgshow(true)
             console.log("error:",error)
             setSI(prev=>({...prev,oct:true}))
        } 
        }
        function funnov()
        {
        let val=Number(editcolomdata2.novt)
        let v2=Number(editcolomdata2.novp)
        let v3=Number(editcolomdata2.nova)
        let v4=v2+v3
        console.log('nov:',val,v2,v3)
        
        if(val>=v4&&val<=31)
        {
            //seterror(0)
             seterrmsg("valied")
             seterrmsgshow(true)
             console.log("no error:")
             setSI(prev=>({...prev,nov:false}))
        }
        else
        {
             error=error+1
             seterrmsg("Invalied")
             seterrmsgshow(true)
             console.log("error:",error)
             setSI(prev=>({...prev,nov:true}))
        } 
        }
        function fundec()
        {
        let val=Number(editcolomdata2.dect)
        let v2=Number(editcolomdata2.decp)
        let v3=Number(editcolomdata2.deca)
        let v4=v2+v3
        console.log('dec:',val,v2,v3)
        
        if(val>=v4&&val<=31)
        {
            //seterror(0)
             seterrmsg("valied")
             seterrmsgshow(true)
             console.log("no error:")
             setSI(prev=>({...prev,dec:false}))
        }
        else
        {
             error=error+1
             seterrmsg("Invalied")
             seterrmsgshow(true)
             console.log("error:",error)
             setSI(prev=>({...prev,dec:true}))
        } 
        }
        function funjan()
        {
        let val=Number(editcolomdata2.jant)
        let v2=Number(editcolomdata2.janp)
        let v3=Number(editcolomdata2.jana)
        let v4=v2+v3
        console.log('jan:',val,v2,v3)
        
        if(val>=v4&&val<=31)
        {
            //seterror(0)
             seterrmsg("valied")
             seterrmsgshow(true)
             console.log("no error:")
             setSI(prev=>({...prev,jan:false}))
        }
        else
        {
             error=error+1
             seterrmsg("Invalied")
             seterrmsgshow(true)
             console.log("error:",error)
             setSI(prev=>({...prev,jan:true}))
        } 
        }
        function funfeb()
        {
        let val=Number(editcolomdata2.febt)
        let v2=Number(editcolomdata2.febp)
        let v3=Number(editcolomdata2.feba)
        let v4=v2+v3
        console.log('feb:',val,v2,v3)
        
        if(val>=v4&&val<=31)
        {
            //seterror(0)
             seterrmsg("valied")
             seterrmsgshow(true)
             console.log("no error:")
             setSI(prev=>({...prev,feb:false}))
        }
        else
        {
             error=error+1
             seterrmsg("Invalied")
             seterrmsgshow(true)
             console.log("error:",error)
             setSI(prev=>({...prev,feb:true}))
        } 
        }
        function funmar()
        {
        let val=Number(editcolomdata2.mart)
        let v2=Number(editcolomdata2.marp)
        let v3=Number(editcolomdata2.mara)
        let v4=v2+v3
        console.log('mar:',val,v2,v3)
        
        if(val>=v4&&val<=31)
        {
            //seterror(0)
             seterrmsg("valied")
             seterrmsgshow(true)
             console.log("no error:")
             setSI(prev=>({...prev,mar:false}))
        }
        else
        {
             error=error+1
             seterrmsg("Invalied")
             seterrmsgshow(true)
             console.log("error:",error)
             setSI(prev=>({...prev,mar:true}))
        } 
        }
        function funapr()
        {
        let val=Number(editcolomdata2.aprt)
        let v2=Number(editcolomdata2.aprp)
        let v3=Number(editcolomdata2.apra)
        let v4=v2+v3
        console.log('apr:',val,v2,v3)
        
        if(val>=v4&&val<=31)
        {
            //seterror(0)
             seterrmsg("valied")
             seterrmsgshow(true)
             console.log("no error:")
             setSI(prev=>({...prev,apr:false}))
        }
        else
        {
             error=error+1
             seterrmsg("Invalied")
             seterrmsgshow(true)
             console.log("error:",error)
             setSI(prev=>({...prev,apr:true}))
        } 
        }
        
        function validate()
      {
       // funapril();

        funjune();
        funjuly();
        funaug(); 
        funsep();
        funoct();
        funnov();
        fundec();
        funjan();
        funfeb();
        funmar();
        funapr();
        if(error===0)
         {
            setSI({June: false, July: false, aug: false })

             console.log("call api")
             saveandsend();
              
         }
         else
         {
            console.log(error)
         }
        
        }

        function TeacherComments(e)
        {

           seteditcolomdata2(prev=>({...editcolomdata2, teacherfeedback:e.target.value }))
            //setupdateeditcolmdataR(prev=>({...updateeditcolmdataR, teacherfeedback:e.target.value }))
           
        }

        function parentcomment(e)
        {
           seteditcolomdata2(prev=>({...editcolomdata2, parentfeedback:e.target.value }))
            //setupdateeditcolmdataR(prev=>({...updateeditcolmdataR, parentfeedback:e.target.value }))
        }
         

     
 
    async function saveandsend(i)
     {  

        let data1={
            ...attendata[i],...editcolomdata2
                }
                     let conformedit=window.confirm("Do u want to SAVE this record?")
                    if(conformedit)
                    {

                         console.log("no error")
                        // await axios.post(`http://localhost:8080/api/std/attn/edit`,data1,{headers:{Authorization:token1}})
                         await api.post(`/api/std/attn/edit`,data1,{headers:{Authorization:token1}})

                         //let apiresponse=await axios.post(`http://localhost:8080/api/std/attn/get`,data,{headers:{Authorization:token1}})
                         let apiresponse=await api.post(`/api/std/attn/get`,data,{headers:{Authorization:token1}})

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

    return (
        <div className="row">

            {/* <div>
                {
                        errmsgshow==true&& <h2 className="text-danger  text-center mt-5">{errmsg}</h2>
                }
            </div> */}

            <div>
                <h5 className="ms-5" >Attendance </h5>
                <h5 className="ms-5" >Class: {stdid1}   </h5>
                <h5 className="ms-5" >Section:  {section1} </h5>
                <h5 className="ms-5" >Acadamic Year: 2026-27</h5>
              </div>
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
                        <td></td>
                        <td></td>
                         
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
                                      <td style={{  textAlign:"center"}} >
                                     {
                                        
                                     index===i?(<input value={editcolomdata2.junet}   onChange={e=>seteditcolomdata2({...editcolomdata2,junet:e.target.value})} style={{border:SI.June==true&&"2px solid red",width:"30px" }}/>):(data.junet)
                                    }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.junep}   onChange={e=>seteditcolomdata2({...editcolomdata2,junep:e.target.value})} style={{border:SI.June==true&&"2px solid red",width:"30px"}}/>):(data.junep)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.junea}   onChange={e=>seteditcolomdata2({...editcolomdata2,junea:e.target.value})} style={{border:SI.June==true&&"2px solid red",width:"30px"}}/>):(data.junea)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                        
                                     index===i?(<input value={editcolomdata2.julyt}   onChange={e=>seteditcolomdata2({...editcolomdata2,julyt:e.target.value})} style={{border:SI.July==true&&"2px solid red",width:"30px" }}/>):(data.julyt)
                                    }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.julyp}   onChange={e=>seteditcolomdata2({...editcolomdata2,julyp:e.target.value})} style={{border:SI.July==true&&"2px solid red",width:"30px"}}/>):(data.julyp)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.julya}   onChange={e=>seteditcolomdata2({...editcolomdata2,julya:e.target.value})} style={{border:SI.July==true&&"2px solid red",width:"30px"}}/>):(data.julya)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                        
                                     index===i?(<input value={editcolomdata2.augt}   onChange={e=>seteditcolomdata2({...editcolomdata2,augt:e.target.value})} style={{border:SI.aug==true&&"2px solid red",width:"30px" }}/>):(data.augt)
                                    }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.augp}   onChange={e=>seteditcolomdata2({...editcolomdata2,augp:e.target.value})} style={{border:SI.aug==true&&"2px solid red",width:"30px"}}/>):(data.augp)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.auga}   onChange={e=>seteditcolomdata2({...editcolomdata2,auga:e.target.value})} style={{border:SI.aug==true&&"2px solid red",width:"30px"}}/>):(data.auga)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                        
                                     index===i?(<input value={editcolomdata2.sept}   onChange={e=>seteditcolomdata2({...editcolomdata2,sept:e.target.value})} style={{border:SI.sep==true&&"2px solid red",width:"30px" }}/>):(data.sept)
                                    }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.sepp}   onChange={e=>seteditcolomdata2({...editcolomdata2,sepp:e.target.value})} style={{border:SI.sep==true&&"2px solid red",width:"30px"}}/>):(data.sepp)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.sepa}   onChange={e=>seteditcolomdata2({...editcolomdata2,sepa:e.target.value})} style={{border:SI.sep==true&&"2px solid red",width:"30px"}}/>):(data.sepa)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                        
                                     index===i?(<input value={editcolomdata2.octt}   onChange={e=>seteditcolomdata2({...editcolomdata2,octt:e.target.value})} style={{border:SI.oct==true&&"2px solid red",width:"30px" }}/>):(data.octt)
                                    }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.octp}   onChange={e=>seteditcolomdata2({...editcolomdata2,octp:e.target.value})} style={{border:SI.oct==true&&"2px solid red",width:"30px"}}/>):(data.octp)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.octa}   onChange={e=>seteditcolomdata2({...editcolomdata2,octa:e.target.value})} style={{border:SI.oct==true&&"2px solid red",width:"30px"}}/>):(data.octa)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                        
                                     index===i?(<input value={editcolomdata2.novt}   onChange={e=>seteditcolomdata2({...editcolomdata2,novt:e.target.value})} style={{border:SI.nov==true&&"2px solid red",width:"30px" }}/>):(data.novt)
                                    }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.novp}   onChange={e=>seteditcolomdata2({...editcolomdata2,novp:e.target.value})} style={{border:SI.nov==true&&"2px solid red",width:"30px"}}/>):(data.novp)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.nova}   onChange={e=>seteditcolomdata2({...editcolomdata2,nova:e.target.value})} style={{border:SI.nov==true&&"2px solid red",width:"30px"}}/>):(data.nova)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                        
                                     index===i?(<input value={editcolomdata2.dect}   onChange={e=>seteditcolomdata2({...editcolomdata2,dect:e.target.value})} style={{border:SI.dec==true&&"2px solid red",width:"30px" }}/>):(data.dect)
                                    }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.decp}   onChange={e=>seteditcolomdata2({...editcolomdata2,decp:e.target.value})} style={{border:SI.dec==true&&"2px solid red",width:"30px"}}/>):(data.decp)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.deca}   onChange={e=>seteditcolomdata2({...editcolomdata2,deca:e.target.value})} style={{border:SI.dec==true&&"2px solid red",width:"30px"}}/>):(data.deca)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                        
                                     index===i?(<input value={editcolomdata2.jant}   onChange={e=>seteditcolomdata2({...editcolomdata2,jant:e.target.value})} style={{border:SI.jan==true&&"2px solid red",width:"30px" }}/>):(data.jant)
                                    }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.janp}   onChange={e=>seteditcolomdata2({...editcolomdata2,janp:e.target.value})} style={{border:SI.jan==true&&"2px solid red",width:"30px"}}/>):(data.janp)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.jana}   onChange={e=>seteditcolomdata2({...editcolomdata2,jana:e.target.value})} style={{border:SI.jan==true&&"2px solid red",width:"30px"}}/>):(data.jana)
                                     }
                                    </td>

                                    <td style={{  textAlign:"center"}} >
                                     {
                                        
                                     index===i?(<input value={editcolomdata2.febt}   onChange={e=>seteditcolomdata2({...editcolomdata2,febt:e.target.value})} style={{border:SI.feb==true&&"2px solid red",width:"30px" }}/>):(data.febt)
                                    }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.febp}   onChange={e=>seteditcolomdata2({...editcolomdata2,febp:e.target.value})} style={{border:SI.feb==true&&"2px solid red",width:"30px"}}/>):(data.febp)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.feba}   onChange={e=>seteditcolomdata2({...editcolomdata2,feba:e.target.value})} style={{border:SI.feb==true&&"2px solid red",width:"30px"}}/>):(data.feba)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                        
                                     index===i?(<input value={editcolomdata2.mart}   onChange={e=>seteditcolomdata2({...editcolomdata2,mart:e.target.value})} style={{border:SI.mar==true&&"2px solid red",width:"30px" }}/>):(data.mart)
                                    }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.marp}   onChange={e=>seteditcolomdata2({...editcolomdata2,marp:e.target.value})} style={{border:SI.mar==true&&"2px solid red",width:"30px"}}/>):(data.marp)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.mara}   onChange={e=>seteditcolomdata2({...editcolomdata2,mara:e.target.value})} style={{border:SI.mar==true&&"2px solid red",width:"30px"}}/>):(data.mara)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                      index===i?(<input value={editcolomdata2.aprt}   onChange={e=>seteditcolomdata2({...editcolomdata2,aprt:e.target.value})} style={{border:SI.apr==true&&"2px solid red",width:"30px" }}/>):(data.aprt)
                                    }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.aprp}   onChange={e=>seteditcolomdata2({...editcolomdata2,aprp:e.target.value})} style={{border:SI.apr==true&&"2px solid red",width:"30px"}}/>):(data.aprp)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.apra}   onChange={e=>seteditcolomdata2({...editcolomdata2,apra:e.target.value})} style={{border:SI.apr==true&&"2px solid red",width:"30px"}}/>):(data.apra)
                                     }
                                    </td>
                                     
                                    <td className="align-top" style={{  textAlign:"center"}}>
                            {index===i?(<textarea value={editcolomdata2.teacherfeedback} onChange={(e)=>TeacherComments(e)}  style={{
                                                                                                                                        width:"120px",
                                                                                                                                        height:"100px",
                                                                                                                                        verticalAlign:"top",
                                                                                                                                        padding:"5px",
                                                                                                                                        resize:"vertical"
                                            }}  />):     <div style={{whiteSpace:"pre-wrap"}}> {data.teacherfeedback }</div> }
                          </td>
                           <td style={{  textAlign:"center"}}>
                            {index===i?(<textarea value={editcolomdata2.parentfeedback} onChange={(e)=>parentcomment(e)}  style={{
                                                                                                                                    width:"120px",
                                                                                                                                height:"100px",
                                                                                                                                verticalAlign:"top",
                                                                                                                                padding:"5px",
                                                                                                                                resize:"vertical"
      }}  />):   <div style={{whiteSpace:"pre-wrap"}}>{data.parentfeedback }</div>}
                          </td>

                                    
                                      
                                    {/* <td style={{  textAlign:"center"}} >
                                     {
                                        
                                     index===i?(<input value={editcolomdata2.aprt}   onChange={e=>updateaprt(e)} style={{border:SI.Apr==true&&"2px solid red" }}/>):(data.aprt)
                                    }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.aprp}   onChange={e=>updateaprp(e)} style={{border:SI.Apr==true&&"2px solid red"}}/>):(data.aprp)
                                     }
                                    </td>
                                    <td style={{  textAlign:"center"}} >
                                     {
                                     index===i?(<input value={editcolomdata2.apra}   onChange={e=>updateapra(e)} style={{border:SI.Apr==true&&"2px solid red"}}/>):(data.apra)
                                     }
                                    </td>
                                     */}
                                    <td> 
                                        {
                                            index===i?(
                                                <button className="btn btn-success" onClick={e=>(validate(i))}>SAVE</button>

                                            ):(
                                                <button className="btn btn-primary" onClick={e=>(Editcolomchange(i,data))}>EDIT</button>

                                            )
                                        }
                                    </td>  
                                </tr>
                            
                            
                            
                            
                            )
                        }

                    </tbody>
            
            </table>        
            </div>

        </div>

    )
}

export default Attendance