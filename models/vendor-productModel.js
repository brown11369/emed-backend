const mongoose=require("mongoose")


const vproductSchema=mongoose.Schema({
    vendorid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"vendors"
    },
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    },
    price:{
        type:Number,
        required:true,
    },
    qunatity:{
        type:Number,
    }
},{timestamps:true})


const vproductModel=mongoose.model("vproducts",vproductSchema)

module.exports=vproductModel;