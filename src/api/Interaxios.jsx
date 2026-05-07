import axios from "axios";





let api=axios.create({

    baseURL:import.meta.env.VITE_API_BASE_URL

})

api.interceptors.request.use((config)=>{

    let token=localStorage.getItem("token")
    if(config)
    {
        config.headers.Authorization=`Bearer ${token}`
    }
    return config  
})

export default api