const express=require("express")
const products=require("../models/productModel");

const router=express.Router();

router.post("/products",(req,res)=>{
    let data=req.body;

    console.log(data)

    products.create(data)
    .then((data)=>{
        res.send({success:true,message:"your product created"})
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"Try agin later"})
    })
})

router.put("/products/:id",(req,res)=>{
    let id=req.params.id;
    let data=req.body
    products.updateOne({"_id":id},data)
    .then((data)=>{
        res.send({success:true,message:"Your product has updated"})
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"try again later"})
    })
})

router.delete("/products/:id",(req,res)=>{
    let id=req.params.id;

    products.deleteOne({"_id":id})
    .then((data)=>{
        res.send({success:true,message:"Your product has deleted"})
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"try again later"})
    })
})

router.get("/products/:id",(req,res)=>{
    let id=req.params.id;
    products.findOne({"_id":id})
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"try agin later"})
    })
})

router.get("/products",(req,res)=>{
    products.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"try agin later"})
    })
})

router.get("/products/brands/:brand",(req,res)=>{

    let brand=req.params.brand;

    products.find({"brand":brand})
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"try again later"})
    })

})

router.get("/products/categories/:category",(req,res)=>{
    let category=req.params.category;
    console.log(category)
    console.log("say hi")

    products.find({"categories":category})
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send({success:false,message:"try again later"})
    })
})


module.exports=router;