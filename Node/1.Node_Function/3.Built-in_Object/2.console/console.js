const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value'
        }
    }
};

console.time('Total Time');
console.log('print console.log()');
console.log(string, number, boolean);
console.error('error msg');

console.dir(obj, {
    colors: false,
    depth: 2
});
console.dir(obj, {
    colors: true,
    depth: 1
});

console.time('time check');
for (let i = 0; i < 100000; i++) {
    continue;
}
console.timeEnd('time check');

function b(){
    console.trace('error tracing');
}

function a(){
    b();
}

a();

console.timeEnd('Total Time')