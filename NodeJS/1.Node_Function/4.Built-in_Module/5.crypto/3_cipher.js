const crypto = require('crypto');

console.log('Available Algorithm List: ', crypto.getCiphers())

const cipher = crypto.createCipher('aes-256-cbc', 'KEY');
let result = cipher.update('pre-encryption sentences', 'utf8', 'base64');
result += cipher.final('base64');
console.log('Encryption: ', result);

const decipher = crypto.createDecipher('aes-256-cbc', 'KEY');
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('Decryption: ', result2);