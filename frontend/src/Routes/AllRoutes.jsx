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
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";


export default function AllRoutes ( ) {
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/women/all-clothing" element={<PrivateRoute><WomensPage/></PrivateRoute>}/>
            <Route path="/women/coats" element={<PrivateRoute><WomenCoatsPage/></PrivateRoute>}/>
            <Route path="/women/beach-wear" element={<PrivateRoute><WomenSwimWear/></PrivateRoute>}/>
            <Route path="/women/hosiery" element={<PrivateRoute><WomenHosiery/></PrivateRoute>}/>
            <Route path="/women/jackets" element={<PrivateRoute><WomensJackets/></PrivateRoute>}/>
            <Route path="/women/jeans" element={<PrivateRoute><WomensJeansPage/></PrivateRoute>}/>
            <Route path="/men/all-clothing" element={<PrivateRoute><MensPage/></PrivateRoute>}/>
            <Route path="/men/coats" element={<PrivateRoute><MensCoatsPage/></PrivateRoute>}/>
            <Route path="/men/beach-wear" element={<PrivateRoute><MensBeachWear/></PrivateRoute>}/>
            <Route path="/men/sweaters" element={<PrivateRoute><MensSweaters/></PrivateRoute>}/>
            <Route path="/men/jackets" element={<PrivateRoute><MensJacketsPage/></PrivateRoute>}/>
            <Route path="/men/jeans" element={<PrivateRoute><MensJeansPage/></PrivateRoute>}/>
            <Route path="/product/single/:id" element={<PrivateRoute><Single/></PrivateRoute>}/>
            <Route path="/wishlist" element={<PrivateRoute><WishlistPage/></PrivateRoute>}/>
            <Route path="*" element={<NotFoundPage/>}/>
            <Route path="/cart" element={<PrivateRoute><CartPage/></PrivateRoute>}/>
            <Route path="/userdetails" element={<PrivateRoute><DummyData/></PrivateRoute>}/>
            <Route path="/payment" element={<PrivateRoute><PaymentPage/></PrivateRoute>}/>
            <Route path="/checkout" element={<PrivateRoute><CheckoutPage/></PrivateRoute>}/>
            <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>} />
        </Routes>
        </> 
    )
}