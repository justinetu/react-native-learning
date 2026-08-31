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

console.log(bigNumbers);