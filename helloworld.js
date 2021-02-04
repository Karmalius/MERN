var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    if (request.url === "/helloworld") {
        response.write("Hello World");
    } else if (request.url === "/anotherworld") {
        response.write("Another World");
    }


    response.end(". Toimii!");
  })
  .listen(8081);