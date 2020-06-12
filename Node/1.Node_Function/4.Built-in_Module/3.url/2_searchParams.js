const { URL } = require('url');

const myURL = new URL('https://search.naver.com/p/crd/rd?m=1&px=446&py=221&sx=446&sy=221&p=U1Fgjsp0YihssPMRCqRssssssql-352964&q=%EC%BD%94%EB%A1%9C%EB%82%98&ie=utf8&rev=1&ssc=tab.nx.all&f=nexearch&w=nexearch&s=7rRQXaxuJmwgmq3qLugEeE7G&time=1599722367325&bt=15&a=vsd_bas*c.sitsub&r=1&i=a00000fa_8db4b4bfa59a59d219be1207&u=http%3A%2F%2Fncov.mohw.go.kr%2FbdBoardList_Real.do%3FbrdId%3D1%26brdGubun%3D11%26ncvContSeq%3D%26contSeq%3D%26board_id%3D%26gubun%3D&cr=1');
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