const fs = require('fs');

fs.access('./folder', fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.log('No folder.');
            fs.mkdir('./folder', (err) => {
                if (err) {
                    throw err;
                }
                console.log('Folder Creat Success');
                fs.open('./folder/file.js', 'w', (err, fd) => {
                    if (err) {
                        throw err;
                    }
                    console.log('Make Empty File', fd);
                    fs.rename('./folder/file.js', './folder/newfile.js', (err) => {
                        if (err) {
                            throw err;
                        }
                        console.log('Change File Name.');
                    });
                });
            });
        } else {
            throw err;
        }
    } else {
        console.log('Folder Already Exists.');
    }
});