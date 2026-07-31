// Learn destructuring in JavaScript

let person = {firstName: "Jane Doe", address: "402 William St", age: 45, religion: "Christian"};

let { firstName, age } = person;
let { address, religion, country = "USA" } = person;

console.log(firstName, age);
console.log(`${firstName}'s address is ${address} and she is a ${religion} woman from the ${country}`);

let puppie = {color: 'white', weight: '200kg', breed: 'bulldog'};

let { color, weight, breed } = puppie;

console.log(color, weight, breed);
