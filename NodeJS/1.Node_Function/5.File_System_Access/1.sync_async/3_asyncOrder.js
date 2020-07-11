const fs = require('fs');

console.log('Start!');
fs.readFile('./readme.txt',(err, data)=>{
    if (err){
        throw err;
    }
    console.log('1st.',data.toString());
    fs.readFile('./readme.txt',(err,data)=>{
        if (err){
            throw err;
        }
        console.log('2nd.',data.toString());
        fs.readFile('./readme.txt',(err,data)=>{
            if (err){
                throw err;
            }
            console.log('3th.',data.toString());
        });
    });
});
console.log('End!');