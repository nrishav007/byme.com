const express=require("express");
const API=express.Router();
const fs=require("fs");
API.use(express.json());
API.get("/home",(req,res)=>{
    const data=fs.readFileSync("../Resources/home.json","utf-8");
    console.log(data)
    res.send("hi");
});



module.exports=API;