"use strict";
// 1. Generic functions
function newSum(num1, num2) {
    return num1 + num2;
}
// 1.1. Through const with arrow foo
const newOtherSum = (num4, num3) => num4 + num3;
// 2. Optional param :
function devFoo(n1, n2, n3) {
    if (n3) {
        return n1 + n3;
    }
    else {
        return n1 + n2;
    }
}
console.log(devFoo(1, 2)); // 3
console.log(devFoo(1, 2, 3)); // 4
// 3. Required param : 
function dooFoo(n1, n2, n3 = 9) {
    return n3 - n1 + n2;
}
console.log(dooFoo(1, 2)); // 9 - 1 + 2 = 10
console.log(dooFoo(1, 2, 6)); // 6 - 1 + 2 = 7
//4. Rest param :
function doDoFoo(n1, n2, ...n3) {
    return n1 + n2 + n3.reduce((a, b) => a + b, 0);
}
let someNumArray = [2, 6, 4, 2, 1];
console.log(doDoFoo(1, 2, ...someNumArray));
