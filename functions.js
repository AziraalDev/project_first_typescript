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
    return n1 + n2 + n3.reduce((a, b) => a + b, 0); // with 0 as an initial value;
}
let someNumArray = [2, 6, 4, 2, 1];
console.log(doDoFoo(1, 2, ...someNumArray));
// 5. Generics functions
function concatAll(items) {
    return new Array().concat(items);
}
// this will be a shallow copy of the original arrays, ensuring we get the exact return type
let concatNumber = concatAll([1, 5, 7, 9, 3, 4]);
let concatString = concatAll(['V', 'i', 'k', 't', 'o', 'r', 'i', 'a']);
console.log(concatNumber);
console.log(concatString);
