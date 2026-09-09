/*

🧠 1. The Mental Model

Imagine you have:

const numbers = [10, 15, 20, 25, 30];

You want only numbers greater than 20.

With filter():

const result = numbers.filter(number => {
    return number > 20;
});

The result is:

[25, 30]

Think of it like a security checkpoint:
10 → ❌
15 → ❌
20 → ❌
25 → ✅
30 → ✅

        ↓

     [25, 30]

The callback's job is to answer:
Should this item be included?

*/

/*

🧪 Exercise 1 — Filter Numbers

Given:

const numbers = [5, 12, 18, 23, 30, 7];

Use filter() to create:

const bigNumbers

containing only numbers greater than 15.

Expected:

[18, 23, 30]

*/

// 🧪 Exercise 1 — Filter Numbers

const numbers = [5, 12, 18, 23, 30, 7];

const bigNumbers = numbers.filter(num => num > 15);

//console.log(bigNumbers);

/*

🧪 Exercise 2 — Even Numbers

Given:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

Create:

const evenNumbers

Expected:

[2, 4, 6, 8]

*/

// 🧪 Exercise 2 — Even Numbers

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = nums.filter(num => num % 2 === 0);
//console.log(evenNumbers);

/*

🧪 Exercise 3 — Filter Users

Given:

const users = [
    { name: "Justin", age: 23 },
    { name: "Marcus", age: 17 },
    { name: "Sarah", age: 31 },
    { name: "David", age: 16 }
];

Create:

const adults

containing only users who are 18 or older.

Expected:

[
    { name: "Justin", age: 23 },
    { name: "Sarah", age: 31 }
]


*/

// 🧪 Exercise 3 — Filter Users

const users = [
    { name: "Justin", age: 23 },
    { name: "Marcus", age: 17 },
    { name: "Sarah", age: 31 },
    { name: "David", age: 16 }
];

const ageAppropriateUsers = users.filter(user => user.age >= 18);
//console.log(ageAppropriateUsers);

/*

🧪 Exercise 4 — Filter Expenses

Now we're getting back to your Expense Analyzer.

Given:

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

Create:

const foodExpenses

containing only expenses where:

category === "Food"

Expected:
[
    {
        description: "Groceries",
        amount: 75,
        category: "Food"
    },
    {
        description: "Restaurant",
        amount: 60,
        category: "Food"
    }
]

*/

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

const foodExpenses = expenses.filter(expense => expense.category === "Food");
//console.log(foodExpenses);

/*

🧪 Exercise 5 — Filter By Amount

Using the same expenses array:

Create:

const expensiveExpenses

containing expenses greater than $100.

Expected:

[
    {
        description: "Rent",
        amount: 1200,
        category: "Housing"
    }
]

*/

// 🧪 Exercise 5 — Filter By Amount

const expensiveExpenses = expenses.filter(expense => expense.amount > 100);
//console.log(expensiveExpenses);

/*

🧠 Exercise 6 — Understanding the Callback

Predict the output without running the code:

const numbers = [10, 20, 30, 40];

const result = numbers.filter(number => {
    return number >= 25;
});

console.log(result);

Answer:

1. What does result contain?

   result contains [30, 40]

2. How many times does the callback execute?

   4

3. What does the callback return for 10?

   false

4. What does the callback return for 30?

   true

5. Why isn't 10 included in result?

   When 10 is eveluated in the callback, the callback returns false so 10 does not get added to the new array

*/

/*

🔥 Exercise 7 — filter() Does NOT Transform

This is a conceptual test.

What will this produce?

const numbers = [1, 2, 3, 4];

const result = numbers.filter(number => {
    return number * 2;
});

console.log(result);

Think carefully.
The callback isn't explicitly returning:

true

or:

false

Instead, it's returning:

number * 2

What happens?

Tell me:

1. What is result?

   [undefined, undefined, undefined, undefined]

2. Why?

   A comparison operator is needed yet none is provided so the callback evaluates to undefined
   since it's neither true or false

This is testing your understanding of truthy/falsy values.

*/

/*

🔥 Exercise 8 — filter() + map()

Now we're going to combine what you've learned.

Given:

const expenses = [
    { description: "Groceries", amount: 75, category: "Food" },
    { description: "Gas", amount: 40, category: "Transportation" },
    { description: "Netflix", amount: 15, category: "Entertainment" },
    { description: "Rent", amount: 1200, category: "Housing" },
    { description: "Restaurant", amount: 60, category: "Food" }
];

Create an array containing the amounts of only Food expenses.

Expected:

[75, 60]

You should use:

filter()
+
map()

Think about the order.

First:

Which expenses do I want?

Then:

What information do I want from those expenses?

Conceptually:

expenses
   ↓
 filter()
   ↓
Food expenses
   ↓
 map()
   ↓
[75, 60]

*/

const houseExpenses = [
    { description: "Groceries", amount: 75, category: "Food" },
    { description: "Gas", amount: 40, category: "Transportation" },
    { description: "Netflix", amount: 15, category: "Entertainment" },
    { description: "Rent", amount: 1200, category: "Housing" },
    { description: "Restaurant", amount: 60, category: "Food" }
];

const foodExpenseAmounts = houseExpenses
.filter(expense => expense.category === "Food")
.map(expense => expense.amount);

//console.log(foodExpenseAmounts);

/*

🔥 Day 13 Boss Challenge

Now I'm going to combine filter() + map() + object spread.

Given:

const expenses = [
    { description: "Groceries", amount: 75, category: "Food" },
    { description: "Gas", amount: 40, category: "Transportation" },
    { description: "Netflix", amount: 15, category: "Entertainment" },
    { description: "Rent", amount: 1200, category: "Housing" },
    { description: "Restaurant", amount: 60, category: "Food" }
];

Challenge A

Get only Food expenses.

Groceries
Restaurant

Challenge B

Get only Food expense amounts.

Expected:

[75, 60]

Challenge C

Create a new array containing only expenses greater than $50, but add:

isExpensive: true

Expected:

[
    {
        description: "Groceries",
        amount: 75,
        category: "Food",
        isExpensive: true
    },
    {
        description: "Rent",
        amount: 1200,
        category: "Housing",
        isExpensive: true
    },
    {
        description: "Restaurant",
        amount: 60,
        category: "Food",
        isExpensive: true
    }
]

*/

// Challenge A

const allFoodExpenses = houseExpenses.filter(expense => expense.category === "Food");

// Challenge B

const allFoodExpenseAmounts = 
houseExpenses
.filter(expense => expense.category === "Food")
.map(expense => expense.amount);

// Challenge C

const expensesGreaterThanFifty = 
houseExpenses
.filter(expense => expense.amount > 50)
.map((expense) => {
    return {
        ...expense,
        isExpensive: true
    }
});

console.log(allFoodExpenses);
console.log(allFoodExpenseAmounts);
console.log(expensesGreaterThanFifty);

/*

🔥 One Final Check Before Day 14

I want to make sure the Exercise 7 mistake is completely gone.

Don't run this:

const numbers = [0, 1, 2, 3, 4];

const result = numbers.filter(number => {
    return number;
});

console.log(result);

Tell me:

1. What does result contain?

- [1, 2, 3, 4]

2. Why isn't 0 included?

- 0 is a falsey value whereas the rest are

3. Is number being transformed?

-number is not being transformed, it's being evaluated as truthy or falsey

4. What is filter() actually looking at when it decides whether to keep an item?

-It looks at whether the value is a falsey value like 0, "", null, NaN, undefined or if it's truthy

*/