const mongoose=require("mongoose")


const orderSchema=mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    vendorid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"vendors"
    },
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    },
    vproductid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"vproducts"
    },
    address:[{
        type:String
    }]
},{timestamps:true})


const orderModel=mongoose.model("orders",orderSchema)

module.exports=orderModel;