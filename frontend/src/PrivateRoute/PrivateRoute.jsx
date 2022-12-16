import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AppContext"



export const PrivateRoute=({children})=>{
    const {user_Auth}=useContext(AuthContext)
    if(!user_Auth.user_Auth){
        return <Navigate to="/login"/>
    }
    return children

}