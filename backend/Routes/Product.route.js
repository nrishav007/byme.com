const express=require("express");
const ProductModel = require("../Models/Product.model");
const product=express.Router();
product.use(express.json());

product.get("/",async(req,res)=>{
    res.send(await ProductModel.find());
});

product.get("/:type",async(req,res)=>{
    const types=req.params.type;
    const {category,page,limit=18}=req.query;
    if(category){
        res.send(await ProductModel.find({type:types,category:category}).limit(limit).skip((page-1)*limit));
    }
    else{
        res.send(await ProductModel.find({type:types}).limit(limit).skip((page-1)*limit));
    }
});

module.exports=product;