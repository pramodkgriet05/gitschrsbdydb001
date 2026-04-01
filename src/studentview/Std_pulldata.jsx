 import { useParams } from "react-router-dom"
import Stdpullget from "./Stdpullget"
import Pulldataafter from "../studentupdate/Pulldataafter"
import { GET_USER_NAME } from "../../Utils/Utils"


 
function Std_pulldata()
{
    const {classid1}=useParams()

    let userName=GET_USER_NAME()
            
            if(userName==null)
           {
            window.location="/"
           }

    

    console.log(classid1)
    return( 
    
       <div className="container">
        <div className="row">
            <div className="col-12">
                
        <Pulldataafter classid={classid1}/>
        </div>
        </div>

       </div>
    )
}
export default Std_pulldata