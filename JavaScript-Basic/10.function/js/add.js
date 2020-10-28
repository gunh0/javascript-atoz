var num1 = parseInt(prompt("First Number : "));
var num2 = parseInt(prompt("Seconde Number : "));
var result = addNumber(num1, num2);
alert("The sum of the two numbers is " + result + ".");

function addNumber(a, b) {
    var sum = a + b;
    return sum;
}
