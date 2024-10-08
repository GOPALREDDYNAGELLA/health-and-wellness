import axios from "axios"
import { useState } from "react";

function Show()
{
    const [result, setResult] = useState(null)
     axios.get("http://localhost:8080/all", { }).then((response)=>{
       setResult(response.data)
     })
     if(result==null)
    {
        return(
            <div>
               data is fetching
            </div>
         );
    }
    else
    {
        return(
            <div>
                {result}
            </div>
         );
    }
        

}
export default Show