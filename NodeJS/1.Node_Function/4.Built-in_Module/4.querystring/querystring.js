const url = require('url');
const querystring = require('querystring');

const parseUrl = url.parse('http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun=');
const query = querystring.parse(parseUrl.query);
console.log('querystring.parse(): ', query);
console.log('querystirng.stringify(): ', querystring.stringify(query));

// querystring.parse(쿼리): url의 query 부분을 자바스크립트 객체로 분해
// querystring.stringify(객체): 분해된 query 객체를 문자열로 다시 조립 