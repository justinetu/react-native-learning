/*

FUNCTIONS + OBJECTS

Exercise 1
Write a function:
calculateAverage()
that accepts an array of numbers.
Example:
calculateAverage([10, 20, 30])
should return:
20

*/

function calculateAverage(numbers){
    let total = 0;

    for(let num of numbers){
        total += num;
    }

    return total / numbers.length;
}

let avg = calculateAverage([10, 20, 30]);
//console.log(avg);

/*

Create an object representing a user.

It should contain:
name
age
email
isDeveloper
Then write a function:
printUser()
that prints the user's information.

*/

let user = {name: "Henry", age: 37, email: "henrylawrence@hotmail.com", isDeveloper: true}

let printUser = (obj) => {
    const { name, age, email, isDeveloper } = obj;

    console.log(name);
    console.log(age);
    console.log(email);
    console.log(isDeveloper);
}

// printUser(user);

/*

Exercise 3

Create an array containing 5 expenses.
Each expense should look something like:

{
  description: "Groceries",
  amount: 75,
  category: "Food"
}
Don't worry about map, filter, or reduce yet.
We're just practicing data structures.

*/

export let expenses = [
    {
        description: "Groceries",
        amount: 75,
        category: "food"
    },
    {
        description: "Netflix",
        amount: 25,
        category: "Entertainment"
    },
    {
        description: "Quiktrip",
        amount: 63,
        category: "Gas"
    },
    {
        description: "Burberry purse",
        amount: 350,
        category: "Clothing"
    },
    {
        description: "Engine fluid",
        amount: 120,
        category: "Automobile"
    }
];

let expenseCategories = expenses.map(expense => expense.category);

console.log(expenseCategories);