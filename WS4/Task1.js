var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/adduser", function (req, res) {
    res.sendFile(__dirname + "/public/adduser.html");
});


app.post("/adduser", function (req, res) {
    var data = require("./public/joku.json");

    data.push({
        "Name": req.body.name,
        "Company": req.body.company,
        "Email": req.body.email,
        "Date": new Date()
    });

    var jsonStr = JSON.stringify(data);

    fs.writeFile("public/joku.json", jsonStr, (err) => {
        if (err) throw err;
        console.log("It is saved!");
    });

    res.send("Saved to the file");
});


app.get("/json", function (req, res) {
    var data = require("./public/joku.json");

    var results ="<table border='1'>";
    for (var i=0; i<data.length; i++){
        results +=
        "<tr>"+
        "<td>"+data[i].Name+"</td>"+
        "<td>"+data[i].Email+"</td>"+
        "<td>"+data[i].Company+"</td>"+
        "<td>"+data[i].Date+"</td>"+
        "</tr>";
    }
    res.send(results);
});

app.listen(8081, function () {
    console.log("Example app listening on port 8081");
});
