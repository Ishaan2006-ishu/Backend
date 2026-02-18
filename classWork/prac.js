// const fs = require("fs");
// const http = require("http");

// const user = {
//   name: "ishaan",
//   id: "29"
// };

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;

//   // GET request
//   if (url === "/" && method === "GET") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(user));
//   }

//   // POST request
//   else if (method === "POST" && url === "/") {
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk;
//     });

//     req.on("end", () => {
//       const parsedBody = JSON.parse(body);

//       fs.writeFile("file.txt", body, (err) => {
//         if (err) {
//           console.log("Error writing file");
//         } else {
//           console.log("File written successfully");
//         }
//       });
        

//       res.writeHead(201, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({
//         message: "User created successfully",
//         data: parsedBody
//       }));
//     });
//   }

//   else {
//     res.writeHead(404, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ message: "Route not found" }));
//   }
// });

// server.listen(8000, () => {
//   console.log("Server started on port 8000");
// });

const http =require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type":"text/plain" });
  res.end("Server is running");
});

server.listen(3000,() => {console.log("Server running on http://localhost:3000");
});