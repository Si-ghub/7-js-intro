function testEven(n) {
    if (n % 2 === 0) {
    return true;
    }
    return false;
    }


console.log(testEven(0), true, '->',  0);
console.log(testEven(0.5), false, '->', 0.5);
console.log(testEven(1), false, '->', 1);
console.log(testEven(2), true, '->', 2);
console.log(testEven(-4), true, '->', 2);


