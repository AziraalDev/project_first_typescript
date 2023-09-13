"use strict";
// Union Types
//let thcknss = 0.17;
//thcknss = '0.17x820'; ERROR
let thcknss = 0.17;
thcknss = '0.17 mm';
let kazakhCoils;
kazakhCoils = {
    batch: 13457,
    size: '0.17x820',
    steelGrade: 'TS275',
    coating: '2.0/2.0',
    scrolled: false,
    transit: true
};
// How to create new element:
const kazakhSheets = {
    batch: 13457,
    size: '0.17x820',
    steelGrade: 'TS275',
    coating: '2.0/2.0',
    scrolled: false,
    transit: true,
    // + attributes from new type that will create all neccessary /
    cuttingSize: 712,
    endUse: 'Stew can'
};
//destructuring 
const kazakhNewSheets = {
    ...kazakhCoils,
    cuttingSize: 820,
    endUse: 'Stew can'
};
console.log(kazakhNewSheets);
