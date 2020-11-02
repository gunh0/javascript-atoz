var num = 0     // global
function myfunc() {
    num = 10    // local
}
myfunc();
console.log(num);   // 10
function myfunc2() {
    var num = 30    // local
    console.log(num);   // 30
}
myfunc2();
console.log(num);   // 10