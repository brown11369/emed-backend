const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
let PORT= process.env.PORT || 8000;

const app=express();

app.use(cors())
app.use(express.json());

mongoose.connect("mongodb+srv://brown-bug:1yRRJ3g5OLuJKwT2@emed.4zqn6.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongodb connected")
})
.catch((err)=>{
    console.log(err)
})

const reglogin=require("./routes/reg-login")
const categories=require("./routes/categories")
const brands=require("./routes/brands")
const products=require("./routes/products")
const admins=require("./routes/admins")
const vendors=require("./routes/vendors")
const users=require("./routes/users")
const vproducts=require("./routes/vendor-products")
const carts=require("./routes/carts")
const orders=require("./routes/orders")

app.get("/",(req,res)=>{
    res.send({success:true,message:"<h1>This is testing api for e-com website.</h1>"})
});

app.use("/app",[reglogin,categories,brands,products,admins,vendors,users,vproducts,carts,orders])



app.listen(PORT,()=>{
    console.log(`Server up and running on port ${PORT}`)
})

