var fs = require('fs'); 
var path = require('path'); 
   
fs.mkdir(path.join(__dirname, 'newdata'), (err) => { 
    if (err) { 
        return console.error(err); 
    } 
    console.log('Directory created successfully!'); 
}); 