let numbers = [1, 2, 3, 4, 5];

let [one, two, ...rest] = numbers;

// console.log(one, two, rest);

let car = {
    type: "Mustang",
    color: "Black"
};

let dreamCar = {
    type: "Ferarri",
    color: "Red"
};

let {...myCar} = car;

console.log(myCar);

