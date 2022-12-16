import React, { useContext } from "react";
import Navbar from "../../Components/Navbar";
import { CartPage } from "./Cartpage";

import "./Cartpage.css"

const Cart = () => {

  return (
    <div className="Cartnav">
       <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
      <CartPage/>
    </div>
  )

}


export default Cart;

