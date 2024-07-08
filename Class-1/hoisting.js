// Hoisting in js is a phenomenon by which we can access
// the variables and functions before we initialize it.

// foo();
// console.log(x);
// var x = 10;
// console.log(x);
// // foo();
// console.log(x);
// function foo() {
//   console.log("Hello, I'm foo!");
// }

// // post hoisting

// function foo() {
//   console.log("Hello, I'm foo!");
// }
// var x;
// console.log(x);
// x = 10;
// console.log(x);
// foo();

// console.log(a);
// // console.log(b);
// var a = 6;
// let b = 10;
// console.log(b);

// let a = 7;
// a = 9;
// const b = 10;
// b = 11;

// foo();
// function foo() {
//   console.log("foo");
// }
// console.log(foo);
// var foo = 10;
// console.log(foo);

// // O/P

// function foo() {
//   console.log("foo");
// }

// var foo;

// var a = 123;
// var b = "abc";

// function foo() {
//   var e = 456;
// }

// // post hoisting
// // function declaration
// function foo() {
//   var e;
//   e = 456;
// }
// var a;
// var b;

// a = 123;
// b = "abc";
