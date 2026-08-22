/*

Day 10 — Functions + Objects Challenge

Now we're going to combine everything.

Create:

const users = [
  {
    name: "Justin",
    age: 23,
    role: "developer"
  },
  {
    name: "Marcus",
    age: 27,
    role: "designer"
  },
  {
    name: "Sarah",
    age: 31,
    role: "developer"
  }
];

Write functions that:

Challenge 1

Return a user's name and role.

Challenge 2

Create an updated user without modifying the original.

Challenge 3

Create a function that accepts a user object and destructures the properties directly in the function parameters.
For example, conceptually:
function something({ name, age }) {
   ...
}

*/

const users = [
  {
    name: "Justin",
    age: 23,
    role: "developer"
  },
  {
    name: "Marcus",
    age: 27,
    role: "designer"
  },
  {
    name: "Sarah",
    age: 31,
    role: "developer"
  }
];

function getUserInfo(user){
    const { name, role } = user;

    let userInfo = {
        name: name,
        role: role
    }

    return userInfo;
};

function unaltered(user){
    return {
        ...user
    }
}

function extractData({ name, age }) {
   console.log(`Hello ${name}! I hear that you're ${age} years young.`);
}

let { name, role } = getUserInfo(users[0]);
console.log(name, role);

console.log(unaltered(users[1]));

extractData(users[1]);

/*

Challenge 4 — Bonus

Write a function that accepts:

user
...additionalRoles

and prints them.

*/

function printStuff(user, ...additionalRoles){
    console.log(user);
    console.log(additionalRoles);
}

printStuff(users[2], "photographer", "accountant", "yoga instructor");

/*

🧠 Day 10 Boss Challenge

Don't look anything up.

Explain what happens in this code:

const user = {
  name: "Justin",
  age: 23
};

function updateUser(person) {
  return {
    ...person,
    age: person.age + 1
  };
}

const updatedUser = updateUser(user);

console.log(user);
console.log(updatedUser);

I want you to explain:

What person contains

-person contains {name: "Justin", age: 24}

What ...person does

-"Create a brand-new object. Copy the properties from person 
into it, then set age to one greater than the original age."

Why user.age doesn't change

-a new separate copy of user is made

What updatedUser contains

-updatedUser contains {name: "Justin", age: 24}

Whether user === updatedUser is true or false

false


        ORIGINAL
           │
           ▼
     ┌─────────────┐
     │ Justin      │
     │ age: 23     │
     └─────────────┘
           ▲
           │
          user


        NEW OBJECT
           │
           ▼
     ┌─────────────┐
     │ Justin      │
     │ age: 24     │
     └─────────────┘
           ▲
           │
      updatedUser

    They're separate.



*/

/*

⭐ One more important distinction
This:

const updatedUser = {
    ...user,
    age: 24
};

is not the same as:

user.age = 24;

The first:

creates a new object.

The second:

mutates the existing object.
React relies heavily on this distinction.

You'll eventually write:

setUser({
    ...user,
    age: 24
});

instead of:

user.age = 24;

Understanding why is going to make React state much easier for you.

*/

/*

🔥 Before Week 3: One Mini Challenge

I want you to do one final exercise before we move on.
Don't use Google or ChatGPT.

const user = {
    name: "Justin",
    age: 23,
    skills: ["JavaScript", "React Native"]
};

function updateUser(user) {
    return {
        ...user,
        age: 24,
        skills: [...user.skills, "TypeScript"]
    };
}

const updatedUser = updateUser(user);

console.log(user);
console.log(updatedUser);
console.log(user === updatedUser);
console.log(user.skills === updatedUser.skills);

Tell me what you think all four console.log() statements will output and explain why.

-The first console.log() will output {name: "Justin", age: 23, skills: ["JavaScript", "React Native""]}. The 
reason is because user is a reference to this object in memory

-The second console.log() will output {name: "Justin", age: 24, skills: ["JavaScript", "React Native", "TypeScript"]} because 
a new object is created and the properties of user get spread to the new object. The age is modified and the skills.

-The third console.log() is false because user and updatedUser are 2 different objects

-The fourth console.log() is false because user.skills is ["JavaScript", "React Native""] and 
updatedUser.skills is ["JavaScript", "React Native", "TypeScript"]

This one is important because we're introducing a concept you will use constantly in React Native:

shallow copying vs nested objects/arrays.

Once you answer that, I'll grade it and we'll officially move you into Week 3: map(), filter(), reduce(), 
callbacks, and functional programming.

*/

/*

🧠 Review Question 1 — Objects, Spread & References
Consider this code:

const user = {
    name: "Justin",
    age: 23,
    preferences: {
        theme: "dark",
        notifications: true
    }
};

const updatedUser = {
    ...user,
    age: 24,
    preferences: {
        ...user.preferences,
        notifications: false
    }
};

console.log(user);
console.log(updatedUser);

console.log(user === updatedUser);
console.log(user.preferences === updatedUser.preferences);

Your questions:

1. What will the first console.log() output?

-The first console.log() outputs {name: "Justin", age: 23, preferences: {theme: "dark", notifications: true}}

2. What will the second console.log() output?

-The second console.log() will print {name: "Justin", age: 24, preferences: {theme: "dark", notifications: false}}


3. What will this output?

user === updatedUser

-false

4. What will this output?

user.preferences === updatedUser.preferences

-false


5. Most importantly: explain WHY #3 and #4 have those results.

-#3 will output false because two different objetcs are being compared 
-#4 will output false because two different objects are being compared but uodatedUser.preferences 
has some properties from the user.preferences object

Bonus

What do you think happens if we change:

updatedUser.preferences.notifications = true;


Will:

user.preferences.notifications

also change?

-No, updatedUser is it's own object with it's own properties so it has no affect on the user object

*/