// 5.	Finally create a program “deletingfiles.js” which will delete the textfile you created on task 4. 
// Use the unlink –function. See how to use it from Node.js API.

var fs = require("fs");

fs.unlink('uusiFile.txt', (err) => {
    if (err) throw err;
    console.log('uusiFile.txt was deleted');
  });