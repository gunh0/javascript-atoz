const fs = require('fs');

fs.readdir('./folder', (err, dir) => {
    if (err) {
        throw err;
    }
    console.log("Check Directory.", dir);
    fs.unlink('./folder/newfile.js', (err) => {
        if (err) {
            throw err;
        }
        console.log("Delete File!");
        fs.rmdir('./folder', (err) => {
            if (err) {
                throw err;
            }
            console.log("Delete Folder!");
        });
    });
});