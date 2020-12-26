const url = require('url');
const querystring = require('querystring');

const parseUrl = url.parse('http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun=');
const query = querystring.parse(parseUrl.query);
console.log('querystring.parse(): ', query);
console.log('querystirng.stringify(): ', querystring.stringify(query));
