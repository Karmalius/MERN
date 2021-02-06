// 1.	In the teachers presentation, you were shown how to read a text file and display the contents on console. 
//Try this on your own, create a program “readingfiles.js” that will read one text file display the contents contents on the console. 
// 2.	Modify the program so, that it will read two textfiles, and output both on the console.

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