// 3.	Writing files is just as easy. It is done using the fs.writeFile –function. 
// Create a file “combiningfiles.js” and utilize writeFile –function to it, 
// so that it will write the text files of two files into a single new file. 
// See the syntax and how to use writeFile from Node.js API.


var fs = require("fs");

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


fs.writeFile('uusiFile.txt', "data" , (err) => {
  if (err) throw err;
    console.log("Koodi toimii");
  });


// When this works, try adding the string “I wrote this!” at the top and the bottom of the new textfile. 
// Hint: see API for “append” related file functions.
