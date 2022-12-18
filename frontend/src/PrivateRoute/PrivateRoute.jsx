import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AppContext"



export const PrivateRoute=({children})=>{
    const {user,user_Auth}=useContext(AuthContext);
    const token = localStorage.getItem("logintoken");
    
    if(!user && !user_Auth.user_Auth){
        return <Navigate to="/login"/>
    }
    return children

}