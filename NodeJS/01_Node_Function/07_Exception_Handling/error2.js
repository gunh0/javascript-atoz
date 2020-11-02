const fs = require('fs');

setInterval(() => {
    fs.unlink('./sample.js', (err) => {
        if (err) {
            console.error(err);
        }
    });
}, 1000);