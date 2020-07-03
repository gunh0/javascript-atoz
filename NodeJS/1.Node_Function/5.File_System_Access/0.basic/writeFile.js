const fs = require('fs');

fs.writeFile('./writeme.txt','sample text',(err)=>{
    if(err){
        throw err;
    }
    fs.readFile('./writeme.txt',(err, data)=>{
        if(err){
            throw err;
        }
        console.log(data.toString());
    });
});