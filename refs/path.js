const path = require('path');

// __filename - absolute path

console.log(path.basename(__filename)); // file name
console.log(path.dirname(__filename));
console.log(path.extname(__filename)); // ext

console.log(path.parse(__filename)); // object with (root, dir, base, ext, name)

console.log(path.join(__dirname, 'test', 'first.js')); // gen path
console.log(path.resolve(__dirname, 'test', 'first.js')); // gen path


