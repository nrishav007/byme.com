import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AppContext"



export const PrivateRoute=({children})=>{
    const {user}=useContext(AuthContext);
    const token = localStorage.getItem("logintoken");
    if(!user || !token){
        return <Navigate to="/login"/>
    }
    return children

}