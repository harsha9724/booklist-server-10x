const express=require("express");
const mongoose=require("mongoose");
const app=express();
require('dotenv').config();
const userRouter=require("./routers/user")
const bookRouter=require("./routers/book")

app.use("/",userRouter);
app.use("/",bookRouter);
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.listen(process.env.PORT,async ()=>{
     mongoose.connect(process.env.MONGO_URL,()=>{
        console.log("connected to data base");
     });
     console.log(`server is up at ${process.env.PORT}`)
})