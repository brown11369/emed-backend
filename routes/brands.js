const express=require("express")
const brands=require("../models/brandModel")

const router=express.Router();



router.post("/brands",(req,res)=>{
    let data= req.body;

    brands.create(data)
    .then((data)=>{
        res.send({success:true,message:"brand created"})
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:true,message:"try agin later"})
    })

})



router.put("/brands/:id",(req,res)=>{
    let data=req.body
    let id=req.params.id;
    

    brands.updateOne({"_id":id},data)
    .then((data)=>{
        res.send({success:true,message:"Your brand has updated"})
    })
    .catch((err)=>{
        res.send({success:false,message:"Your brand has not updated try again"})
        console.log(err);
    })
   
})

router.delete("/brands/:brand",(req,res)=>{

    let brand=req.params.brand

    brands.deleteOne({"name":brand})
    .then((data)=>{
        res.send({success:true,message:"brand deleted"});
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"try again"})
    })


})

router.get("/brands",(req,res)=>{
    
    brands.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"try again"})
    })
})

router.get("/brands/:brand",(req,res)=>{

    let brand=req.params.brand
    
    brands.findOne({"name":brand})
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"try again"})
    })
})






module.exports=router;