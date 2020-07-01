const util = require('util');
const crypto = require('crypto');

// util.deprecate: 함수가 deprecated 처리되었음을 알려준다.
const dontUseMe = util.deprecate((x, y) => {
    console.log(x + y);
}, 'DEPRECATED : Used typically in reference to a computer language to mean a command or statement in the language that is going to be made invalid or obsolete in future versions.');
dontUseMe(1, 2);

// util.promisify: 콜백 패턴을 프로미스 패턴으로 바꿔준다.
// 바꿀 함수를 인자로 제공하면 되며, 이렇게 바꾸어두면 async/await 패턴까지 사용할 수 있다.
const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64).then((buf)=>{
    console.log(buf.toString('base64'));
}).catch((error)=>{
    console.error(error);
})