const express=require("express")
const carts=require("../models/cartModel")

const router=express.Router();



router.post("/user/cart",(req,res)=>{
    let data= req.body;

    carts.create(data)
    .then((data)=>{
        res.send({success:true,message:"add product in your cart"})
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:true,message:"try agin later"})
    })

})

router.get("/user/cart/:id",(req,res)=>{
    let id= req.params.id;

    carts.find({"userid":id})
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:true,message:"try agin later"})
    })

})

router.delete("/user/cart/:id",(req,res)=>{

    let id=req.params.id

    carts.deleteOne({"_id":id})
    .then((data)=>{
        res.send({success:true,message:"product removed from your cart"});
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"try again"})
    })


})


module.exports=router;