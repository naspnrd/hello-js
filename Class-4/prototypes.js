let arr = ["Neeraj", "Akshay"];
let obj1 = { name: "Neeraj" };
function func() {
  console.log("hello");
}

// __proto__ // this is where JS engine putting all these methods
console.log(arr.__proto__.__proto__.__proto__);
console.log(Array.prototype);
console.log(Object.prototype);

console.log(func.__proto__.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

let str = "Neeraj";
// String.prototype

// __proto__ => getter/setter method
// Object.getPrototypeOf and Object.setPrototypeOf
// console.log(Object.);
const animal = {
  speak() {
    console.log("Animal Sound");
  },
};
// console.log(animal);
const dog = {
  bark() {
    console.log("Woof!");
  },
};
const labrador = {
  cute() {
    console.log("cute");
  },
};
const lion = {
  bark() {
    console.log("roar!");
  },
};
// console.log(dog);
// set the prototype of dog to animal
// dog.__proto__ = animal
Object.setPrototypeOf(dog, animal);
Object.setPrototypeOf(labrador, dog);
Object.setPrototypeOf(lion, animal);
console.log(labrador);
console.log(Object.getPrototypeOf(labrador));
console.log(labrador.speak());
String.prototype.at = function () {
  console.log("Neeraj");
};
