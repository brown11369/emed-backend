const jwt=require("jsonwebtoken");

function verifytkn(req,res,next){

    let header=req.headers.authorization;

    if(header===undefined){
        res.send({message:"haerders are missing"})
    }
    else if(header===""){
        res.send({message:"token is missing"})
    }
    else{
        let token=header.split(" ")[1]
        if(token===undefined){
            res.send({message:"cant,t find token"})
        }
        else{
            jwt.verify(token,"secretkey",(err,data)=>{
                if(!err){
                    next();
                }
                else{
                    res.send({message:"somthing issue with your token"})
                }
            })
        }
    }



}


module.exports=verifytkn;