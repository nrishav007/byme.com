const mongoose=require("mongoose");
const ProductSchema=mongoose.Schema({
    image:String,
    title:String,
    description:String,
    price:String,
    category:String,
    type:String
});
const ProductModel=mongoose.model("Bymeproduct",ProductSchema);
module.exports=ProductModel;