const admins=require("../models/adminModel")

function deleteController(req,res){
    let id=req.params.id;
    
    admins.deleteOne({"_id":id})
    .then((data)=>{
        res.send({success:true,message:"We got your delete request"})
    })
    .catch((err)=>{
        console.log(err);
        res.send({success:false,message:"Somthing went wrong. try again later"})
    })
}


module.exports=deleteController