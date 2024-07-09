// HOF -> Higher order functions
// A function which takes another function as an argument
// or return a function from it known as HOF

// function x() {
//   console.log("Hello");
// }

// // now y is called HOF
// function y(x) {
//   x();
// }
// y(x);

// const radius = [3, 1, 2, 4];
// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };

// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };

// console.log(calculateCircumference(radius));

const radius = [3, 1, 2, 4];
// area, circumference, abc is callback functions
const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};
const abc = function (radius) {
  return radius * radius;
};
// calculate func is HOF
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, abc));
