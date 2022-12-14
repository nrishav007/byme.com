const mongoose=require("mongoose");
const env=require("dotenv");
env.config();
mongoose.set('strictQuery', false);
const url=process.env.MONGO_URL;
const database_connection=mongoose.connect(url);
module.exports=database_connection;