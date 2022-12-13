import { Route, Routes } from "react-router";
import HomePage from "../Pages/HomePage";
import MensPage from "../Pages/MensPage";
import WomensPage from "../Pages/WomensPage";

export default function AllRoutes ( ) {
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signup" element={<h1>SIGN UP WILL COME HERE</h1>}/>
            <Route path="/login" element={<h1>LOG IN WILL COME HERE</h1>}/>
            <Route path="/men" element={<MensPage/>}/>
            <Route path="/women" element={<WomensPage/>}/>
        </Routes>
        </>
    )
}