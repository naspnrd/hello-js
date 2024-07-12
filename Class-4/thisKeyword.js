// // scrict mode and sloppy mode
// // scrict mode is a javascript feature that makes the interpreter more strict with js
// // syntax reducing the likelihood of mistakes in your code

// // coding in sloppy mode

// // "use strict";
// // // continue coding in strict mode
// // console.log("hi");

// // function strictFunc(a = 10) {
// //   "use strict";
// //   // code in script mode
// // }

// // function strictFunc(...params) {
// //     "use strict"; // syntax error
// //     // code in script mode
// //   }
// //   function strictFunc({params}) {
// //     "use strict"; // syntax error
// //     // code in script mode
// //   }

// // Automatic strict mode
// // 1. Classes
// // 2. modules
// // 3. JSON

// // Undeclared varaibles
// // In strict mode, you can't re-declare a variable using var, let or const;
// // This feature prevents us from creating global variables

// "use strict";
// // firstName = "Neeraj";
// firstName = "Neeraj"; // review comments

// // Object property assignment

// // Non-writable property
// // Getter-only property
// // Non-extensible object

// this substitution
// if the value of this is undefined or null, this will be replaced by global object
// (window) (browser) , global(Nodejs) only in non-strict mode

// in strict mode
// "use strict";
// console.log(this); // global object
// function abc() {
//   // value depends on strict or sloppy mode
//   console.log(this); // undefined
// }
// abc();
// window.abc(); // global object

// const calc = {
//   num: 0,
//   increment() {
//     console.log(this);
//     // console.log(calc);
//     console.log(this === calc);
//     this.num += 1;
//     return this.num;
//   },
// };

// const calc1 = {
//   ...calc,
//   name: "Neeraj",
// }; // cloning

// console.log(calc);
// console.log(calc.increment()); // true // 1 // method invocation
// // increment() // function invocation
// // console.log(calc.increment());
// // console.log(calc.increment());

// // const func = calc.increment;
// console.log(func);
// console.log(func()); // false // NaN // function invocation

// const numbers = {
//   numA: 5,
//   numB: 10,
//   sum: function () {
//     // method
//     // outer func
//     console.log("sum--", this); // numbers
//     console.log(this === numbers); // true
//     function calculate() {
//       // function
//       // inner function
//       console.log("calcualte--", this); // global object
//       console.log(this === numbers); // false
//       return this.numA + this.numB; // NaN
//     }
//     // const calculate = function () {};
//     return calculate(); // function invocation
//   },
// };

// console.log(numbers.sum()); // method invocation
// // numbers.calculate
// // or numbers.sum.calculate

// answers

// const numbers = {
//   numA: 5,
//   numB: 10,
//   sum: function () {
//     console.log("sum--", this); // numbers
//     console.log(this === numbers); // true
//     const context = this;
//     function calculate() {
//       console.log("calcualte--", context); // global object
//       console.log(context === numbers); // false
//       return context.numA + context.numB; // NaN
//     }
//     return calculate(); // function invocation
//   },
// };

// console.log(numbers.sum());

// const numbers = {
//   numA: 5,
//   numB: 10,
//   sum: function () {
//     console.log("sum--", this); // numbers
//     console.log(this === numbers); // true
//     const calculate = () => {
//       console.log("calcualte--", this); // global object
//       console.log(this === numbers); // false
//       return this.numA + this.numB; // NaN
//     };
//     return calculate(); // function invocation
//   },
// };

// console.log(numbers.sum());

// arrow functions

// external binding -> call, bind and apply

// call() method // function borrowing

let name1 = {
  firstName: "Neeraj",
  lastName: "Chaudhary",
  //   printFullName: function () {
  //     console.log(this.firstName + " " + this.lastName);
  //   },
};
const printFullName = function (hometown, profession) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      hometown +
      " working as " +
      profession
  );
};

// name1.printFullName(); // Neeraj Chaudhary
// printFullName.call(name1, "Bengaluru", "FE"); // Neeraj Chaudhary
let name2 = {
  firstName: "Rahul",
  lastName: "Jain",
  //   printFullName: function () {
  //     console.log(this.firstName + " " + this.lastName);
  //   },
};
// name1.printFullName.call(name2); // Rahul Jain
// printFullName.call(name2, ...["Mathura", "Developer"]); // Rahul Jain
// printFullName.call(name2, ...["Mathura", "Developer"]); // Rahul Jain
// printFullName.call(name2, ...["Mathura", "Developer"]); // Rahul Jain
// printFullName.call(name2, ...["Mathura", "Developer"]); // Rahul Jain

// // apply()
// printFullName.apply(name2, ["Mathura", "Developer"]); // Rahul Jain
//

// bind()
// returns a function
// so that you can that func whenever you want
// const printMyName2 = printFullName.bind(name2, "Mathura", "Developer");
// const printMyName1 = printFullName.bind(name1, "Mathura", "Developer");
// printMyName2();
// printMyName2();
// printMyName2();
// printMyName2();

// const numbers = {
//   numA: 5,
//   numB: 10,
//   sum: function () {
//     console.log("sum--", this); // numbers
//     console.log(this === numbers); // true
//     function calculate() {
//       console.log("calcualte--", this); //
//       console.log(this === numbers); //
//       return this.numA + this.numB; //
//     }
//     return calculate.call(numbers); // function invocation
//   },
// };

// console.log(numbers.sum());
