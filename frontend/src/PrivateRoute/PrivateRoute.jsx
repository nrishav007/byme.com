import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AppContext"



export const PrivateRoute=({children})=>{
    const {user}=useContext(AuthContext)
    if(!user){
        return <Navigate to="/login"/>
    }
    return children

}