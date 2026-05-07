import { useEffect } from "react"
import api from "../api/Interaxios"

function Samax()
{

     useEffect(()=>{

        async function callaxios()
        {
            //let apiresponse/=await axios.get("l")
            let apiresponse=await api.get("/sam/ax/1")
            console.log(apiresponse)
        } 

           callaxios()


},[])

    
    return(

        <div>
            <h1>This is sample axios program</h1>
        </div>
    )
}
export default Samax