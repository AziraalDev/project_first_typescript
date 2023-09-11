let lName;
lName = 'Alekseev';
let newName = lName.toUpperCase();
console.log(newName);

let age: number;
age = 25;
let anotherAge = '25';

let newAge = parseInt(anotherAge);
console.log(newAge);

let numList : Array<number>;
numList = [1, 2, 3, 4, 5];

let relustNum = numList.filter((num) => num > 2);
console.log(relustNum);