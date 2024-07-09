// Topics -> Function Declaration, Func Expression, Anonymous Func,
// Diff between parameter and arguments, First class Functions/Citizens,
// arrow functions, IIFE
// (Pure/Impure functions -> HW)

// Function Declaration vs Func Expression

// Function Declaration/Statement
// a(); // it will work
// c();
// b(); // throw error
// console.log(d); // throw error
// function a() {
//   console.log("a is called");
// }

// // Function Expression

// let b = function () {
//   console.log("b is called");
// };
// d = 9; // not hoisted

// var c = function () {
//   console.log("c is called");
// };

// a();
// b();

// Anonymous func -> func without a name
// function () {
//     console.log("c is called");
//   };

// Named Function expression

// let b = function xyz(c) {
//   console.log("b is called");
//   return c;
// };

// let c = function () {
//   console.log("b is called");
// };
// // xyz();
// b(c);

// Arrow Functions
// ES6 version in 2015
// offers new syntax for writing functions
// => (token) -> fat arrow

// function sum(a, b) {
//   return a + b;
// }

// // An arrow function expression is an anonymous function expression
// // written with the fat arrow(=>)

// var sum = (a, b) => {
//   return a + b;
// };

// var sum1 = (a, b) => a + b; // implicitly means return
// console.log(sum1(1, 2));

// IIFE (Immediately Invoked Function Expression)
// (() => {
//   console.log("hi");
// })();

// (function a() {
//   console.log("hello");
// })();

// a();
