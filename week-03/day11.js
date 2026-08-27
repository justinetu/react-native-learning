/*

1. What is forEach()?

Suppose we have:

const expenses = [
    { description: "Groceries", amount: 75 },
    { description: "Gas", amount: 40 },
    { description: "Netflix", amount: 15 }
];

Without forEach():

for (let expense of expenses) {
    console.log(expense.description);
}

With forEach():

expenses.forEach(function(expense) {
    console.log(expense.description);
});

The important thing to recognize is:

function(expense) {
    console.log(expense.description);
}

is a callback.

You're giving forEach() a function and saying:

"Run this function once for every element in the array."

*/

/*

3. Your First Exercise

Given:

const expenses = [
    { description: "Groceries", amount: 75 },
    { description: "Gas", amount: 40 },
    { description: "Netflix", amount: 15 },
    { description: "Rent", amount: 1200 }
];

Use forEach() to print:

Groceries
Gas
Netflix
Rent

Rules

Don't use:

for
for...of
while

You must use:
forEach()

*/

const expenses = [
    { description: "Groceries", amount: 75 },
    { description: "Gas", amount: 40 },
    { description: "Netflix", amount: 15 },
    { description: "Rent", amount: 1200 }
];

expenses.forEach(function(expense){
    //console.log(expense.description);
})

/*

4. Exercise 2 — Print Complete Expenses

Use forEach() to produce:

Groceries costs $75
Gas costs $40
Netflix costs $15
Rent costs $1200

You've already written a callback that does this, so this should be relatively easy.

*/

expenses.forEach(function(expense){
    //console.log(`${expense.description} costs $${expense.amount}`);
});

/*

5. Exercise 3 — Add 10%

Now let's make you think.

Given:

const expenses = [
    { description: "Groceries", amount: 75 },
    { description: "Gas", amount: 40 },
    { description: "Netflix", amount: 15 }
];

Use forEach() to print the amount after adding 10%.

Expected:

Groceries: $82.50
Gas: $44
Netflix: $16.50

*/

const householdExpenses = [
    { description: "Groceries", amount: 75 },
    { description: "Gas", amount: 40 },
    { description: "Netflix", amount: 15 }
];

householdExpenses.forEach(function(expense){
    let afterTax = expense.amount + (expense.amount * 0.10);
    
    console.log(`${expense.description}: $${afterTax.toFixed(2)}`);
})

/*

6. Exercise 4 — Accumulator

Now we're going to do something very important.

Given:

const expenses = [
    { description: "Groceries", amount: 75 },
    { description: "Gas", amount: 40 },
    { description: "Netflix", amount: 15 },
    { description: "Rent", amount: 1200 }
];

Create:

let total = 0;
Use forEach() to calculate the total.

At the end:

console.log(total);

should produce:

1330

Think about the callback as repeatedly modifying total.

Conceptually:

total = 0

Groceries → 0 + 75 = 75
Gas       → 75 + 40 = 115
Netflix   → 115 + 15 = 130
Rent      → 130 + 1200 = 1330

This exercise is important because tomorrow we'll replace this pattern with reduce().

*/

const airbnbExpenses = [
    { description: "Groceries", amount: 75 },
    { description: "Gas", amount: 40 },
    { description: "Netflix", amount: 15 },
    { description: "Rent", amount: 1200 }
];

let total = 0;
airbnbExpenses.forEach(function(expense){
    total += expense.amount;
})

//console.log(total);

/*

7. Exercise 5 — Callback Parameters

Here's something important.

forEach() actually provides more than just the current element.

You can write:

expenses.forEach(function(expense, index) {
    console.log(index, expense.description);
});

The callback receives:

expense → current element
index   → current position

So you'd get:

0 Groceries
1 Gas
2 Netflix
3 Rent

Your challenge

Use forEach() to produce:

Expense #1: Groceries
Expense #2: Gas
Expense #3: Netflix
Expense #4: Rent

Notice that the array index starts at 0, but we're displaying it starting at 1.

*/

airbnbExpenses.forEach(function(expense, index) {
    //console.log(index, expense.description);
});

// chalenge

airbnbExpenses.forEach(function(expense, index){
    console.log(`Expense #${++index}: ${expense.description}`)
})

/*

🔥 Exercise 6 — Arrow Functions

Everything we've done so far can also be written with an arrow function.
Instead of:

expenses.forEach(function(expense) {
    console.log(expense.description);
});

we can write:

expenses.forEach((expense) => {
    console.log(expense.description);
});

Or even:

expenses.forEach(expense => {
    console.log(expense.description);
});

Your challenge

Rewrite Exercises 1–5 using arrow functions.

This is important because you'll see this syntax constantly in React Native:

items.forEach(item => {
    ...
});

*/

airbnbExpenses.forEach((expense) => {
    console.log(expense.description)
});

airbnbExpenses.forEach((expense) => {
    console.log(`${expense.description} costs $${expense.amount}`)
});

airbnbExpenses.forEach(expense => {
    let afterTax = (expense.amount * 0.10) + expense.amount;
    console.log(`${expense.description}: $${afterTax.toFixed(2)}`);
});

/*

🧠 Day 11 Concept Check

Don't run this code yet.

Predict the output:

const numbers = [10, 20, 30];

numbers.forEach(function(number, index) {
    console.log(number + index);
});

Answer these:

1. What gets printed?

10, 21, 32

2. What does number represent?

-number represents an element in the array numbers

3. What does index represent?

-The index represents the element position in the array

4. How many times does the callback execute?

-For every element in the array

5. What does forEach() return?

-It returns nothing. It's return type is void

That last question is especially important.

*/

/*

🔥 Day 11 Challenge — Expense Analyzer

Now we're going to connect this directly to your project.
Create:

const expenses = [
    {
        description: "Groceries",
        amount: 75,
        category: "Food"
    },
    {
        description: "Gas",
        amount: 40,
        category: "Transportation"
    },
    {
        description: "Netflix",
        amount: 15,
        category: "Entertainment"
    },
    {
        description: "Rent",
        amount: 1200,
        category: "Housing"
    },
    {
        description: "Restaurant",
        amount: 60,
        category: "Food"
    }
];

Use only forEach() to accomplish these:

Challenge A

Print:

Food → Groceries → $75
Transportation → Gas → $40
...

Challenge B

Calculate the total amount spent.

Expected:
1390

Challenge C

Calculate how much was spent on Food.

Expected:
135

Challenge D — Bonus

Print:

You have 5 expenses.
But don't hard-code the number 5.
Use the array itself.

🎯 What I want you to learn today

Don't just memorize:

array.forEach(callback);

Understand this:

Array
  ↓
forEach
  ↓
takes a callback
  ↓
callback runs once per element
  ↓
current element is passed to callback
  ↓
callback does something with it

*/

const businessExpenses = [
    {
        description: "Groceries",
        amount: 75,
        category: "Food"
    },
    {
        description: "Gas",
        amount: 40,
        category: "Transportation"
    },
    {
        description: "Netflix",
        amount: 15,
        category: "Entertainment"
    },
    {
        description: "Rent",
        amount: 1200,
        category: "Housing"
    },
    {
        description: "Restaurant",
        amount: 60,
        category: "Food"
    }
];

// Challenge A

businessExpenses.forEach((expense) => {
    console.log(`${expense.category} → ${expense.description} → $${expense.amount}`)
});

// Challenge B

let bizExpenseTotal = 0;
businessExpenses.forEach(expense => {
    bizExpenseTotal += expense.amount;
});

console.log(bizExpenseTotal);

// Challenge C

let foodTotal = 0;

businessExpenses.forEach(expense => {
    if(expense.category === "Food"){
        foodTotal += expense.amount;
    }
});

console.log(foodTotal);

// Challenge D - BONUS

console.log(`You have ${businessExpenses.length} expenses.`);