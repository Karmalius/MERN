var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
    
    //if (request.url === "/") {
        //response.writeHead(200, { "Content-Type": "text/plain" });
        //response.write("Nothing here to see");
        response.writeHead(200, { "Content-Type": "text/html" });
    //if (request.url === "/frontpage") {
        
        fs.readFile('./index.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                respone.write('Whoops! File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
    //} else if (request.url === "/plaintext") {
        //response.writeHead(200, { "Content-Type": "text/plain" });
        //response.write("Here comes plain text");
    //} else if (request.url === "/json") {
        //response.writeHead(200, { "Content-Type": "text/plain" });
        //response.write("Here comes some json");
    //}


    response.end();
  })
  .listen(3000);