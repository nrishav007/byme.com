const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config();
const auth=(req,res,next)=>{
    const token=req.headers?.authorization?.split(" ")[1];
    if(token!=undefined){
        jwt.verify(token, process.env.SECRET_KEY,(err, decoded)=> {
            if(err){
                res.status(404).send({msg:"Validation failed"})
            }
            req.body.userID=decoded.userID;
            console.log(req.body);
            next()
          });   
    }
    else{
        res.status(404).send({msg:"Validation failed"})
    }
}
module.exports=auth;