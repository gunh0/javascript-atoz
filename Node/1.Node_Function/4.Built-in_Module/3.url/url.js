const url = require('url');

const URL = url.URL;
const myURL = new URL('https://github.com/devgunho/JavaScript_Repository/tree/master/Node');
console.log('new URL():',myURL);
console.log('url.format():',url.format(myURL));
console.log('--------------------');
const parsedURL = url.parse('https://github.com/devgunho/JavaScript_Repository/tree/master/Node');
console.log('url.parse():', parsedURL);     // 주소를 분해한다.
console.log('url.format():',url.format(parsedURL));