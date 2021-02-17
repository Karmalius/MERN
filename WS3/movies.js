const request = require("request");
var http = require("http");
var data;

request("http://www.omdbapi.com/?i=tt3896198&apikey=3d3574c1", 
{json: true}, 
(err, res, body) => {
    if (err) {
        return console.log(err); 
    }
    data = body;
    console.log(body);
});

function parse(data) {
    var html = "<table>";
    html += "<tr><td>" + data.title + "</td></tr>";
    html += "</table>";
    console.log(html);
    return html;
}

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    response.write("<table>");
    response.write("<tr><td>" + data.title + "</td></tr>");
    response.write("</table>");

    response.end("Toimii");
  })
  .listen(8081);