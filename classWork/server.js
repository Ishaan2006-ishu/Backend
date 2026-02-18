// const http=require("http");

// const server=http.createServer((req,res)=>{
//     const url=req.url;
//     const method=req.method;
//     console.log(url);
//     console.log(method);
//     if(url==='/' && method==="GET"){
//         res.end("home")
//     }

// })

// server.listen(8000,()=>{
//     console.log("server start");
// })


// const http = require("http");
// const fs = require("fs");


// const server = http.createServer((req, res) => {


//     const timeStamp = new Date().toISOString();

    
//     const log = `Time: ${timeStamp} | Method: ${req.method} | URL: ${req.url}\n`;

   
//     fs.appendFile("log.txt", log, (err) => {
//         if (err) {
//             console.log("Error writing log");
//         }
//     });

    
    
//     res.end("succesfully logged");
// });


// server.listen(8000, () => {
//     console.log("Server running on port 3000");
// });
