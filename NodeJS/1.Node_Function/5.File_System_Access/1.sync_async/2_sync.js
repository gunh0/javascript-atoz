const fs = require('fs');

console.log('Start!');
let data = fs.readFileSync('./readme.txt');
console.log('1st.',data.toString());
data = fs.readFileSync('./readme.txt');
console.log('2nd.',data.toString());
data = fs.readFileSync('./readme.txt');
console.log('3th.',data.toString());
console.log('End!');