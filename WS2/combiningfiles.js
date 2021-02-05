// Asynkronisesti luodaan tiedosto ja lisätään sinne toisista tiedostoista luetut tekstit?

var fs = require("fs");

fs.writeFile('uusiFile.txt', "Tässä uuden tiedoston sisältö");

//??
fs.readFile('example.txt', 
  function (err, data) {
    if (err) {
      console.log('Tapahtui virhe!')
  }
  var data = data.toString();
})

//??
fs.readFile('example2.txt', 
  function (err, secondData) {
    if (err) {
      console.log('Tapahtui virhe!')
  }
  var secondData = secondData.toString();
})

//??
fs.appendFile('uusiFile.txt' + data + secondData);