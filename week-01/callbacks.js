/*

Exercise 1 — Simple Callback
What is printed?

function greet(callback) {
  console.log("Hello");
  callback();
}

function sayGoodbye() {
  console.log("Goodbye");
}

greet(sayGoodbye);

Questions:

What prints first? Hello

What prints second? Goodbye

Is this synchronous or asynchronous? synchronous


*/

/*

Exercise 2 — Returning to the Caller

function execute(callback) {
  console.log("Start");
  callback();
  console.log("End");
}

execute(function () {
  console.log("Middle");
});

Questions:

Write the exact output. Start Middle End



Why does "End" wait? callbacks get executed immediately therefore, the callback will take precedence

*/

/*

Exercise 3 — Array forEach

const numbers = [2, 4, 6];

numbers.forEach(function (num) {
  console.log(num);
});

console.log("Done");

Questions:

What is printed? 2 4 6 Done

When is the callback executed? First

Why is "Done" last? synchronous callbacks get executed immediately before returning to the flow of execution

*/

/*

Exercise 4 — map()

const nums = [1, 2, 3];

const doubled = nums.map(function (num) {
  return num * 2;
});

console.log(doubled);

Questions:

How many times does the callback run? 3 times

What is doubled? [2, 4, 6]

*/