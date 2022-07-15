const express = require("express");
const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken")

const admin=require("../models/adminModel");
const vendor=require("../models/vendorModel");
const user=require("../models/userModel");

const router=express.Router();

function roleuser(role){

    if(role==="admin"){
        return admin
    }
    else if(role==="vendor"){
        return vendor
    }

    return user

}



router.post("/register",(req,res)=>{

    let reguser=req.body;

    let cuser=roleuser(reguser.role)

    bcryptjs.genSalt(10,(err,salt)=>{

        if(!err){

            bcryptjs.hash(reguser.password,salt,(err,encp)=>{

                if(err===null || err===undefined){
    
                    reguser.password=encp;

                    cuser.create(reguser)
                    .then((data)=>{
                        res.send({success:true,message:"user has been created"})
                    })
                    .catch((err)=>{
                        console.log(err)
                        res.send({success:false,message:"user has not been created try again"})
                    })
                }
                else{
                    console.log(err);
                }
                
            })
        }
        else{
            console.log(err)
        }
    })
    
})

router.post("/login",(req,res)=>{

    let credentials=req.body;

    let checkuser=roleuser(credentials.role)

    checkuser.findOne({email:credentials.email})
    .then((user)=>{
        if(user===null){
            res.send({"success":false,"message":"this email has not been register here please check again"})
        }
        else{
            bcryptjs.compare(credentials.password,user.password,(err,success)=>{
                if(err){
                    console.log(err)
                    res.send({"success":false,"message":"Somthing went wrong please try again later"})
                }
                else{
                    if(success===false){
                        res.send({"success":false,"message":"your password wrong"})
                    }
                    else{
                        jwt.sign({email:credentials.email},"secretkey",(err,token)=>{
                            if(err){
                                res.send({success:false,message:"please try again letter"})
                            }
                            else{
                                res.send({"success":true,token:token,name:user.name,email:user.email,role:user.user_role})
                            }
                        })
                    }
                }
            })
            
        }
        
    })
    .catch((err)=>{
        console.log(err)
    })

})



module.exports=router;

