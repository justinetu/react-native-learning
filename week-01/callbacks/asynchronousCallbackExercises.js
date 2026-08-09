/*
Exercise 10: Fake Download

Write
downloadFile(callback)

Requirements:

Immediately print
Downloading...

Wait 2 seconds
Execute the callback.
The callback prints

Download Complete!

*/

function downloadFile(callback){
    console.log("Downloading...");

    setTimeout(() => {
        callback();
    }, 2000);
}

function download(){
    console.log("Download Complete!");
}

//downloadFile(download);

/*

Exercise 11: Fake Login

Write
login(username, callback)
Immediately print
Logging in...
After 3 seconds
Welcome Justin
using the callback.

*/

function login(username, callback){
    console.log("Logging in...");

    setTimeout(() => {
        callback(username);
    }, 3000);
}

function greetUser(username){
    console.log(`Welcome ${username}`);
}

//login("Jayzilla00", greetUser);

/*

Exercise 12: Fake API Request

Write
getUser(callback)
Wait 2 seconds.
Create an object
{
    name: "Justin",
    age: 23
}

Pass the object into the callback.
Expected usage:
getUser(function(user){
    console.log(user.name);
});

Output
Justin

*/

function getUser(callback){
    setTimeout(() => {
        let user = new Object({
            name: "Justin",
            age: 23
        });

        callback(user);
    }, 2000);
}

function displayUsername(user){
    console.log(user.name);
}

//getUser(displayUsername);

/*

Exercise 13: Button Click

Pretend someone clicked a button.

Write
clickButton(callback)

Output
Button clicked!
Then execute the callback.
The callback should display
Opening profile...

*/

function clickButton(callback){
    console.log("Button clicked!");
    callback();
}

function openProfile(){
    console.log("Opening profile...");
}

//clickButton(openProfile);

/*

Exercise 14: Form Submission

Write
submitForm(formData, onSuccess)
After one second
Form Submitted!

Call
onSuccess(formData)
The callback prints
Welcome Justin!

*/

function submitForm(formData, onSuccess){
    setTimeout(() => {
        console.log("Form Submitted!");
        onSuccess(formData);
    }, 1000);
}

function onSuccess(input){
    console.log(`Welcome ${input}`);
}

//submitForm("Justin", onSuccess);

/*

Exercise 15 (Challenge)

Build a simple food ordering system.

Requirements:
Functions:
placeOrder(food, callback)
prepareFood(food, callback)
deliverFood(food)
Use setTimeout() to simulate time passing.

Desired output:
Order received for Pizza...
Preparing Pizza...
Pizza is ready!
Delivering Pizza...
Pizza delivered!
Use callbacks so that each step starts only after the previous one finishes.

*/

function placeOrder(food, callback){
    
    console.log(`Order received for ${food}...`);

    callback(food, deliverFood);
}

function prepareFood(food, callback){
    console.log(`Preparing ${food}...`);
    
    setTimeout(() => {
        console.log("Pizza is ready!");
    }, 1000);

    setTimeout(() => {
        callback(food)
    }, 2000);
}

function deliverFood(food){
    console.log(`Delivering ${food}...`);
    
    setTimeout(() => {
        console.log("Pizza delivered!");
    }, 3000)
}

placeOrder("Pizza", prepareFood);

/*

Bonus Challenge: Build Your Own Mini Event System
This combines everything you've learned.
Create a function:
on(eventName, callback)
and another function:
trigger(eventName)

Example:
on("login", function () {
    console.log("User logged in!");
});

trigger("login");
Output:
User logged in!
Then extend it to support multiple callbacks:
on("login", function () {
    console.log("Load profile");
});

on("login", function () {
    console.log("Load notifications");
});

trigger("login");

Output:
Load profile
Load notifications

*/