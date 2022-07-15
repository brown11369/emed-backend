const express=require("express")
const vproducts=require("../models/vendor-productModel");

const router=express.Router();

router.post("/vproducts",(req,res)=>{
    let data=req.body;

    console.log(data)

    vproducts.create(data)
    .then((data)=>{
        res.send({success:true,message:"your product created"})
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"Try agin later"})
    })
})

router.put("/vproducts/:id",(req,res)=>{
    let id=req.params.id;
    let data=req.body
    vproducts.updateOne({"_id":id},data)
    .then((data)=>{
        res.send({success:true,message:"Your product has updated"})
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"try again later"})
    })
})

router.delete("/vproducts/:id",(req,res)=>{
    let id=req.params.id;

    vproducts.deleteOne({"_id":id})
    .then((data)=>{
        res.send({success:true,message:"Your product has deleted"})
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"try again later"})
    })
})

router.get("/vproducts/:id",(req,res)=>{
    let id=req.params.id;
    vproducts.findOne({"_id":id})
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"try agin later"})
    })
})

router.get("/vproducts",(req,res)=>{
    vproducts.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.send({success:false,message:"try agin later"})
    })
})

// router.get("/vproducts/brands/:brand",(req,res)=>{

//     let brand=req.params.brand;

//     vproducts.find({"brand":brand})
//     .then((data)=>{
//         res.send(data)
//     })
//     .catch((err)=>{
//         console.log(err)
//         res.send({success:false,message:"try again later"})
//     })

// })

// router.get("/vproducts/categories/:category",(req,res)=>{
//     let category=req.params.category;
//     console.log(category)
//     console.log("say hi")

//     vproducts.find({"categories":category})
//     .then((data)=>{
//         res.send(data)
//     })
//     .catch((err)=>{
//         res.send({success:false,message:"try again later"})
//     })
// })


module.exports=router;