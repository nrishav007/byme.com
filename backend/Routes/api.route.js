const express=require("express");
const API=express.Router();
const fs=require("fs");
API.use(express.json());

API.get("/home",(req,res)=>{
    const data=JSON.parse(fs.readFileSync(`./Resources/home.json`,"utf-8"));
    res.send(data);
});


API.get("/home/:id",(req,res)=>{
    const ids=req.params.id;
    const pat=req.params.pat;
    const data=JSON.parse(fs.readFileSync(`./Resources/home.json`,"utf-8"));
    if(data[ids]==undefined){
        res.status(404).send({msg:"page not found"});
    }
    else{
        res.send(data[ids]);
    }
});



module.exports=API;