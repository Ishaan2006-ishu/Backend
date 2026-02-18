const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {
    if (req.method === "GET") {

        fs.readFile("notes.json", "utf8", (err, data) => {
            if (err) {
              
                res.end("Error reading file");
                return;
            }

           
            res.end(data);
        });
    }

    
    else if (req.method === "POST") {

        let body = "";

        
        req.on("data", chunk => {
            body += chunk.toString();
        });

      
        req.on("end", () => {

            const newNote = JSON.parse(body);

       
            fs.readFile("notes.json", "utf8", (err, data) => {

                let notes = [];

                if (data) {
                    notes = JSON.parse(data);
                }

              
                notes.push(newNote);

                
                fs.writeFile("notes.json", JSON.stringify(notes), (err) => {

                    if (err) {
                        
                        res.end("Error");
                        return;
                    }

                    
                    res.end("Note added successfully!");
                });
            });
        });
    }

    else {
       
        res.end("Route not found");
    }

});

server.listen(8000, () => {
    console.log("Server running");
});
