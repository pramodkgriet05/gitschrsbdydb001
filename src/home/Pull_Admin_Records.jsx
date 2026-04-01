import axios from "axios"
import { useEffect } from "react"

function Pull_Admin_Records()
{


    useEffect(()=>{

       async function pulldata()
        {
           // setpulladminrecords_a(false)

            console.log("std_info_c1_u_pulldata classid:"+classid)
             try{

                        //                          const apiResponse = await axios.get(
                        //                 `http://65.2.25.249:8080/s/pullrecords1/${classid}`
                        //                  );
                        // console.log(apiResponse)
                        // 
                        let ApiResponse= await axios.get('http://localhost:8080/admin/recordpull')
                        // setstdinfo(apiResponse.data)
                    
               }
             
            catch(error)
                {
                    console.log(error)
                }

        }
     pulldata()
       
    },[]) 

    



    return(

        <div>
            <h1>pull Admin Records:</h1>
        </div>
    )
}
export default Pull_Admin_Records;