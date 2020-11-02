// const https = require('https');
// const fs = require('fs');

// https.createSecureServer({
//         cert: fs.readFileSync('path'),
//         key: fs.readFileSync('path'),
//         ca: [
//             fs.readFileSync('path'),
//             fs.readFileSync('path'),
//         ],
//     }, (req, res) => {
//         res.writeHead(200, {
//             'Content-Type': 'text/html; charset=utf-8'
//         });
//         res.write('<h1>Hello Node!</h1>');
//         res.end('<p>Hello Server!</p>');
//     })
//     .listen(443, () => {
//         console.log('Currently waiting on port 443.');
//     });