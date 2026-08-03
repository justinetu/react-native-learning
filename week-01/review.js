// This is review of destructuring, spread, and rest

let fruits = ['apple', 'banana', 'pineapple', 'squash', 'kiwi'];

let [f1, f2, ...rest] = fruits;

// console.log(f1, f2, rest);

let house = { price: '$250,000', bedrooms: 4, squarefeet: 9000 };

let { squarefeet, price, bedrooms, buildYear = 1999 } = house;

console.log(squarefeet, buildYear);

let { ...myHouse } = house;

console.log(myHouse);