export const  isEmailValied=(email)=>{

   let emailvalied=(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
   return emailvalied.test(email)
}

export const GET_USER_NAME=()=>{

    let userData=localStorage.getItem('userData')
   
    if(userData!=null)
        {
             userData=JSON.parse(userData)
             let userName=userData.UserName
            return userName
        } 
        else
        {
            return null
        }

 }
export const GET_USER_DATA=()=>{
    console.log("check")

    let userData=localStorage.getItem('userData')
   
    if(userData!=null)
        {
             userData=JSON.parse(userData)
             let imgkey=userData.imgkey
            return userData
        } 
        else
        {
            return null
        }

 }


 export const GET_USER_ID=()=>{

    let userData=localStorage.getItem('userData')
    if(userData!=null)
    {
    userData=JSON.parse(userData)
            return userData.id
    }
    else
    {
        return null
    }
   }
  