const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep); // 경로의 구분자, Windows는 \, POSIX는 /

console.log('path.delimiter:', path.delimiter); // 환경 변수의 구분자
// process.env.PATH를 입력하면 여려 개의 경로가 이 구분자로 구분되어 있다.
// Windows는 세미콜론(;)이고, POSIX는 콜론(:)이다.

console.log('path.dirname():', path.dirname(string));
// 파일이 위치한 폴더 경로를 보여준다.

console.log('path.extname():', path.extname(string));
// 파일의 확장자를 보여준다.

console.log('path.basename():',path.basename(string));
console.log('path.basenema():',path.basename(string, path.extname(string)));
// 파일의 이름(확장자 포함)을 보여준다.
// 파일의 이름만 표시하고 싶다면 basename의 두 번째 인자로 파일의 확장자를 넣어주면 된다.
