// Other TYPES

// 1. Any
// Could be any type of TS. 
let n: any = 33;
n = 'now not a num';
n = false;
//Disabled typechecking

// 2. Arrays
const someStrings: string[] = ['I', 'love', 'you'];
let newString = someStrings.join(' ');
console.log(newString);

const someNumbers: number[] = [4, 8, 15, 16, 23, 42];
someNumbers.filter(num => num >= 20); //no sence to init type here

// 3. Tuples (укр. Кортежі)
// Not single-type array
const userData: [string, number] = ['Sco', 33];
userData[0].toUpperCase(); // 'SCO'
userData[1]-- //32
// Should be very usefull in RxJS
// result of lots of functions will returned in such kind of array

// 4. Enum
enum lifeCicle {
    kindergarten,
    school,
    juniorWebDev,
    middleWebDev,
    seniorWebDev
}

let currentLifeStage: lifeCicle = lifeCicle.seniorWebDev;
console.log(currentLifeStage); //index 4

enum daysOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}
  
let numberOfDay: daysOfWeek = daysOfWeek.Monday;
console.log('it is ' + (numberOfDay + 1) + ' day of the week');

// Very usefull for NgRx as a constants holder / storage

// 5. Any
// Could be any type - DO NOT USE IT !