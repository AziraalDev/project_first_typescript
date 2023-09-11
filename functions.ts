// 1. Generic functions
function newSum(num1: number, num2: number): number {
    return num1 + num2;
}

// 1.1. Through const with arrow foo
const newOtherSum = (num4: number, num3: number): number => num4 + num3;

// 2. Optional param :
function devFoo(n1: number, n2: number, n3?: number):number{
    if (n3) {
        return n1 + n3;
    } else {
        return n1 + n2;
    }
}

console.log(devFoo(1, 2)); // 3
console.log(devFoo(1, 2, 3)); // 4

// 3. Required param : 
function dooFoo(n1:number, n2:number, n3 = 9) {
    return n3 - n1 + n2; 
}

console.log(dooFoo(1, 2)); // 9 - 1 + 2 = 10
console.log(dooFoo(1, 2, 6)); // 6 - 1 + 2 = 7

//4. 