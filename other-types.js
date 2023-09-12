"use strict";
// Other TYPES
// 1. Any
// Could be any type of TS. 
let n = 33;
n = 'now not a num';
n = false;
//Disabled typechecking
// 2. Arrays
const someStrings = ['I', 'love', 'you'];
let newString = someStrings.join(' ');
console.log(newString);
const someNumbers = [4, 8, 15, 16, 23, 42];
someNumbers.filter(num => num >= 20); //no sence to init type here
// 3. Tuples (укр. Кортежі)
// Not single-type array
const userData = ['Sco', 33];
userData[0].toUpperCase(); // 'SCO'
userData[1]--; //32
// Should be very usefull in RxJS
// result of lots of functions will returned in such kind of array
// 4. Enum
var lifeCicle;
(function (lifeCicle) {
    lifeCicle[lifeCicle["kindergarten"] = 0] = "kindergarten";
    lifeCicle[lifeCicle["school"] = 1] = "school";
    lifeCicle[lifeCicle["juniorWebDev"] = 2] = "juniorWebDev";
    lifeCicle[lifeCicle["middleWebDev"] = 3] = "middleWebDev";
    lifeCicle[lifeCicle["seniorWebDev"] = 4] = "seniorWebDev";
})(lifeCicle || (lifeCicle = {}));
let currentLifeStage = lifeCicle.seniorWebDev;
console.log(currentLifeStage); //index 4
var daysOfWeek;
(function (daysOfWeek) {
    daysOfWeek[daysOfWeek["Sunday"] = 0] = "Sunday";
    daysOfWeek[daysOfWeek["Monday"] = 1] = "Monday";
    daysOfWeek[daysOfWeek["Tuesday"] = 2] = "Tuesday";
    daysOfWeek[daysOfWeek["Wednesday"] = 3] = "Wednesday";
    daysOfWeek[daysOfWeek["Thursday"] = 4] = "Thursday";
    daysOfWeek[daysOfWeek["Friday"] = 5] = "Friday";
    daysOfWeek[daysOfWeek["Saturday"] = 6] = "Saturday";
})(daysOfWeek || (daysOfWeek = {}));
let numberOfDay = daysOfWeek.Monday;
console.log('it is ' + (numberOfDay + 1) + ' day of the week');
// Very usefull for NgRx as a constants holder / storage
// 5. Any
// Could be any type - DO NOT USE IT !
