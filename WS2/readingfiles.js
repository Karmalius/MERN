// Synkronisesti:
//var data = fs.readFileSync("example.txt");
//var secondData = fs.readFileSync("example2.txt");

//console.log("Luettu tiedostoista:");
//console.log(data.toString() + " ja " + secondData.toString());

// Ja asynkronisesti:
var fs = require('fs')

var data = fs.readFile('example.txt', 
  function (err, data) {
    if (err) {
      console.log('Tapahtui virhe!')
  }
  console.log('Luettu tiedosto:')
  console.log(data.toString())
});

var secondData = fs.readFile('example2.txt', 
  function (err, secondData) {
    if (err) {
      console.log('Tapahtui virhe!')
  }
  console.log(secondData.toString())
});