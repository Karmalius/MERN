// 9. Then write a command line program which reads the “sampledata.json” data and does the following things: 
// a) iterates through the data and displays name, age, company and address data on the console.

var data = require("./sampledata.json");

for (i=0; i<data.length; i++) {
 console.log("Name: ", data[i].name, "\nAge: ",data[i].age, "\nCompany: ", data[i].company, "\nAddress: ", data[i].address);
}

// b) same as on task a , but surround the data with HTML-tags. 

//for (i=0; i<data.length; i++) {
  //  console.log("<p>Name: ", data[i].name, "\nAge: ",data[i].age, "\nCompany: ", data[i].company, "\nAddress: ", data[i].address, "</p>");
   //}

// c) Create a web server and output the data as HTML to the browser.

//var http = require("http");

//http
 // .createServer(function(request, response) {
   // response.writeHead(200, { "Content-Type": "text/html" });
    //response.write(data);
    //response.end();
  //})
  //.listen(8081);