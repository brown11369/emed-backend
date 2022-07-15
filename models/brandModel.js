const mongoose=require("mongoose")


const brandSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    }
},{timestamps:true})


const brandModel=mongoose.model("brands",brandSchema)

module.exports=brandModel;