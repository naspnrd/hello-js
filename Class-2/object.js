// const a = 10; // x030
// const b = [1, 2]; // x031
// // a = 20; // error // changing  reinitialising

// b.push(3); // x031
// b = [1]; // error -> reinitialising

// store collections of key-value pairs
// const obj = {}; // object literal
// Object.create()

const obj = {
  //   key: "value",
  name: "Neeraj",
  age: 25,
  profession: "Developer",
  "hello me": "arjun",
  0: "hi",
  // methods
  greet: function () {
    console.log("I'm a function");
  },
  for: 1,
  let: 2,
  return: 3,
};

// 2 ways to acces
// Dot(.) notation -> It requires the key be a valid identifier
// Contains no spaces
// Doesn't start with digit
// Does not include special characters ($, &, _ are allowed)
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj."hello me");

// Bracket Notation ([]) -> works with any string
// console.log(obj["name"]);
// console.log(obj["age"]);
// console.log(obj["hello me"]);
// console.log(obj[0]);
// console.log(obj["0"]);
// console.log(obj["greet"]);
// console.log(obj["return"]);

// bcz every key internally converts to string

// Property name limitations

// delete

// console.log(delete obj.for); // returns true
// console.log(delete obj.x); // it will not throw error returns true
// console.log(obj.for); // undefined

// Checking if a property exists:
// in operator

let user = {
  name: "Neeraj",
  age: 25,
  b: undefined,
};
// console.log(user.noSuchProperty === undefined) // true means noSuchProperty exist

// key in object

console.log("age" in user); // true
console.log("name" in user); // true
// console.log(age in user); // Reference error
console.log("a" in user); // false
console.log("b" in user); // true
console.log(user.b); // true

// hasOwnProperty()

console.log(user.hasOwnProperty("a"));
