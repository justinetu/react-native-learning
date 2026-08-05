// SYNCHRONOUS

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

/*

Exercise 5 — filter()

const scores = [55, 80, 90, 45];

const passed = scores.filter(function(score) {
  return score >= 60;
});

console.log(passed);

Questions:
Which elements stay? 80, 90

Why?

.filter() checks every element in scores t0 find which ones are equal to or above 60
80 and 90 are the only scores that do so they are returned like so [80, 90]

*/

// ASYNCHRONOUS

/*

Exercise 6 — setTimeout()
console.log("A");

setTimeout(function () {
  console.log("B");
}, 1000);

console.log("C");

Questions:

Predict the output.

A, C, B

Why isn't "B" second?

The callback delays the execution of B until 1 second has passed whereas the other 2 lines
execute without any delay.

*/

/*

Exercise 7 — Zero Milliseconds

console.log("Start");

setTimeout(function () {
  console.log("Timeout");
}, 0);

console.log("Finish");

Questions:

Does "Timeout" print before "Finish"?

No

Why?

All asynchronous callbacks are executed after the completion of synchronous callbacks. Synchronous 
callbacks are executed immediately. Even though the timer is set for 0 ms, it doesn't mean that
it's executed immediately. The synchronous code gets ran, then node js starts the timer for 0 ms then
the last synchronous line "Finish" executes. Node checks the callback queue. The event loop sees the 
callstack is empty then pushes the callback on. Then it's executed.

*/

// console.log("Start");

// setTimeout(function () {
//   console.log("Timeout");
// }, 0);

// console.log("Finish");

/*

Exercise 8 — Two Timers

console.log("1");

setTimeout(function () {
  console.log("2");
}, 500);

setTimeout(function () {
  console.log("3");
}, 100);

console.log("4");

Questions:

Predict the order. 1, 4, 3, 2


Why? 1 and 4 get executed first because they are synchronous. 3 is printed next because after the timer
is done in 100 ms, it gets added to the callback queue. The event loop checks the callstack and sees
it's empty so it adds 3 to it so it gets ran. After 2 finishes when 500 ms is up, it's put into the
callback queue. The event loop checks if the callstack is empty, it is so 2 get's added then it 
gets executed

*/

/*

Exercise 9 — Mixing Sync and Async

function work(callback) {
  console.log("Working...");

  setTimeout(function () {
    callback();
  }, 1000);

  console.log("Still working...");
}

work(function () {
  console.log("Finished!");
});

Questions:

Predict the output.

"Working..."
"Still working..."
"Finished"

When does the callback execute?

The synchronous callback does not execute until the completion of the asynchronous callback

*/

// function work(callback) {
//   console.log("Working...");

//   setTimeout(function () {
//     callback();
//   }, 1000);

//   console.log("Still working...");
// }

// work(function () {
//   console.log("Finished!");
// });

/*

Exercise 10 — Multiple Callbacks

console.log("Start");

function first(callback) {
  console.log("Inside first");
  callback();
}

first(function () {
  console.log("Callback 1");
});

setTimeout(function () {
  console.log("Callback 2");
}, 0);

console.log("End");

Questions:

Write the exact output.

"Start"

"Inside first"

"Callback 1"

"End"

"Callback 2"


Which callback is synchronous?

Callback 1 is synchronous

Which callback is asynchronous?

Callback 2 is asynchronous

Why?

Callback 1 does not delay the execution of a block of code because it does not use a timer nor is it
requesting anything from a network or api.

Callback 2 uses a timer that expires in 0 ms so therefore, it's an asynchronous callback

*/

console.log("Start");

function first(callback) {
  console.log("Inside first");
  callback();
}

first(function () {
  console.log("Callback 1");
});

setTimeout(function () {
  console.log("Callback 2");
}, 0);

console.log("End");