const os = require('os');

// platform
console.log(os.platform()); //darwin

//arch
console.log(os.arch()); // x64

// info
console.log(os.cpus()); //

// free memory
console.log(os.freemem()); // int free memory

// total memory
console.log(os.totalmem()); // int total memory

// root directory
console.log(os.homedir());

// how long the system work
console.log(os.uptime());
