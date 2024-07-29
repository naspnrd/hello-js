// setTimeout -> Timers -> Web Apis
// 2 seconds, 4 seconds => delay -> milliseconds
// 1000ms => 1 seconds
//Syntax => setTimeout(callback_function, delay(in milliseconds), ...arguments);

// console.log("Before setTimeout");
// // setTimeout(() => {
// //   console.log("This runs after 2 seconds");
// // }, 2000);
// setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 5000);
// // 1000 lines of code => 30 seconds to execute

// console.log("After setTimeout");

// function greet(name, message) {
//   console.log(`Hello ${name}, ${message}`);
// }

// setTimeout(greet, 3000, "Neeraj", "Welcome to Acciojob as an instructor");

// let timerId = setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 5000);
// // 1000 lines of code => 30 seconds to execute

// console.log(timerId);
// clearTimeout(timerId);
// let y = 2;
// function x() {
//   var i = 2;
//   setTimeout(function () {
//     console.log(i, y);
//   }, 2000);
//   console.log("Javascript Classes");
// }

// x();

// function x() {
//   for (var i = 0; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Javascript Classes");
// }

// x();

// post hoisting
// function x() {
//   var i;
//   for (i = 0; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Javascript Classes");
// }

// x();

// O/P

// Javascript Classes
// 6
// 6
// 6
// 6
// 6
// 6

// Solutions

// 1. using let -> block scope

// function x() {
//   for (let i = 0; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Javascript Classes");
// }

// x();

// post hoisting

// function x() {
//   for (let i = 0; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Javascript Classes");
// }

// x();

// solution 2 without using let

function x() {
  for (var i = 0; i <= 5; i++) {
    function close(i) {
      // i has local scope
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i); // 0 // 1 // 2 // 3
  }
  console.log("Javascript Classes");
}

x();
