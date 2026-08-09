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
        console.log(`${food} is ready!`);
    }, 2000);

    setTimeout(() => {
        callback(food);
    }, 3000);

}

function deliverFood(food){
    console.log(`Delivering ${food}...`);
    console.log(`${food} delivered`);
}

//placeOrder("Pizza", prepareFood);


/*

Bonus Challenge: User Authentication System

Build a small fake authentication system using callbacks and setTimeout().

Your goal
Create these three functions:

registerUser()
loginUser()
getUserProfile()

They should work together in this order:
Register
   ↓
Login
   ↓
Get Profile

Requirements
1. registerUser(username, password, callback)
Pretend registration takes 2 seconds.

It should eventually call:

callback(user);
where user is an object like:
{
    username: "Justin",
    password: "1234"
}

2. loginUser(username, password, callback)
Pretend login takes 1 second.
If the username/password are correct, call:

callback(user);

If they're incorrect, call:

callback(null);

3. getUserProfile(user, callback)

Pretend retrieving the profile takes 1 second.
Return something like:
{
    username: "Justin",
    age: 23,
    occupation: "Software Developer"
}
The challenge
Make the functions work together so that:
registerUser("Justin", "1234", function(user) {

    // login here

});
eventually produces:
Registering user...
Registration successful!

Logging in...
Login successful!

Getting profile...
Profile retrieved!

Username: Justin
Age: 23
Occupation: Software Developer

*/

function registerUser(username, password, callback){
    console.log("Registering user...");
    setTimeout(() => {
        
        let user = {
            username: username,
            password: password
        }; 

        console.log("Registration successful!");
        callback(user);
    }, 2000);
}

function loginUser(username, password, callback){
    let user = {
        username: username,
        password: password
    }

    console.log("Logging in...");

    setTimeout(() => {
        if((username === "Justin") && (password === "1234")){
            callback(user);
        }
        else {
            callback(null);
        }
    }, 1000)
}

function getUserProfile(user, callback){
    console.log("Getting profile...");
    setTimeout(() => {
        console.log("Profile retrieved!");
        callback(user);
    }, 1000);
}

registerUser("Justin", "1234", function(user) {
    loginUser(user.username, user.password, function(user){
        console.log("Login successful!");
        getUserProfile(user, function(){
            console.log(user);
        });
    });
})