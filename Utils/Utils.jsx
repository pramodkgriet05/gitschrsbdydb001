export const  isEmailValied=(email)=>{

   let emailvalied=(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
   return emailvalied.test(email)
}

export const Check_user_login_status=()=>{
   let userData=localStorage.getItem("userData")
          if(userData==undefined)
      {
         return false
      }
      else{
         return true
      }
   }


export const   getloggedinuserID=()=>{

   let userData=localStorage.getItem('userData')
   userData=JSON.parse(userData)
   return userData.id

}
  