/*

🚀 Day 12 — map() + Transforming Data
You're ready for one of the most important JavaScript methods for React Native.

🧠 The Mental Model
Think of map() like a machine:
             map()
              ↓
┌────────┬────────┬────────┐
│ item 1 │ item 2 │ item 3 │
└───┬────┴───┬────┴───┬────┘
    ↓        ↓        ↓
 transform transform transform
    ↓        ↓        ↓
┌────────┬────────┬────────┐
│ result │ result │ result │
└────────┴────────┴────────┘

       NEW ARRAY
If you start with 3 elements, map() normally produces 3 results.

*/




/*

2. Your First map() Exercise

Given:

const expenses = [
    { description: "Groceries", amount: 75 },
    { description: "Gas", amount: 40 },
    { description: "Netflix", amount: 15 },
    { description: "Rent", amount: 1200 }
];

Use map() to create:

[
    "Groceries",
    "Gas",
    "Netflix",
    "Rent"
]

Store the result in:

const descriptions

Important

Don't just console.log() inside the callback.

I want you to return a value from the callback.

*/

const expenses = [
    { description: "Groceries", amount: 75 },
    { description: "Gas", amount: 40 },
    { description: "Netflix", amount: 15 },
    { description: "Rent", amount: 1200 }
];

const descriptions = expenses.map(expense => {
    return expense.description;
});

console.log(descriptions);



/*

3. Exercise 2 — Get the Amounts

Create:

const amounts

using map().

Expected result:

[75, 40, 15, 1200]

*/

const amounts = expenses.map((expense) => {
    return expense.amount;
});

console.log(amounts);