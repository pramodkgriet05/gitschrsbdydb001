 import { useParams } from "react-router-dom"
import Stdpullget from "./Stdpullget"
import Pulldataafter from "../studentupdate/Pulldataafter"


 
function Std_pulldata()
{
    const {classid1}=useParams()


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