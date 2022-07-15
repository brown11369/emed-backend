const mongoose=require("mongoose")


const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    sprice:{
        type:Number,
        required:true,
    },
    rprice:{
        type:Number
    },
    description:{
        type:String,
        required:true
    },
    pimage:{
        type:String
    },
    images:{
        type:String
    },
    precription:{
        type:Boolean,
        default:false
    },
    categoriesid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories"
    },
    brandid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"brands"
    }
},{timestamps:true})


const productModel=mongoose.model("products",productSchema)

module.exports=productModel;