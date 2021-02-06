// 6.	Create program “readingdir.js” Try to use readdir() function. Can you output a directory contents to the screen?

var fs = require("fs");

fs.readdir(__dirname,  
    { withFileTypes: true }, 
    (err, files) => { 
    console.log("\nCurrent directory files:"); 
    if (err) 
      console.log(err); 
    else { 
      files.forEach(file => { 
        console.log(file); 
      }) 
    } 
  }) 