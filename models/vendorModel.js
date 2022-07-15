const mongoose=require("mongoose")

const vendorSchema=mongoose.Schema({
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
    },
    company:{
        type:String,
        required:true,
        unique:true
    },
    pancard:{
        type:String,
        required:true,
        unique:true
    },
    gsttin:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true})


const vendorModel=mongoose.model("vendors",vendorSchema)

module.exports=vendorModel;