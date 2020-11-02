// Buffer data is passed through gzip compression and written to a file.

const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./sample_text.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./gzip_write.txt');
readStream.pipe(zlibStream).pipe(writeStream);