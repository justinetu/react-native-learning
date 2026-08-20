/*

Objects & References

const user = {
    name: "Justin",
    age: 23
};

const anotherUser = user;

anotherUser.age = 24;

console.log(user.age);

24, because anotherUser points to the object just like user
does so. They are both references so changes in one will
affect the other

*/

const user = {
    name: "Justin",
    age: 23
};

const anotherUser = user;

anotherUser.age = 24;

//console.log(user.age);



// Exercise 1


const account = {
    name: "Justin",
    balance: 5000,
    type: "checking"
};

let accountCopy = account;

accountCopy.balance = 5500;

let acc = {
    name: "Sanders"
}

// The original account 's balance will change even though it's a constant because all a constant means is that we cannot
// reassign it to another variable

// ex. account = acc;
//console.log(account.balance);

/*

Exercise 2 - Reference vs Copy

Figure out how to create a new object based on another object so that changing the new object doesn't change the 
original. This involves ...

*/

const person = {
    name: "Frankie",
    age: 32,
    country: "France"
};

// In JS, the spread operator makes a brand new copy in memory for top-level values but for nested values like nested objects or arrays it 
// copies the reference to the nested data

const { ...myPerson } = person;

myPerson.name = "Bobby";

console.log(person);
console.log(myPerson);



