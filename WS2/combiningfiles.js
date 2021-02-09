// 3.	Writing files is just as easy. It is done using the fs.writeFile –function. 
// Create a file “combiningfiles.js” and utilize writeFile –function to it, 
// so that it will write the text files of two files into a single new file. 
// See the syntax and how to use writeFile from Node.js API.


let fs = require("fs");

let data = fs.readFileSync('example.txt');
let secondData = fs.readFileSync('example2.txt');
let newData = data + "\n" + secondData;


fs.writeFileSync('uusiFile.txt', newData);


// When this works, try adding the string “I wrote this!” at the top and the bottom of the new textfile. 
// Hint: see API for “append” related file functions.

fs.appendFileSync("uusiFile.txt","\nI wrote this");

// Miten saa tiedoston alkuun tekstiä??