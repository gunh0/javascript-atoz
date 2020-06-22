const { URL } = require('url');

const myURL = new URL('http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun=');
console.log('searchParams: ', myURL.searchParams);
console.log('searchParams.getAll(): ', myURL.searchParams.getAll('category'));
console.log('searchParams.get(): ', myURL.searchParams.get('limit'));
console.log('searchParams.has(): ', myURL.searchParams.has('page'));

console.log('searchParams.keys(): ', myURL.searchParams.keys());
console.log('searchParams.values(): ', myURL.searchParams.values());

myURL.searchParams.append('filter','es3');  // 해당 키를 추가한다. 같은 키의 값이 있다면 유지하고 하나 더 추가한다.  
myURL.searchParams.append('filter','es5');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.append('filter','es6');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString():', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();