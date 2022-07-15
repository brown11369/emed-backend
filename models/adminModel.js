const mongoose=require("mongoose")

const adminSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        unique:true,
        maxLenght:10,
        minLength:10
    },
    password:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        default:"logo.png"
    },
    user_role:{
        type:String,
        required:true
    }
},{timestamps:true})


const adminModel=mongoose.model("admins",adminSchema)

module.exports=adminModel;