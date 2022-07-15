const express=require("express")
const orders=require("../models/orderModel");

const router=express.Router();

router.post("/user/orders",(req,res)=>{

    let data=req.body;

    orders.create(data)
    .then((data)=>{
        res.send({success:true,message:"Thank you for purchase"})
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"Try agin later"})
    })
})

router.get("/user/orders/:id",(req,res)=>{

    let id=req.params.id;

    orders.find({"userid":id})
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"Try agin later"})
    })
})



module.exports=router;