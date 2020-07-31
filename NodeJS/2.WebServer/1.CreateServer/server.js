const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('./server.html', (err, data) => {
        if (err) {
            throw err;
        }
        res.end(data);
    });
}).listen(8888, () => {
    console.log('Currently waiting on port 8888.');
});