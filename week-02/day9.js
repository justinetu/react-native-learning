/*

Day 9 — this

This is where I want you to slow down.

Look at:
const user = {
  name: "Justin",

  introduce() {
    console.log(`My name is ${this.name}`);
  }
};

user.introduce();

Before running it, answer:
What does this refer to?

-this refers to the object. It's used to access the objects properties. In this case name

Then test it.

*/

const user = {
  name: "Justin",

  introduce() {
    console.log(`My name is ${this.name}`);
  }
};

user.introduce();

/*

Exercise 7

Create an object:

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2025,

  describe() {
    // your code
  }
};

Make describe() print:

Toyota Camry - 2025

using this.

*/

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2025,

  describe() {
    console.log(`${this.brand} ${this.model} - ${this.year}`);
  }
};

car.describe();

/*

Challenge

Now investigate this:

const car = {
  brand: "Toyota",

  describe() {
    console.log(this.brand);
  }
};

const describeCar = car.describe;

describeCar();

Don't immediately search for the answer.

Predict what happens.

-What I believe happens is describeCar refers to the car.describe attribute in memory which is a function. describeCar() runs the function it's
poiting to in memory

-I was wrong. What actually happens is when we assign car.describe to the variable describeCar, we detach it's relationship to car. We are copying
a reference to the function itself. Since we're out of scope, node.js sees this as the global object and looks for global.brand which does not exist
therefore, we would see "undefined"

Then investigate why.

-

This is the kind of question that separates "I know JavaScript syntax" from "I understand JavaScript."

*/



