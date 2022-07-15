const express=require("express")
const admins=require("../models/adminModel")

const router=express.Router();

router.put("/admins/:id",(req,res)=>{
    let id=req.params.id;
    let data=req.body;

    delete data.password;
    
    admins.updateOne({"_id":id},data)
    .then((data)=>{
        res.send({success:true,message:"Your account has updated"})
    })
    .catch((err)=>{
        console.log(err);
        res.send({success:false,message:"try again later"})
    })
})

router.delete("/admins/:id",(req,res)=>{
    let id=req.params.id;
    
    admins.deleteOne({"_id":id})
    .then((data)=>{
        res.send({success:true,message:"Your account has deleted"})
    })
    .catch((err)=>{
        console.log(err);
        res.send({success:false,message:"try again later"})
    })
})

router.get("/admins/:id",(req,res)=>{
    let id=req.params.id;

    admins.findOne({"_id":id})
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err);
        res.send({success:false,message:"try again later"})
    })
})

router.get("/admins",(req,res)=>{

    admins.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err);
        res.send({success:false,message:"try again later"})
    })
})




module.exports=router;