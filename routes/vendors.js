const express=require("express")
const vendors=require("../models/vendorModel")

const router=express.Router();

router.put("/vendors/:id",(req,res)=>{
    let id=req.params.id;
    let data=req.body;

    delete data.password;
    
    vendors.updateOne({"_id":id},data)
    .then((data)=>{
        res.send({success:true,message:"Your account has updated"})
    })
    .catch((err)=>{
        console.log(err);
        res.send({success:false,message:"try again later"})
    })
})

router.delete("/vendors/:id",(req,res)=>{
    let id=req.params.id;
    
    vendors.deleteOne({"_id":id})
    .then((data)=>{
        res.send({success:true,message:"Your account has deleted"})
    })
    .catch((err)=>{
        console.log(err);
        res.send({success:false,message:"try again later"})
    })
})

router.get("/vendors/:id",(req,res)=>{
    let id=req.params.id;

    vendors.findOne({"_id":id})
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err);
        res.send({success:false,message:"try again later"})
    })
})

router.get("/vendors",(req,res)=>{

    vendors.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err);
        res.send({success:false,message:"try again later"})
    })
})




module.exports=router;