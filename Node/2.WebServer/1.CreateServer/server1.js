const http = require('http');

http.createServer((req, res) => {
    // 여기에 어떻게 응답할지를 적는다.

    /* res 객체에는 res.write와 res.end 메서드가 있다.
    res.write의 첫 번째 인자는 클라이언트로 보낼 데이터이다.
    res.end는 응답을 종료하는 메서드이다.
    만약 인자가 있다면 그 데이터도 클라이언트로 보내고 응답을 종료한다.
    */
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(8080, ()=>{
    console.log('8080번 포트에서 서버 대기 중입니다!');
});