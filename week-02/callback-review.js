/*

🧠 Review Question 2 — Callbacks

Now let's test your callback knowledge.
Consider:

function processUser(user, callback) {
    console.log(`Processing ${user.name}...`);

    callback(user);
}

function displayUser(user) {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
}

const user = {
    name: "Justin",
    age: 23
};

processUser(user, displayUser);

Questions

1. What gets printed?

-Processing Justin...
-Name: Justin
-Age: 23

2. What is displayUser in this code?

processUser(user, displayUser);

Is it:

A value?
A function?
A function call?
A callback?

Explain.

-displayUser is an argument value in this code

3. When does displayUser() actually execute?

-displayUser() executes within the execution of it's higher order function
processUser when it gets called in tis line -> callback(user);

4. Why do we write:

processUser(user, displayUser);

instead of:

processUser(user, displayUser());

This distinction is very important

-We write it this way because it allows us to call the function later, it's 
passed in as a value that's a reference to the function. displayUser calls
the function immediately and we don't want that

*/

/*

🔥 Callback Challenge — Two Types

Now let's combine the two callback patterns.

Consider:

function calculateTotal(numbers, callback) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    callback(total);
}

function displayTotal(total) {
    console.log(`Total: $${total}`);
}

calculateTotal([10, 20, 30], displayTotal);

Answer these:

1. What does calculateTotal() receive as its two arguments?

-An array with values 10, 20, and 30. It also receives a callback called
displayTotal.

2. What does callback refer to inside calculateTotal()?

-It refers to displayTotal

3. What happens when JavaScript reaches:

callback(total);

-displayTotal is executed line by line immediately because it's a synchronous callback

4. What is printed?

-Total: $60

*/

/*

🔥🔥 Final Callback Challenge — Your Turn

This one is closer to what you'll eventually see in React Native.

Write a function:

processExpenses(expenses, callback)

It should:

Receive an array of expenses.

Loop through the expenses.

Pass each expense to the callback.

Let the callback determine what happens to each expense.

Given:

const expenses = [
    {
        description: "Groceries",
        amount: 75
    },
    {
        description: "Gas",
        amount: 40
    },
    {
        description: "Netflix",
        amount: 15
    }
];

You should be able to do:

processExpenses(expenses, function(expense) {
    console.log(expense.description);
});

and get:

Groceries
Gas
Netflix

But you should also be able to do:

processExpenses(expenses, function(expense) {
    console.log(`$${expense.amount}`);
});

and get:

$75
$40
$15

Your challenge
Write processExpenses() yourself.
Don't use map(), filter(), or reduce() yet.
Use a normal for...of loop.

*/

const expenses = [
    {
        description: "Groceries",
        amount: 75
    },
    {
        description: "Gas",
        amount: 40
    },
    {
        description: "Netflix",
        amount: 15
    }
];

function processExpenses(expenses, callback){
    for(let expense of expenses) {
        callback(expense);
    }
}

processExpenses(expenses, function(expense){
    console.log(expense.description);
});

processExpenses(expenses, function(expense){
    console.log(expense.amount);
});

/*

⭐ Bonus: Named vs Anonymous Callback

Once you've solved that, try both:

Named callback

function printExpense(expense) {
    console.log(expense.description);
}

processExpenses(expenses, printExpense);

Anonymous callback

processExpenses(expenses, function(expense) {
    console.log(expense.description);
});

Then answer:

What is the fundamental difference between these two approaches?

-I beleive that the fundamental difference between these approaches is that
a named callback is stored in memory while an anonymous callback isn't


*/

function printExpense(expense) {
    console.log(expense.description);
}

processExpenses(expenses, printExpense);

processExpenses(expenses, function(expense) {
    console.log(expense.description);
});

/*

I want you to connect callbacks + your Expense Analyzer.

Don't use map, filter, or reduce yet.

Given:

const expenses = [
    { description: "Groceries", amount: 75 },
    { description: "Gas", amount: 40 },
    { description: "Netflix", amount: 15 },
    { description: "Rent", amount: 1200 }
];

Write:

processExpenses(expenses, callback)

Then make three different callbacks:

Callback 1

Print:

Groceries costs $75
Gas costs $40
Netflix costs $15
Rent costs $1200

Callback 2

Print only the amount:

75
40
15
1200

Callback 3

Print:

EXPENSE: Groceries
CATEGORY: ...

You'll need to add a category property to each expense.

*/

const myExpenses = [
    { description: "Groceries", amount: 75, category: "Food" },
    { description: "Gas", amount: 40, category: "Vehicle" },
    { description: "Netflix", amount: 15, category: "Entertainment" },
    { description: "Rent", amount: 1200, category: "Housing" }
];

function processExpenses(expenses, callback){
    for(let expense of expenses){
        callback(expense);
    }
}

function printExpenses(expense){
    console.log(`${expense.description} costs $${expense.amount}`);
}

function printAmount(expense){
    console.log(expense.amount);
}

function formatExpense(expense){
    console.log(`EXPENSE: ${expense.description}`);
    console.log(`CATEGORY: ${expense.category}`);
}

processExpenses(myExpenses, printExpenses);
processExpenses(myExpenses, printAmount);
processExpenses(myExpenses, formatExpense);


