var http = require("http");
var fs = require('fs')

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    if (request.url === "/") {
            response.write("Nothing here to see");
            response.end();
    }
    else if (request.url === "/frontpage") {
        fs.readFile('index.html', function (err, data) {
            response.writeHead(200, { "Content-Type": "text/html" });

            response.write(data);
            response.end();
        });
    }
    else if (request.url === "/contact") {
        fs.readFile("contact.html", function (err, data) {
            response.writeHead(200, { "Content-Type": "text/html" });

            response.write(data);
            response.end();
        });
    } else if (request.url === "/plaintext") {
        fs.readFile('example.txt', function (err, data) {
            response.writeHead(200, { "Content-Type": "text/plain" });

            response.write(data);
            response.end();
        });
    } else if (request.url === "/json") {
        var data = require("./sampledata.json");
        var output = JSON.stringify(data);
        response.write(output);
        response.end();
    }
  })
  .listen(3000);