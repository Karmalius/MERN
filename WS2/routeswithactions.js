// 1.	Last week you learned how to create a simple web server. Create a new app “routeswithactions.js” 
// containing a simple web server outputting “hello world”.

// 2. When this works, modify the app a bit. Your app should respond to different routes .
// by serving different content to the browser. This can be done by studying the request.url –parameter (remember last weeks workshop).

// 3.The route / should output the text “Nothing here to see” to the browser.
// The route /frontpage should read a local HTML file frontpage.html and output the contents to the browser.
// The route /contact should read a local HTML contact.html file and output the contents as HTML to browser.
// The route /plaintext should read a local TXT file and output the contents as TXT to browser. 
// The route /json should read a local JSON file and output the contents as JSON to browser.

//Notice that your app should send different HTTP header with ”Content-type” for all the different responses. How would achieve this?

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