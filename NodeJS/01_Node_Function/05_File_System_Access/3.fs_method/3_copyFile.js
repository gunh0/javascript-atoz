const fs = require('fs')

fs.copyFile('readme.txt', 'writeme.txt', (error) => {
    if (error) {
        return console.error(error);
    }
    console.log("Copy!");
});