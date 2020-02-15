const { odd, even } = require('./var');

function checkOddEven(num) {
    if (num % 2) {
        return odd;
    }
    return even;
};

module.exports = checkOddEven;