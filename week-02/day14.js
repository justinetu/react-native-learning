/*

🧪 Exercise 1 — Sum the Numbers

Given:

const numbers = [10, 20, 30, 40];

Use reduce() to calculate the total.

Expected:

100

Use:

const total

Rules

Don't use:

for
for...of
while
forEach()

Use only:

reduce()

*/

const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, number) => {
    return sum + number;
});

console.log(total);

/*

🧪 Exercise 2 — Understand the Accumulator

Don't run this:

const numbers = [5, 10, 15];

const result = numbers.reduce((sum, number) => {
    return sum + number;
}, 100);

Answer:

1. What is the initial value of sum?

- 0

2. What is sum after the first iteration?

- 5

3. What is sum after the second iteration?

- 15

4. What is sum after the third iteration?

- 30

5. What is the final value of result?

- 30

*/