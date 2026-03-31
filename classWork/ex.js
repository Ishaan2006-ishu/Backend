const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    console.log("req.params")
    res.send("welcome to home");
})


app.listen(8000,()=>{
    console.log("server start");
})