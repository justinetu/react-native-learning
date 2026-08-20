// destructuring

const human = {
    name: "James Franko",
    country: "Thailand"
};

//const { name, country } = human;

/*

Exercise 3

Create an object called product with properties name, price, category, and inStock

Extract:

-name
-price
-inStock

*/

const product = {
    name: "iPhone",
    price: 999,
    category: "Electronics",
    inStock: true
};

//const { name, price, category, inStock } = product;

/*

Exercise 4 - Nested destructuring

Extract:

-name
-city
-state

*/

const aUser = {
    name: "Kyle",
    address: {
        city: "Houston",
        state: "Texas"
    }
};

const { name } = aUser;
const { city, state } = aUser.address;

//console.log(city, state);



const myDog = {
    dogName: "Frankie",
    gender: "M",
    data: {
        breed: "Bulldog",
        color: "Brown"
    }
}

const { dogName, gender } = myDog;

const { breed, color } = myDog.data;

