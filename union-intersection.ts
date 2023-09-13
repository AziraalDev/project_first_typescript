// Union Types

//let thcknss = 0.17;
//thcknss = '0.17x820'; ERROR
let thcknss: number | string = 0.17;
thcknss = '0.17 mm';

// Here we can image set of data that we receiving from server but for front-end we need a bit another types.
type serverData = {
    batch: number,
    size: string,
    steelGrade: string,
    coating: string,
    scrolled: boolean,
    transit: boolean
}

type strNumBatch = number | string;

type frontendData = {
    batch: strNumBatch, // type could be a type of internal property
    size: string,
    steelGrade: string,
    coating: string,
    scrolled: boolean,
    transit: boolean
}

let kazakhCoils: frontendData;
kazakhCoils = {
    batch: 13457,
    size: '0.17x820',
    steelGrade: 'TS275',
    coating: '2.0/2.0',
    scrolled: false,
    transit: true
}

// Intersection (пересечение) 

//creating new TYPE
type sheets = {
    cuttingSize: number,
    endUse: string
}
// creating Intersection with new TYPE
type sheetsFromCoil = frontendData & sheets;

// How to create new element:
const kazakhSheets: sheetsFromCoil = {
    batch: 13457,
    size: '0.17x820',
    steelGrade: 'TS275',
    coating: '2.0/2.0',
    scrolled: false,
    transit: true,
    // + attributes from new type that will create all neccessary /
    cuttingSize: 712,
    endUse: 'Stew can'
}

//destructuring 
const kazakhNewSheets: sheetsFromCoil = {
    ...kazakhCoils,
    cuttingSize: 820,
    endUse: 'Stew can'
}
console.log(kazakhNewSheets);
