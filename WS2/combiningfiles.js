// Asynkronisesti luodaan tiedosto ja lisätään sinne toisista tiedostoista luetut tekstit

var fs = require("fs");

// Luetaan data kahdesta muusta tiedostosta ja tallennetaan muuttujiin
// Miten saa tallennettua oikeaan muotoon?
var data = fs.readFile('example.txt', 
  function (err, data) {
    if (err) {
      console.log('Tapahtui virhe!')
  }
  console.log(data.toString());
})

var secondData = fs.readFile('example2.txt', 
  function (err, secondData) {
    if (err) {
      console.log('Tapahtui virhe!')
  }
  console.log(secondData.toString());
})

// Lisätään toisten tiedostojen sisältö uuteen tiedostoon (joka luodaan samalla).
// Miten saadaan luettu data lisättyä?

fs.writeFile('uusiFile.txt', "data" , (err) => {
  if (err) throw err;
    console.log("Koodi toimii");
  });

// Lisätään uutta sisältöä tiedostoon
