const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
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
    address:{
        type:String,
        required:true
    }
},{timestamps:true})


const userModel=mongoose.model("users",userSchema)

module.exports=userModel;