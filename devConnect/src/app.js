const express=require("express");
const cors = require('cors');
const app=express();
const postRouter=require("./routes/postsRoutes")
//const port=3000;
app.use(cors());

app.get("/",(req,res)=>{
    res.send("hello");
})

app.use("/posts",postRouter)



// app.listen(port,()=>{
//     console.log("server start");
// })

module.exports=app;
