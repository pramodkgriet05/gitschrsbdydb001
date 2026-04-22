import axios from "axios"

function RoleBased()
{

function GET_ROLE() {
    let token = localStorage.getItem("token");
    if (!token) return null;

    try {
        let payload = JSON.parse(atob(token.split('.')[1]));
        return payload.role;
    } catch {
        return null;
    }
}
console.log(GET_ROLE())

    async function Admin()
    {

        let token=localStorage.getItem("token")
        console.log(token)
        let token1="Bearer"+" "+token;
        console.log(token1)
        

      //  let api=await axios.get("http://localhost:8080/auth/rolebasedcheck",token1)
        let api1=await axios.get("http://localhost:8080/auth/admin/fees1",{
   headers:{
    Authorization:token1
   }
        }) 
        //console.log(api)
        console.log(api1) 
    }
     async function Teacher()
    {

        let token=localStorage.getItem("token")
        console.log(token)
        let token1="Bearer"+" "+token;
        console.log(token1)
        

      //  let api=await axios.get("http://localhost:8080/auth/rolebasedcheck",token1)
        let api1=await axios.get("http://localhost:8080/auth/teacher",{
   headers:{
    Authorization:token1
   }
        }) 
        //console.log(api)
        console.log(api1) 
    }
    async function Student()
    {
        

        let token=localStorage.getItem("token")
        console.log(token)
        let token1="Bearer"+" "+token;
        console.log(token1)
        

      //  let api=await axios.get("http://localhost:8080/auth/rolebasedcheck",token1)
        let api1=await axios.get("http://localhost:8080/auth/student",{
   headers:{
    Authorization:token1
   }
        }) 
        //console.log(api)
        console.log(api1) 
    }
   
    return(



        <div>
            <h1> role based</h1>
            <button className="btn btn-primary" onClick={e=>Admin()}>Admin</button>
            <button className="btn btn-primary" onClick={e=>Teacher()}>Teacher</button>
            <button className="btn btn-primary" onClick={e=>Student()}>Student</button>
        </div>
    )
}

export default RoleBased
