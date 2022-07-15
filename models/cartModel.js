const mongoose=require("mongoose")


const cartSchema=mongoose.Schema({
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
},{timestamps:true})


const cartModel=mongoose.model("carts",cartSchema)

module.exports=cartModel;