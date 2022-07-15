const express=require("express")
const categories=require("../models/categoryModel")


const router=express.Router();


router.post("/categories",(req,res)=>{
    let data=req.body;

    categories.create(data)
    .then((data)=>{
        res.send({success:true,message:"category created"})
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"try agin later"})
    })
})

router.put("/categories/:id",(req,res)=>{
    let data=req.body
    let id=req.params.id;
    

    categories.updateOne({"_id":id},data)
    .then((data)=>{
        res.send({success:true,message:"Your category has updated"})
    })
    .catch((err)=>{
        res.send({success:false,message:"Your category has not updated try again"})
        console.log(err);
    })
   
})

router.delete("/categories/:category",(req,res)=>{

    let category=req.params.category

    categories.deleteOne({"name":category})
    .then((data)=>{
        res.send({success:true,message:"category deleted"});
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"try again"})
    })

})

router.get("/categories/:category",(req,res)=>{

    let category=req.params.category

    categories.findOne({"name":category})
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"try again"})
    })
})

router.get("/categories",(req,res)=>{

    let category=req.params.category

    categories.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"try again"})
    })
})


module.exports=router;