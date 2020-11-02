const fs = require('fs');

const writeStream = fs.createWriteStream('./write_sample.txt');
writeStream.on('finish', () => {
    console.log('Finish, write_sample.txt');
});

writeStream.write('WRITE AGAIN.\n');
writeStream.write('FINAL WRITE.\n');
writeStream.end();