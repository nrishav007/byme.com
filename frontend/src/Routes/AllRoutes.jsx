import { Route, Routes } from "react-router";
import WomenCoatsPage from "../Components/WomenCoats";
import WomensJackets from "../Components/WomenJackets";
import WomenHosiery from "../Components/WomensHosiery";
import WomensJeansPage from "../Components/WomensJeans";
import WomenSwimWear from "../Components/WomensSwim";
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
            <Route path="/women/all-clothing" element={<WomensPage/>}/>
            <Route path="/women/coats" element={<WomenCoatsPage/>}/>
            <Route path="/women/beach-wear" element={<WomenSwimWear/>}/>
            <Route path="/women/hosiery" element={<WomenHosiery/>}/>
            <Route path="/women/jackets" element={<WomensJackets/>}/>
            <Route path="/women/jeans" element={<WomensJeansPage/>}/>
            <Route path="/men/all-clothing" element={<MensPage/>}/>
        </Routes>
        </> 
    )
}