
// Learn about objects in Javascript

let Dog = {
    breed: "French Bulldog",
    age: 5,
    gender: "Female",
    tailIsWagging: false,
    bark(){
        console.log("woof woof");
    },
    wagTail(){
        this.tailIsWagging = true;
        console.log(this.tailIsWagging);
    }
}

Dog.bark();
Dog.wagTail();
Dog.age = 6;
console.log(Dog.age);

let person = new Object({
    name: "Cameron Jones",
    gender: "Male",
    creditScore: 750,
    isEmployed: true,
    wave(){
        console.log("--waves hello--");
    }
});

person.wave();