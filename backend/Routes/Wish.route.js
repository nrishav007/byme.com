const express=require("express");
const wish=express.Router();
wish.use(express.json());
const WishModel = require("../Models/Wish.model");
wish.get("/", async (req, res) => {
    try {
      const carts = await WishModel.find({ userID: req.body.userID });
      res.status(200).send(carts);
    } catch (e) {
      console.log(e);
      res.status(409).send({ msg: "Not Found" });
    }
  });
  
  wish.post("/create", async (req, res) => {
    try {
      const data=await WishModel.find({productID:req.body.productID,userID:req.body.userID});
      if(data.length>0){
        res.status(200).send({msg:"Product already in wishlist"});
      }
      else{
        await WishModel.create(req.body);
      res.status(200).send({ msg: "Product Added to wishlist" });
      }
      
    } catch (e) {
      console.log(e);
      res.status(400).send({ msg: "Not Found" });
    }
  });
  
  wish.delete("/delete/:userID", async (req, res) => {
      try {
        const userID = req.params.userID;
        await WishModel.findByIdAndDelete(userID);
        res.status(200).send({ msg: "Product removed from wishlist" });
      } catch (e) {
        console.log(e);
        res.status(400).send({ msg: "Not Found" });
      }
    });
    
module.exports=wish;