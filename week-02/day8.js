// spread vs rest

const myUser = {
  name: "Justin",
  age: 23
};

const updatedMyUser = {
  ...myUser,
  age: 24
};

//console.log(updatedMyUser);

/*

Exercise 5

Given:
const user = {
  name: "Justin",
  age: 23,
  city: "Houston"
};

Create a new object where:

name stays the same
age becomes 24
city stays the same

Do not mutate user.

*/

const user = {
  name: "Justin",
  age: 23,
  city: "Houston"
};

const newUser = {
    ...user,
    age: 24
}

//console.log(user);
//console.log(newUser);

/*

Exercise 6

Write a function:

sumNumbers()
that accepts any number of numbers:
sumNumbers(1, 2, 3);
sumNumbers(10, 20, 30, 40);
and returns their sum.

You'll need the rest parameter.

*/

function sumNumbers(...numbers){
    let sum = 0;
    for(num of numbers){
        sum += num;
    }
    return sum;
}

console.log(sumNumbers(10, 20, 30, 40));

