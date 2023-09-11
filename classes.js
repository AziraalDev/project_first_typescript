"use strict";
// 0. Pascal convention of naming - each word Capitalized
class Tinplate {
    // 1. Properties & Constructor
    butch;
    size;
    spec;
    // 1.1. Properties could be even with some default value:
    coating = '2.0/2.0';
    // 2.0. Accesses 
    price;
    origin;
    // 1.2. Set constructor
    constructor(butch, size, spec, price, origin) {
        this.butch = butch;
        this.size = size;
        this.spec = spec;
        this.price = price;
        this.origin = origin;
    }
    // 1.4. Adding method to class
    getPrintedName() {
        // 1.4.1. don't forget to use ' ` ' not usual ' ' ' working with template literals
        return `${this.butch} ${this.size} ${this.spec} ${this.coating} ${this.origin}`;
    }
    // 2.1.1. Method for privat things:
    getInitialPrice() {
        return this.price;
    }
}
class TinplateSheets extends Tinplate {
    getProtectedOrigin() {
        return this.origin;
    }
}
// 1.3. Instance of class.
let liegeTinplate = new Tinplate(45251, '0.16x925', 'TH620 Stone', 100.92, 'Belgium');
console.log(liegeTinplate);
// 1.5. Class method call 
console.log(liegeTinplate.getPrintedName()); // 45251 0.16x925 TH620 Stone 2.0/2.0;
// 2.1. Private
//console.log(liegeTinplate.price) //Error because of privacy
console.log(liegeTinplate.getInitialPrice());
// 2.2. Protected. Instance of subclass.
let belgiumSteel = new TinplateSheets(1125, '0.16x925x1042', 'TH620 Stone', 159.32, 'Belgium');
//console.log(liegeTinplate.origin) //Error because of accessibility
console.log(belgiumSteel.getProtectedOrigin());
// 3.0 Static, Get, Set
