/*
Question 1
What is the difference between:
*/

let name = "Justin";

const myName = "Justin";

// The difference between these two variables is one can be modified and the other can't.
// Declaring a variable with const means that you don't intend on changing the variable

/*
Question 2
What will this output?
*/

let x = 10;

function test() {
  let x = 20;
  console.log(x);
}

//test();

//console.log(x);

// 20
// 10

/*
Question 3
What will this output?
*/

const user = {
  name: "Justin",
  age: 23
};

function changeAge(person) {
  person.age = 24;
}

changeAge(user);

console.log(user.age);

// age will be 24 because we can change the contents of an object but we can't assign the reference
// to a new object i.e user = { age: 24 } (this would be incorrect and throw an error)

/*
Question 4
What does this function return?
*/

function add(a, b) {
  return a + b;
}

const result = add(5, 10);

/*
    15
*/

/*
Question 5
What is the difference between an array and an object?
*/

// An array is a collection of data of any type. It can be indexed to find items
// An object has properties. it can have methods and properties

/*
Question 6
What does this do?
*/

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(number => number * 2);

// Creates an array numbers and another array that transforms each number in numbers by doubling them

// What is the value of doubled?

// doubled = [2, 4, 6, 8, 10]