const express = require("express");
const fs = require("fs");  
const app = express();


app.use(function (req, res, next) {
    const method = req.method;
    const url = req.url;
    const time = new Date();

    const log = `[${time}] ${method} ${url}\n`;

    
    fs.appendFile("logs.txt", log,  (err)=> {
        if (err) {
            console.log("Error writing log");
        }
    });

    next();
});


app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.send(String(a + b));
});

app.get("/mul", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.send(String(a * b));
});

app.get("/sub", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.send(String(a - b));
});

app.get("/div", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.send(String(a / b));
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});