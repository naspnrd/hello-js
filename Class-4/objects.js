// let obj = {
//   a: 1,
//   b: 2,
// };

// // let objCopy = obj;
// // objCopy.b = 4;
// // console.log(obj);
// // console.log(objCopy);

// let clone = Object.assign({}, obj);
// let clone1 = { ...obj };
// clone.b = 4;
// clone1.b = 5;
// console.log(obj);
// console.log(clone);
// console.log(clone1);

// const user = {
//   name: "Neeraj", //  l0 level
//   sizes: {
//     height: 182, // l1 level
//     width: 60, // l1 level
//     abc: {
//       h: 9, // l2 level
//       g: 10, // l2 level
//     },
//   },
//   l: 2, // l0 level
// };

// let clone = Object.assign({}, user); // shallow clone
// let clone1 = { ...user }; // shallow clone

// console.log(user === clone); // false
// console.log(user.sizes === clone.sizes); // true
// user.sizes.width++; // 61
// user.name = "neeraj";
// console.log(clone.sizes.width); // 61

// function deepCopy(input) {
//   var result = {};
//   // Base
//   if (typeof input !== "object") return input;
//   for (let key in input) {
//     result[key] = deepCopy(input[key]);
//   }
//   return result;
// }
// let clone = deepCopy(user);
// console.log(user === clone); // false
// console.log(user.sizes === clone.sizes); // false
// console.log(user.sizes.abc === clone.sizes.abc); // false
// user.sizes.width++; // 61
// user.name = "neeraj";
// console.log(clone.sizes.width); // 60

// Property Descriptors
// let user = { name: "Neeraj" };
// console.log(Object.keys(user));

// const User = function () {
//   this.name = "Neeraj";
// }; // constructor function

// const user1 = new User(); //
// const user2 = new User(); //
// const user3 = new User(); //
// User.prototype.age = 25;
// // for (let key in user) {
// //   console.log(key, user[key]);
// // }

// console.log(Object.keys(user));

// // hasOwnProperty()
// for (let key in user) {
//   if (user.hasOwnProperty(key)) console.log(key, user[key]);
// }

// console.log(Object.getOwnPropertyNames(user));

// {
//     value: "test",
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

const obj = {
  foo: "test",
};

console.log(Object.getOwnPropertyDescriptor(obj, "foo"));

// Object.defineProperty(obj, prop, desc)
//

let user = { age: 24 };
Object.defineProperty(user, "name", {
  value: "Neeraj",
  writable: true,
});

let descriptors = Object.getOwnPropertyDescriptor(user, "name");
let descriptorsAge = Object.getOwnPropertyDescriptor(user, "age");
console.log(descriptors, descriptorsAge);
user.name = "abc";
console.log(Object.keys(user));

// Object.freeze()
// Object.defineProperties(obj, {
// "value": {
//     writable: true,
//     value: true
// },
// "name": {
//     writable: true,
//     value: "Neeraj"
// }
// })
