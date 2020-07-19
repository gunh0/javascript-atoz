const fs = require('fs');

const readStream = fs.createReadStream('./write_sample.txt');
const writeStream = fs.createWriteStream('./copy_write.txt');
readStream.pipe(writeStream);