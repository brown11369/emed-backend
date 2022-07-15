const express=require("express")
const users=require("../models/userModel")

const router=express.Router();

router.put("/users/:id",(req,res)=>{
    let id=req.params.id;
    let data=req.body;

    delete data.password;
    
    users.updateOne({"_id":id},data)
    .then((data)=>{
        res.send({success:true,message:"Your account has updated"})
    })
    .catch((err)=>{
        console.log(err);
        res.send({success:false,message:"try again later"})
    })
})

router.delete("/users/:id",(req,res)=>{
    let id=req.params.id;
    
    users.deleteOne({"_id":id})
    .then((data)=>{
        res.send({success:true,message:"Your account has deleted"})
    })
    .catch((err)=>{
        console.log(err);
        res.send({success:false,message:"try again later"})
    })
})

router.get("/users/:id",(req,res)=>{
    let id=req.params.id;

    users.findOne({"_id":id})
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err);
        res.send({success:false,message:"try again later"})
    })
})

router.get("/users",(req,res)=>{

    users.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err);
        res.send({success:false,message:"try again later"})
    })
})




module.exports=router;