const express=require("express");
const user=express.Router();
user.use(express.json());
const UserModel = require("../Models/User.model");
user.get("/", async (req, res) => {
    try {
      const users = await UserModel.find({ userID: req.body.userID });
      res.status(200).send(users);
    } catch (e) {
      console.log(e);
      res.status(409).send({ msg: "Not Found" });
    }
  });
  
  user.post("/create", async (req, res) => {
    try {
      await UserModel.create(req.body);
      res.status(200).send({ msg: "user Added" });
    } catch (e) {
      console.log(e);
      res.status(400).send({ msg: "Not Found" });
    }
  });
  
  user.patch("/update/:userID", async (req, res) => {
    try {
      const userID = req.params.userID;
      await UserModel.findByIdAndUpdate({_id:userID}, req.body);
      res.status(200).send({ msg: "User Modified" });
    } catch (e) {
      console.log(e);
      res.status(400).send({ msg: "Not Found" });
    }
  });
  
  user.delete("/delete/:userID", async (req, res) => {
      try {
        const userID = req.params.userID;
        await UserModel.findByIdAndDelete(userID);
        res.status(200).send({ msg: "user Modified" });
      } catch (e) {
        console.log(e);
        res.status(400).send({ msg: "Not Found" });
      }
    });

module.exports=user;