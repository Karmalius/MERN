var fs = require("fs");

fs.unlink('uusiFile.txt', (err) => {
    if (err) throw err;
    console.log('uusiFile.txt was deleted');
  });