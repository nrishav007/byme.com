const express=require("express");
const user=express.Router();
user.use(express.json());

user.get("/",(req,res)=>{
    
})


module.exports=user;