import { Route, Routes } from "react-router";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import MensPage from "../Pages/MensPage";
import Signup from "../Pages/Signup";
import WomensPage from "../Pages/WomensPage";

export default function AllRoutes ( ) {
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/men" element={<MensPage/>}/>
            <Route path="/women" element={<WomensPage/>}/>
            
        </Routes>
        </>
    )
}