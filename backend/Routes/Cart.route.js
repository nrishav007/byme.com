const express=require("express");
const cart=express.Router();
cart.use(express.json());
const CartModel = require("../Models/Cart.model");
cart.get("/", async (req, res) => {
    try {
      const carts = await CartModel.find({ userID: req.body.userID });
      res.status(200).send(carts);
    } catch (e) {
      console.log(e);
      res.status(409).send({ msg: "Not Found" });
    }
  });
  
  cart.post("/create", async (req, res) => {
    try {
      await CartModel.create(req.body);
      res.status(200).send({ msg: "Cart Added" });
    } catch (e) {
      console.log(e);
      res.status(400).send({ msg: "Not Found" });
    }
  });
  
  cart.delete("/:userID", async (req, res) => {
      try {
        const userID = req.params.userID;
        await CartModel.findByIdAndDelete(userID);
        res.status(200).send({ msg: "Cart Deleted" });
      } catch (e) {
        console.log(e);
        res.status(400).send({ msg: "Not Found" });
      }
    });
    
module.exports=cart;