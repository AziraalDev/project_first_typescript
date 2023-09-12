//// Primitives ////

// 1. Number
let weight: number = 100; // integer
let height: number = 1.75; // floating-point

// 2. String
let wifeName: string = 'Viktoria';
let familyStatus: string = "Very happy family";
const aboutOurFamily: string = `Me and my wife ${wifeName} are ${familyStatus}`;
console.log(aboutOurFamily);

// 3. Boolean
let hasKids: boolean = true;
let ownHouse: boolean = false;

// 4. Null / Undefined
let someNull: null = null;
let someUndefined: undefined = undefined;

// 5. Symbol (working from ES2015 (ES6))
const gUISymbol1 = Symbol('details');
const gUISymbol2 = Symbol('details');

// 6. BigInt (working from ES2020)
let bigIntValue: bigint = 1234567890123456789012345678901234567890n;

// 7. VOID
function isVoid() {
    return; // In TypeScript will return VOID. In JS - Undefined.
}

// Some manipulations with types :
// 1.
let lName;
lName = 'Eugene';
let newName = lName.toUpperCase();
console.log(newName);

// 2. 
let age: number;
age = 25;
let anotherAge = '25';
let newAge = parseInt(anotherAge);
console.log(newAge);

// 3. Using generics
let numList : Array<number>;
numList = [1, 2, 3, 4, 5];

let relustNum = numList.filter((num) => num > 2);
console.log(relustNum);