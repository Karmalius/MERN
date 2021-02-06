// 7.	Create program “directories.js” Try mkdir and rmdir; when writing the files in step 3 
// first create a new folder called “newdata” and then write the file there.

var fs = require('fs'); 
var path = require('path'); 
   
fs.mkdir(path.join(__dirname, 'newdata'), (err) => { 
    if (err) { 
        return console.error(err); 
    } 
    console.log('Directory created successfully!'); 
}); 

 
getCurrentFilenames(); 
  
fs.rmdir("newdata", () => { 
  console.log("Folder Deleted!"); 
  

  getCurrentFilenames(); 
}); 
  
function getCurrentFilenames() { 
  console.log("\nCurrent filenames:"); 
  fs.readdirSync(__dirname).forEach(file => { 
    console.log(file); 
  }); 
  console.log("\n"); 
} 