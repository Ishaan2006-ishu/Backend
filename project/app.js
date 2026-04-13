const express=require("express");
const app=express();
const cors=require("cors");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
require("dotenv").config(); 

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
});