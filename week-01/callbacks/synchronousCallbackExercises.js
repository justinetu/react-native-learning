/*

Exercise 1: Welcome User

Write a function called welcomeUser.

Requirements:

It accepts two parameters:

-a user's name
-a callback

Print:
Welcome Justin!
Then execute the callback.

Example:
welcomeUser("Justin", sayGoodbye);

*/

function welcomeUser(name, callback){
    console.log(`Welcome ${name}!`);
    callback();
}

welcomeUser('Julio', function(){
    console.log("You are a prized posession.");
});

/*

Exercise 2: Do Three Things

Write a function named:

doThreeThings(callback)

It should print

-Step 1
-Step 2

Then execute the callback.

The callback should print
Step 3

Expected output:
Step 1
Step 2
Step 3

*/

function doThreeThings(callback){
    console.log('Step 1');
    console.log('Step 2');
    callback();
};

function printLastStep(){
    console.log('Step 3');
}

doThreeThings(printLastStep);

/*

Exercise 3: Calculator

Write a function:

calculate(a, b, callback)

Create three callbacks.

add
subtract
multiply

Example:

calculate(8, 2, add);

Output:
10

Then test all three callbacks.

*/

function calculate(a, b, callback){
    callback(a, b)
}

function add(a, b){
    console.log(a + b);
}

function subtract(a, b){
    console.log(a - b);
}

function multiply(num1, num2){
    console.log(num1 * num2);
}

calculate(8, 2, add);
calculate(8, 2, subtract);
calculate(8, 2, multiply);

/*

Exercise 4: Process Numbers

Write

processNumber(number, callback)

Create callbacks that
double the number
square the number
determine if it is even

Example:
processNumber(6, double);
processNumber(6, square);
processNumber(6, isEven);

Expected output:
12
36
true

*/

function processNumber(number, callback){
    callback(number);
}

function double(num){
    console.log(num + num);
};

function square(num){
    console.log(num * num);
};

function isEven(num){
    if(num % 2 === 0){
        console.log("true");
    }
};

processNumber(6, double);
processNumber(6, square);
processNumber(6, isEven);

/*

Exercise 5: Shopping Cart

Write

checkout(total, callback)

Create callbacks that
add tax
apply a coupon
add shipping

Example:
checkout(100, addTax);

Output might be
108

*/

function checkout(total, callback){
    callback(total);
};

function addTax(value){
    console.log(parseFloat(value + 1.25).toFixed(2));
};

function applyCoupon(value){
    let discount = value * 0.3;
    console.log(parseFloat(value - discount).toFixed(2));
};

function addShipping(value){
    console.log(value + 5);
}

checkout(100, addTax);
checkout(100, applyCoupon);
checkout(100, addShipping);

/*

Exercise 6: Student Grades

Write

gradeStudent(score, callback)

Callbacks:

letterGrade
passOrFail
honorRoll

Example:
gradeStudent(92, letterGrade);

*/

function gradeStudent(score, callback){
    callback(score);
}

function letterGrade(score){
    if(score >= 90 && score <= 100){
        console.log('A');
    }
    else if(score >= 80 && score <= 89){
        console.log('B');
    }
    else if(score >= 70 && score <= 79){
        console.log('C');
    }
    else if(score >= 60 && score <= 69){
        console.log('D');
    }
    else if(score >= 0 && score <= 59){
        console.log('F');
    }
    else {
        console.log('Invalid score!');
    }
}

function passOrFail(score){
    if(score >= 50){
        console.log("Pass!");
    }
    else {
        console.log("Fail!");
    }
}

function honorRoll(score){
    if(score >= 80) {
        console.log("Honor roll: true");
    }
    else {
        console.log("Honor roll: false");
    }
}

gradeStudent(92, letterGrade);
gradeStudent(92, passOrFail);
gradeStudent(92, honorRoll);

/*

Exercise 7: Build Your Own forEach

Write your own version of forEach.

Function signature:

myForEach(array, callback)

It should call the callback for every element.

Example:

myForEach([1,2,3], function(number){
    console.log(number);
});

Output
1
2
3

*/

function myForEach(array, callback){
    for(let elem of array) {
        callback(elem);
    }
}

myForEach([2, 4, 6], function(num){
    console.log(num + num);
})

/*

Exercise 8: Build Your Own map

Don't use JavaScript's map().

Write
myMap(array, callback)

Example
const result = myMap([1,2,3], function(num){
    return num * 2;
});

Expected
[2,4,6]

*/

function myMap(array, callback){
    let resArray = [];

    for(let elem of array){
        let result = callback(elem);
        resArray.push(result);
    }
    return resArray;
}

const res = myMap([1, 2, 3], function(num){
    return num * 2;
})

console.log(res);

/*

Exercise 9: Build Your Own filter

Write

myFilter(array, callback)

Example
const result = myFilter([1,2,3,4,5], function(num){
    return num % 2 === 0;
});

Expected
[2,4]

*/

function myFilter(array, callback){
    let resultArray = [];

    for(let elem of array) {
        let result = callback(elem);
        result === true ? resultArray.push(elem) : null;
    }
    return resultArray;
}

let filtered = myFilter([1,2,3,4,5], function(num){
    return num % 2 === 0;
});

console.log(filtered);