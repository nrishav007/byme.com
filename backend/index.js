const express=require("express");
const app=express();
const env=require("dotenv");
env.config();
const homejson=require("./Resources/home.json");
const port=process.env.PORT || 3400;
app.use(express.json());

app.get("/api/home",(req,res)=>{
    res.send(homejson);
})




app.listen(port,()=>{
    try {
        // connection_db;
        console.log(`database connected and listening to http://localhost:${port}`)
    } catch (e) {
        console.log(e);
        console.log("App is not listening")
    }
})