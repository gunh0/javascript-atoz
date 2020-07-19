const fs = require('fs');

const readStream = fs.createReadStream('./sample_text.txt', {
    highWaterMark: 16 // 16B
});
const data = [];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data :', chunk, chunk.length);
});

readStream.on('enc', () => {
    console.log('end :', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
    console.log('error :', err);
});