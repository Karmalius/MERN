// Asynkronisesti luodaan tiedosto ja lisätään sinne toisista tiedostoista luetut tekstit

var fs = require("fs");

// Luodaan uusi tiedosto
fs.writeFile('uusiFile.txt', "Tässä uuden tiedoston sisältö");

// Luetaan data kahdesta muusta tiedostosta ja tallennetaan muuttujiin??
fs.readFile('example.txt', 
  function (err, data) {
    if (err) {
      console.log('Tapahtui virhe!')
  }
  var data = data.toString();
})

fs.readFile('example2.txt', 
  function (err, secondData) {
    if (err) {
      console.log('Tapahtui virhe!')
  }
  var secondData = secondData.toString();
})

// Lisätään toisten tiedostojen sisältö uuteen tiedostoon ??
fs.appendFile('uusiFile.txt' + data + secondData);