import { useState } from "react"
import Navbar from "../Navbar/Navbar"
import axios from "axios"
import { useParams } from "react-router-dom"

function DailyUpdates_S()
{

    let[dailyupdates, setdailyupdates]=useState({})
    let[showsubject,setshowsubject]=useState(false)
    let[showtable,setshowtable]=useState(false)
    let[pulleventdetailsdata, setpulleventdetailsdata]=useState([])
    let[month,setmonth]=useState()
    let{y}=useParams()
    //let[showsubject,setshowsubject]=useState()


     function month1(i,mnt)
    {
        setmonth(i)
        setshowsubject(true)
        setdailyupdates({...dailyupdates, month12:mnt})
      //   window.location=`/stdinfo/c1/u/${y}/${classid}/${sectionid}`

    }



    async function subject(a)
    {
                setdailyupdates({...dailyupdates, subj:a})
                setshowtable(true)

        //setsub({...sub,sub:a})

       let dupulldata={

            "acadamicyear":y,
            "documents":"documents",
            "standred":dailyupdates.class1,
            "section":dailyupdates.section,
            "month":month,
            "subject":a
        }
        try
        {
         console.log(dupulldata)
       // let apiresponse= await axios.post(`http://localhost:8080/m/s/duaddpull`,dupulldata)
        let apiresponse= await axios.post(`http://65.2.25.249:8080/m/s/duaddpull`,dupulldata)

         console.log(dupulldata)
         console.log(apiresponse.data)
         setpulleventdetailsdata(apiresponse.data)

       
        
        }
        catch(e)
        {
            console.log(e)
        }
         
         dupulldata={

             "acadamicyear":" ",
            "documents":" ",
            "standred:":" ",
            "section": " ",
            "month": " ",
            "subject": " "
         }
    }




    return(

        <div className="container">
            <div className="row"> 
                <div className="col-12">
                    <Navbar/>
                </div>
            </div>
            <div className="row">
                    <div className="col-12">

                <h1 style={{ marginLeft:"480px",marginTop: "15px" }}>Student Page  Daily Updates</h1>
                </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h6>input</h6>

                    </div>
                    <div className="row mt-5">
                          
                        <div className="   col-2">
                            <h3>Academic Year</h3>
                            <h3>Class:</h3>
                            <h3>Section</h3>
                           

                            
   {/* // let[sports,setsports]=useState({eventname:"",day:"",month:"",year:"",Description:"",uploadimages:""}) */}

                            
                        </div>
                         
                        <div className="   col-2">
                       
                        <select className='form-control std_rec_add1 ' value={dailyupdates.class1} placeholder='select year' onChange={e=>setdailyupdates({...dailyupdates, class1:e.target.value})} >
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
                        <select className='form-control std_rec_add1 ' value={dailyupdates.section} placeholder='select year' onChange={e=>setdailyupdates({...dailyupdates, section:e.target.value})} >
                        <option>select section</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        </select>
                        {/* <button className='btn btn-primary mt-2' onClick={e=>submitapi()}>submit</button> */}
                        </div>
                         
                </div>


                <div className="row" style={{marginTop:'50px'}}></div>
                <div style={{
                            borderBottom: "1px solid #bcb9b9",
                            margin: "6px 0"
                            }}>

                </div>
                </div>



                <div className="row">
                    <div className="col-12">
                        <h6>Map1</h6>
                     </div>
                </div>

                <div className="row">
        <div className="col-12" style={{marginTop:'100px'}}>

        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(1,"January" )}>January</button>
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1( 2,"February")}>February</button> 
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(3,"March")}>March</button>
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(4,"April")}>April</button>


        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(5,"May" )}>May</button>
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1( 6,"June")}>June</button> 
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(7,"July")}>July</button>
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(8,"August")}>August</button>

        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(9,"Septembet" )}>Septembet</button>
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1( 10,"October")}>October</button> 
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(11,"November")}>November</button>
        <button className='btn btn-primary mt-2 ms-2' onClick={e=>month1(12,"December")}>December</button>


       </div>

       </div>

       <div className="row"  style={{marginTop:'30px'}}>
        <div className="col-12">
        {showsubject==true&&
        <div>
        
        <button className='btn btn-primary mt-2' style={{marginTop:'20px'}}onClick={e=>subject( "Hindi")  }>Hindi</button>
        <button className='btn btn-primary mt-2 ms-2' style={{marginTop:'20px'}}onClick={e=>subject( "Telugu")  }>Telugu</button>
        <button className='btn btn-primary mt-2 ms-2' style={{marginTop:'20px'}}onClick={e=>subject( "English")  }>English</button>
        <button className='btn btn-primary mt-2 ms-2' style={{marginTop:'20px'}}onClick={e=>subject( "Maths")  }>Maths</button>
        <button className='btn btn-primary mt-2 ms-2' style={{marginTop:'20px'}}onClick={e=>subject( "Science")  }>Science</button>
        <button className='btn btn-primary mt-2 ms-2' style={{marginTop:'20px'}}onClick={e=>subject( "Social")  }>social</button>
        <button className='btn btn-primary mt-2 ms-2' style={{marginTop:'20px'}}onClick={e=>subject( "EV")  }>EV</button>
        </div>
        }
        </div>

       </div>

                <div className="row" style={{marginTop:'50px'}}></div>
                <div style={{
                            borderBottom: "1px solid #bcb9b9",
                            margin: "6px 0"
                            }}>

                </div>





                
                 <div className="row">
                    <div className="col-12">
                        <h6>Map</h6>
                    </div>
                </div>



                <div className="row">
                    <div className="col-12 mt-5">
                        {
           showtable==true&&<div>
                 <h3>Daily Updates  </h3>
                  <div className="col-2 mt-1">
                   <h6> year<span style={{fontSize:"17px",color: "red" }}>: {y} </span></h6>  
                    <h6>class: <span style={{fontSize:"17px",  color: "red"}}>: {dailyupdates.class1} </span></h6> 
                    <h6>Section:   <span style={{fontSize:"17px",  color: "red"}}>: {dailyupdates.section} </span></h6> 
                    <h6>Month: <span style={{fontSize:"17px",  color: "red"}}>: {dailyupdates.month12} </span></h6>  
                    <h6>Subject <span style={{fontSize:"17px",  color: "red"}}>: {dailyupdates.subj} </span></h6>  
                            </div>    
                     </div>
                     }
                    </div>                       
                </div>

                <div className="row">
                     <div className="col-12 " style={{marginTop:'40px'}}>
           
            {
           showtable==true&&<div>
              <table className=" compact-table table table-sm align-middle table-striped table-hover">
                <thead>
                    <tr className="fw-bold" > 

                           <th >Subject</th> 
                          <th >Project Name</th> 

                           <th>Description</th>
                           <th>Teacher Name  </th>
                           <th>class</th> 
                           <th>sec</th>
                         
                           <th>Download file</th>
                           </tr>
                </thead>     
                     <tbody className="table-group-divider">
                    {
                        pulleventdetailsdata?.map((data, i)=>(

                            <tr key={i}>
                                 
                                    <td >
                                         {data.subject}
                                    </td>
                                     <td style={{  textAlign:"center"}}>
                                  {data.projectname}  
                                    </td>

                                     <td style={{  textAlign:"center"}}>
                                  {data.description}  
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
                                      {/* <a href={data.imgpreurl}  target="_blank"     rel="noopener noreferrer" >{data.imgfilename}</a> */}
                                      <span style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }} onClick={() => window.open(data.imgpreurl, "_blank")}>{data.imgfilename}</span>
                                    </td>
                                    <td>
                                        <button className="btn btn-primary" onClick={e=>delrecordup(data)}>Delete</button>
                                    </td>
                                </tr>
                        ))

                    }
                           </tbody>
                           </table>
                           </div>
            }
        </div>
          </div>
        </div>
    )
}

export default DailyUpdates_S