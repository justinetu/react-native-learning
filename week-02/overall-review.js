/*

Callback Exercises

##############
Exercise 1
##############

function processNumber(number, callback) {
    callback(number);
}

function double(number) {
    console.log(number * 2);
}

processNumber(10, double);

Answer:

What function is the callback?

-The function double is the callback

What value does the callback receive?

-10

What will print?

-20

##############
Exercise 2
##############

function greetUser(name, callback) {
    callback(name);
}

greetUser("Justin", function(name) {
    console.log(`Hello, ${name}!`);
});

Answer:

What is the callback?

-The callback is an anonymous function

What argument is passed to the callback?

-"Justin"

What will print?

-Hello, Justin!

##############
Exercise 3
##############

const numbers = [2, 4, 6];

numbers.forEach(function(number) {
    console.log(number + 1);
});

Answer:

What is the callback function?

-It's an anonymous function

How many times does it execute?

- 3 times

What will print?

- 3, 5, 7

########################
Destructuring Exercises
########################

###############################
Exercise 4: Object Destructuring
###############################

const user = {
    name: "Justin",
    age: 23,
    role: "developer"
};

const { name, role } = user;

Answer:

What is the value of name?

- Justin

What is the value of role?

- developer

What does destructuring allow you to avoid writing repeatedly?

- Destructuring allows you to avoid writing the property value repeatedly

###############################
Exercise 5: Array Destructuring
###############################

const colors = ["red", "blue", "green"];

const [first, second] = colors;

Answer:

What is first?

- first = "red"

What is second?

- second = "blue"

What happens to "green"?

- Nothing but it could be accesses if it were destructured with the variable third or ...rest for example

########################################

Exercise 6: Destructuring in a Callback

########################################

const expenses = [
    { description: "Food", amount: 50 },
    { description: "Gas", amount: 30 }
];

expenses.forEach(({ description, amount }) => {
    console.log(description);
    console.log(amount);
});

Answer:

What is being destructured?

-What is being destructured is the description and amount property for each expense object in the array 

What values does description receive during the first callback execution?

- "Food"

What values does amount receive during the second callback execution?

-30

How many times does the callback run?

- Twice

#########################
Spread Operator Exercises
#########################
#########################
Exercise 7: Object Spread
#########################

const user = {
    name: "Justin",
    age: 23
};

const updatedUser = {
    ...user,
    age: 24
};

Answer:

What is user.age?

- 23

What is updatedUser.age?

- 24

Is user === updatedUser true or false?

- false because we're dealing with two different objects

Does the spread operator modify the original object?

-No, it simply copies it's properties into the new object

########################
Exercise 8: Array Spread
########################

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];

Answer:

What is combined?

- [1,2,3,4,5,6]

What does ...first do?

- Copies the content of the array first then 
places it inside the array called combined

What does ...second do?

- Copies the content of the array second and places it inside the array called combined

Is combined the same array reference as first?

-No, combined has a different array reference than first

###############################
Exercise 9: Updating an Object
###############################

const expense = {
    description: "Groceries",
    amount: 75,
    category: "Food"
};

const updatedExpense = {
    ...expense,
    amount: 90
};

Answer:

What is expense.amount?

- 75

What is updatedExpense.amount?

- 90

Why is this useful when working with React or React Native state?

- It's helpful because it allows you to copy object properties so you don't have
to  write them repeatedly.

########################################
Rest Operator Exercises
########################################
########################################
Exercise 10: Rest in Function Parameters
########################################

function collectNumbers(first, ...others) {
    console.log(first);
    console.log(others);
}

collectNumbers(10, 20, 30, 40);

Answer:

What is first?

- 10

What is others?

- [20, 30, 40]

What data type is others?

-It's an array

Why are 20, 30, and 40 grouped together?

- ... indicates that they will be grouped together. first does not use ... so 10 is
assigned to it

####################################
Exercise 11: Rest with Destructuring
####################################

const numbers = [1, 2, 3, 4, 5];

const [first, ...remaining] = numbers;

Answer:

What is first?

- first is 1

What is remaining?

- [2, 3, 4, 5]

What happens to the original numbers array?

- It remains and it's content remains

###############################
Exercise 12: Rest with Objects
###############################

const user = {
    name: "Justin",
    age: 23,
    role: "developer",
    city: "Houston"
};

const { name, ...details } = user;

Answer:

What is name?

- "Justin"

What properties are inside details?

- { age: 23, role: "developer", city: "Houston" }

What is the purpose of ...details here?

- It contains the properties of user minus the name

######################################
Combined Exercises

Exercise 13: Callback + Destructuring
######################################

const expenses = [
    { description: "Groceries", amount: 75 },
    { description: "Gas", amount: 40 },
    { description: "Netflix", amount: 15 }
];

function processExpenses(expenses, callback) {
    expenses.forEach(callback);
}

processExpenses(expenses, ({ description, amount }) => {
    console.log(`${description}: $${amount}`);
});

Answer:

What is the callback?

- It's an arrow function that destructures the description and amount property from each object
in the expenses array

What is being destructured?

- the description property and amount property 

How many times does the callback execute?

- 3 times

What will print?

- "Groceries: $75"
- "Gas: $40"
- "Netflix: $15"

################################
Exercise 14: Spread + Callback
################################

const users = [
    { name: "Justin", age: 23 },
    { name: "Marcus", age: 17 }
];

const updatedUsers = users.map(user => {
    return {
        ...user,
        isAdult: user.age >= 18
    };
});

Answer:

What does map() do here?

- It transforms the object by creating a new object and placing the properties of the objects 
in users inside the new object. A new property is added called isAdult

What does ...user do?

- copies the current user properties into a new object

What will updatedUsers contain?

-[
    { name: "Justin", age: 23, isAdult: true },
    { name: "Marcus", age: 17, isAdult: false }
];

Will users be modified?

Is users[0] === updatedUsers[0] true or false? Why?

-No, theses are two different objects. They do not share the same object reference

####################################
Exercise 15: Rest + Reduce Preview
####################################

Don't worry if you haven't learned reduce() yet—just answer what you can.

function addAll(...numbers) {
    let total = 0;

    numbers.forEach(number => {
        total += number;
    });

    return total;
}

console.log(addAll(5, 10, 15));

Answer:

What does ...numbers collect?

- It collects all the numbers that are passed into the function and puts them into an array

What is the value of numbers inside the function?

- [5, 10, 15]

How many times does forEach() execute?

- 3 times

What will print?

- 30

What role does total play?

- It is an accumulator that updates the new total each iteration

###################
Final Challenge
###################

Explain these four concepts in your own words:

Callback = ?

- A callback is a function that get's passed to another function as an argument. It get's
executed within the run time of the higher order function

Destructuring = ?

-Destructuring is a way to extract properties from an object or array

Spread = ?

- Spread allows us to copy properties from an array or object 

Rest = ?

- This allows us to pass the remaining data in an array or object

*/

/*

CODING EXERCISES

Exercise 1: Expense Printer with a Callback

Goal

Practice passing a callback into another function.

Starter code

const expenses = [
    { description: "Groceries", amount: 75 },
    { description: "Gas", amount: 40 },
    { description: "Netflix", amount: 15 }
];

// Write a function called processExpenses
// It should accept expenses and a callback.
// Use forEach() inside the function.

Your tasks
Create processExpenses(expenses, callback).
Inside the function, use forEach().
Call the callback for every expense.
Create a separate function called printExpense.
Make printExpense display:

Groceries: $75
Gas: $40
Netflix: $15

Pass printExpense into processExpenses().

Challenge
Modify your solution so the callback receives only:
description, amount
instead of the entire expense object.

*/

const expenses = [
    { description: "Groceries", amount: 75 },
    { description: "Gas", amount: 40 },
    { description: "Netflix", amount: 15 }
];

// Write a function called processExpenses
// It should accept expenses and a callback.
// Use forEach() inside the function.
function processExpenses(expenses, callback){
    expenses.forEach((expense) => {
        callback(expense);
    })
}

function printExpense({description, amount}){
    console.log(`${description}: $${amount}`);
}

console.log("Exercise 1 Answer Below")
processExpenses(expenses, printExpense);

/*

Exercise 2: Expense Destructuring

Goal

Practice object destructuring inside functions and callbacks.

Use this data:

const expenses = [
    { description: "Groceries", amount: 75, category: "Food" },
    { description: "Gas", amount: 40, category: "Transportation" },
    { description: "Netflix", amount: 15, category: "Entertainment" }
];

Your tasks
Create a function:
function printExpenseDetails(expense) {
    // Your code here
}

Inside the function:

Destructure description, amount, and category.
Print a sentence like:

Groceries costs $75 and belongs to Food.
Use forEach() to call printExpenseDetails for every expense.

Challenge
Rewrite the function so destructuring happens directly in the parameter:
function printExpenseDetails({ description, amount, category }) {
    // Your code here
}

*/

const exercise2Expenses = [
    { description: "Groceries", amount: 75, category: "Food" },
    { description: "Gas", amount: 40, category: "Transportation" },
    { description: "Netflix", amount: 15, category: "Entertainment" }
];

function printExpenseDetails({description, amount, category}) {

    console.log(`${description} costs $${amount} and belongs to ${category}`);

}

console.log();
console.log("Exercise 2 Answers Below");
exercise2Expenses.forEach((expense) => {
    printExpenseDetails(expense);
})

/*

###################################################
Exercise 3: Update Expenses Without Mutating Them
###################################################


Goal

Practice object spread.
Use this array:

const expenses = [
    { description: "Groceries", amount: 75 },
    { description: "Gas", amount: 40 },
    { description: "Netflix", amount: 15 }
];

Your task

Create a new array called updatedExpenses.

Use map() and object spread to:

Keep every existing property.
Add a new property called isPaid.
Set isPaid to true for every expense.

Expected result:

[
    { description: "Groceries", amount: 75, isPaid: true },
    { description: "Gas", amount: 40, isPaid: true },
    { description: "Netflix", amount: 15, isPaid: true }
]

Challenge
Create another array called increasedExpenses where every expense amount increases by 10%.
Do not modify the original expenses array.

*/

const exercise3Expenses = [
    { description: "Groceries", amount: 75 },
    { description: "Gas", amount: 40 },
    { description: "Netflix", amount: 15 }
];

const updatedExercise3Expenses = exercise3Expenses.map(expense => {
    return {
        ...expense,
        isPaid: true
    }
});

console.log();
console.log("Exercise 3 Answers Below");
console.log(updatedExercise3Expenses);

/*

################################################
Exercise 4: Rest Parameters and Expense Totals
################################################

Goal

Practice rest parameters.

Create a function called:

function calculateTotal(...amounts) {
    // Your code here
}

Your tasks

Use rest parameters to collect all arguments.

Calculate the total using forEach().

Return the total.

Test it with:

console.log(calculateTotal(75, 40, 15));
console.log(calculateTotal(100, 25));
console.log(calculateTotal(10, 20, 30, 40));

Expected output:
130
125
100

Challenge

Create a function called calculateAverage(...amounts) that returns the average of all the numbers passed into it.

For example:

calculateAverage(10, 20, 30);

Should return:
20

*/

function calculateTotal(...amounts) {
    // Your code here
    let total = 0;

    amounts.forEach((amount) => {
        total += amount;
    });

    return total;
}

function calculateAverage(...amounts){

    let total = 0;

    amounts.forEach((amount) => {
        total += amount;
    });

    let average = total / amounts.length;

    return average;
}

console.log();
console.log("Exercise 4 Answers Below");
console.log(calculateTotal(75, 40, 15));
console.log(calculateTotal(100, 25));
console.log(calculateTotal(10, 20, 30, 40));
console.log();
console.log("Average is: " + calculateAverage(10, 20, 30));

/*

Final Challenge: Combine Everything

Build an analyzeExpenses() function.

Starter data:

const expenses = [
    { description: "Groceries", amount: 75, category: "Food" },
    { description: "Gas", amount: 40, category: "Transportation" },
    { description: "Netflix", amount: 15, category: "Entertainment" },
    { description: "Dinner", amount: 60, category: "Food" }
];

Your function should:

function analyzeExpenses(expenses) {
    // Your code here
}

Requirements

Inside analyzeExpenses():

Use map() to create a new array.

Use destructuring to access description, amount, and category.

Use spread to preserve the original expense properties.

Add a new property called formatted.

formatted should look like:

"Groceries: $75 (Food)"

Use a callback function somewhere in your solution.

Do not mutate the original expenses array.

Expected general structure:

[
    {
        description: "Groceries",
        amount: 75,
        category: "Food",
        formatted: "Groceries: $75 (Food)"
    },
    // ...
]
    
Bonus

Add a calculateTotal(...amounts) function and use it to calculate 
the total expense amount.

*/

const finalChallengeExpenses = [
    { description: "Groceries", amount: 75, category: "Food" },
    { description: "Gas", amount: 40, category: "Transportation" },
    { description: "Netflix", amount: 15, category: "Entertainment" },
    { description: "Dinner", amount: 60, category: "Food" }
];

function analyzeExpenses(expenses, callback) {
    // Your code here
   const updatedExpenses =  expenses.map((expense) => {
        const { description, amount, category } = expense;

        return {
            ...expense,
            formatted: callback(description, amount, category)
        }
    });

    return updatedExpenses;
}

function formatExpense(...properties){
    return `${properties[0]}: $${properties[1]} (${properties[2]})`
}

function calculateTotal(...amounts){
    let total = 0;

    amounts.forEach((amount) => {
        total += amount;
    });

    return total;
}

console.log();
console.log("Final Exercise Answers Below");
console.log(analyzeExpenses(finalChallengeExpenses, formatExpense));
console.log();

console.log(calculateTotal(
    finalChallengeExpenses[0].amount,
    finalChallengeExpenses[1].amount,
    finalChallengeExpenses[2].amount,
    finalChallengeExpenses[3].amount
));