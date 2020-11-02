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

console.log('path.basename():', path.basename(string));
console.log('path.basenema():', path.basename(string, path.extname(string)));
// 파일의 이름(확장자 포함)을 보여준다.
// 파일의 이름만 표시하고 싶다면 basename의 두 번째 인자로 파일의 확장자를 넣어주면 된다.

console.log('path.parse()', path.parse(string));
// 파일 경로를 root, dir, base, ext, name으로 분리한다.

console.log('path.format():', path.format(path.parse(string)));
// path.parse()한 객체를 파일 경로로 합친다.

console.log('path.normalize():', path.normalize('C://users\\gunho'));
// '\'나 '/'를 실수로 여러 번 사용했거나 혼용했을 때 정상적인 경로로 반환해준다.

console.log('path.isAbsolute():', path.isAbsolute('C:\\'));
console.log('path.isAbsolute():', path.isAbsolute('./home'));
// 파일의 경로가 절대경로인지 상대경로인지 true나 false로 알려준다.

console.log('path.relative():', path.relative('C:\\users\\gunho', 'C:\\'));
// 경로를 두 개 넣으면 첫 번째 경로에서 두 번째 경로로 가는 방법을 알려준다.

console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/gunho'))
// 여러 인자를 넣으면 하나의 경로로 합쳐준다.
// 상대경로인 ..(부모 디렉터리)과 .(현 위치)도 알아서 처리해준다.

console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/gunho'));
// path.join()과 비슷하지만 차이가 있다.
// path.resolve는 /를 만나면 절대 경로로 인식해서 앞의 경로를 무시하고,
// path.join은 상대경로로 처리한다.