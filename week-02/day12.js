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

//console.log(descriptions);



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

//console.log(amounts);

/*

4. Exercise 3 — Transform the Data

Now create an array containing:

Groceries: $75
Gas: $40
Netflix: $15
Rent: $1200

Expected:

[
    "Groceries: $75",
    "Gas: $40",
    "Netflix: $15",
    "Rent: $1200"
]

You'll need to return a template literal from the callback.

*/

const formattedExpenses = expenses.map(expense => {
    return `${expense.description}: $${expense.amount}`;
});

//console.log(formattedExpenses);

/*

5. Exercise 4 — Add 10%

Given:

const expenses = [
    { description: "Groceries", amount: 75 },
    { description: "Gas", amount: 40 },
    { description: "Netflix", amount: 15 }
];

Use map() to create a new array containing the amounts after a 10% increase.

Expected:

[82.5, 44, 16.5]

Important question:

Does this:

expenses.map(...)

modify the original expenses array?

.map() does not modify the original array. It creates
a new array. It transforms the data of the original
array and returns that transformed data in a new array

Think about it before answering.

*/

const increasedAmount = expenses.map(expense => {
    return expense.amount + (expense.amount * 0.10);
});

//console.log(increasedAmount);

/*

6. Exercise 5 — Create New Objects

This is where map() becomes really useful.

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
    }
];

Use map() to create a new array where each object contains:

{
    description: "...",
    amount: ...,
    formattedAmount: "$..."
}

*/

const upgradedExpenses = expenses.map(expense => {
    return {
        description: expense.description,
        amount: expense.amount,
        formattedAmount: `$${expense.amount}`
    }
});

//console.log(upgradedExpenses);

/*

7. Exercise 6 — map() + Spread

Now we're going to combine map() with what you learned last week.
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
    }
];

Create a new array where each expense has a new property called tax.
The tax should be 10% of the amount.

*/

const moreExpenses = [
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
    }
];

const taxedExpenses = moreExpenses.map(expense => {
    return {
        ...expense,
        tax: (expense.amount * 0.10)
    }
});

// console.log(taxedExpenses);

/*

🧠 Day 12 Concept Check

Don't run this yet.

const numbers = [1, 2, 3, 4];

const result = numbers.map(number => {
    return number * 2;
});

console.log(numbers);
console.log(result);

Answer:

1. What does numbers contain?

- An array of numbers

2. What does result contain?

- A new array that contains all of the numbers in the numbers
array doubled

3. Does map() modify numbers?

- .map() has no affect on numbers. It creates a new array separate
from numbers

4. How many elements does result contain?

- numbers.length

5. What happens if the callback doesn't have a return?

- An empty array is returned

For example:

const result = numbers.map(number => {
    console.log(number * 2);
});

What does result contain?

- result prints each number in numbers doubled but map
does not transform any of the elements because there is 
no return

*/

/*

🔥 Day 12 Challenge — Expense Analyzer v2

Now we're going to start upgrading your Expense Analyzer.

Use this data:

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



Challenge A — Descriptions

Use map() to create:

[
    "Groceries",
    "Gas",
    "Netflix",
    "Rent",
    "Restaurant"
]

Challenge B — Formatted Expenses

Create:

[
    "Groceries → $75",
    "Gas → $40",
    "Netflix → $15",
    "Rent → $1200",
    "Restaurant → $60"
]

Challenge C — Expense Objects

Create a new array where every expense has:

formatted: "..."

For example:

{
    description: "Groceries",
    amount: 75,
    category: "Food",
    formatted: "Groceries → $75"
}

Do not modify the original array.

Challenge D — Tax

Create a new array where every expense gets:

tax: amount * 0.10

*/

const personalExpenses = [
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

// Challenge A - Descriptions

const descrip = personalExpenses.map(expense => expense.description);
console.log(descrip);

// Challenge B - Formatted Expenses

const formatPersonalExpenses = 
    personalExpenses.map(expense => {
        return `${expense.description} → $${expense.amount}`;
    });

    //console.log(formatPersonalExpenses);

    // Challenge C — Expense Objects

    const modifiedExpenses = personalExpenses.map(expense => {
        return {
            ...expense,
            formatted: `${expense.description} → $${expense.amount}`
        };
    });

    //console.log(modifiedExpenses);

    // Challenge D — Tax

    const expensesWithTax = personalExpenses.map(expense => {
        return {
            ...expense,
            tax: expense.amount * 0.10
        }
    });

    console.log(expensesWithTax);

    /*

    const users = [
    { name: "Justin", age: 23 },
    { name: "Marcus", age: 27 },
    { name: "Sarah", age: 31 }
];

    const result = users.map(user => {
        return {
            ...user,
            isAdult: user.age >= 18
        };
    });

    console.log(users);
    console.log(result);
    console.log(users === result);
    console.log(users[0] === result[0]);

Answer these without running it:

1. What will users contain?

[
    { name: "Justin", age: 23 },
    { name: "Marcus", age: 27 },
    { name: "Sarah", age: 31 }
]

2. What will result contain?

[
    { name: "Justin", age: 23, isAdult: true },
    { name: "Marcus", age: 27, isAdult: true },
    { name: "Sarah", age: 31, isAdult: true }
]

3. Will users === result be true or false?

false because users and result are two separate arrays

4. Will users[0] === result[0] be true or false?

true because they contain the same exact properties

5. Why?

They both have the same properties

6. Why is ...user important here?

It allows creates a new object and copies the object's properties
into the new object

    */

/*

One final mini-test

Before we move to filter(), answer this without running it:

const user = {
    name: "Justin",
    age: 23
};

const copy = {
    ...user
};

const reference = user;

console.log(user === copy);
console.log(user === reference);
console.log(user.name === copy.name);

Tell me:

1. What is #1?

-false

2. What is #2?

-true

3. What is #3?

-true


4. Explain why #1 and #2 are different.

-#1 and #2 are different because #1 involves two separate objects
whereas in #2 reference refers to the same object that user points
to

*/