// Map, filter and Reduce -> one of most interview questions -> polyfill

// feature introduced in 2024 -> abc()
// abc()
// browser -> 2020 (last update)

// Babel -> transpiler => compiler that write polyfills for you

// map() - doesn't modify the original array
// returns new transformed array
// It is used to do transformation on whole array
// const arr = [1, 2, 3, 4];

// Double the elements of array [2, 4, 6, 8]

// Triple -> [3, 6, 9, 12]

// const doubledResult = arr.map(double);
// const tripledResult = arr.map(triple);

// // const doubledResult = arr.map(function (x) {
// //   return 2 * x;
// // });

// // const doubledResult = arr.map((item) => 2 * item);

// console.log(doubledResult, tripledResult);

// function double(x) {
//   return 2 * x;
// }
// function triple(x) {
//   return 3 * x;
// }

// const result = arr.map(double).map(triple); // chaining
// const result = [2, 4, 6, 8].map(triple); // chaining
// const result = [6, 12, 18, 24]; // chaining

// console.log(result);

// filter()
// It is used to filter values inside an array

// const arr = [1, 2, 3, 4];
// filter out the even values
// filter out the odd values
// filter out value greater 2

// const oddResult = arr.filter((item, index, arr) => item % 2 !== 0);
// const oddResult = arr.filter((item) => item % 2);
// const evenResult = arr.filter((item) => item % 2 === 0);
// console.log(oddResult, evenResult);

// reduce()
// arr.reduce(callback, initialValue(optionalValue))

// const arr = [1, 2, 3, 4];

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// const output = arr.reduce((accumulator, currentValue, index, arr) => {
//   accumulator += currentValue;
//   console.log(index, arr, accumulator);
//   return accumulator;
// }, 0);

// // const output = arr.reduce((accumulator, currentValue, index, arr) => {
// //   accumulator += currentValue;
// //   console.log(index, arr, accumulator);
// //   return accumulator;
// // });

// console.log(output);

// const arr = [1, 2, 3, 4];

// arr.forEach((item, index) => {
//   console.log(item, index);
// });

// Q.1 Diff between forEach and map, filter
// Q.2 Diff between forEach and for loop -> can't use break or continue
// statements in forEach loop
