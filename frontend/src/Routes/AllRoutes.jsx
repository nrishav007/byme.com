import { Route, Routes } from "react-router";
import { Admin } from "../admin/Admin";
import MensBeachWear from "../Components/MensBeach";
import MensCoatsPage from "../Components/MensCoat";
import MensJacketsPage from "../Components/MensJackets";
import MensJeansPage from "../Components/MensJeans";
import MensSweaters from "../Components/MensSweaters";
import WomenCoatsPage from "../Components/WomenCoats";
import WomensJackets from "../Components/WomenJackets";
import WomenHosiery from "../Components/WomensHosiery";
import WomensJeansPage from "../Components/WomensJeans";
import WomenSwimWear from "../Components/WomensSwim";

import CartPage from "../Pages/CartPage";

import CheckoutPage from "../Pages/CheckoutPage";

import { DummyData } from "../Pages/DummyData";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import MensPage from "../Pages/MensPage";
import NotFoundPage from "../Pages/NotFoundPage";
import PaymentPage from "../Pages/PaymentPage";
import Signup from "../Pages/Signup";
import { Single } from "../Pages/Singlepage/Single";
import WishlistPage from "../Pages/WishListPage";
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
            <Route path="/men/coats" element={<MensCoatsPage/>}/>
            <Route path="/men/beach-wear" element={<MensBeachWear/>}/>
            <Route path="/men/sweaters" element={<MensSweaters/>}/>
            <Route path="/men/jackets" element={<MensJacketsPage/>}/>
            <Route path="/men/jeans" element={<MensJeansPage/>}/>
            <Route path="/product/single/:id" element={<Single/>}/>
            <Route path="/wishlist" element={<WishlistPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/userdetails" element={<DummyData/>}/>
            <Route path="/payment" element={<PaymentPage/>}/>
            <Route path="/checkout" element={<CheckoutPage/>}/>
            <Route path="/admin" element={<Admin/>} />
        </Routes>
        </> 
    )
}