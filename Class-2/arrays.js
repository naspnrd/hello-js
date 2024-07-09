// arrays
// it is a DS for storing a collection of multiple items under a single variable name

// Declarations

// let arr = new Array();
// let arr1 = []; // common way

// let fruits = ["Mango", "Apple"];
// //              0         1

// console.log(fruits[0]); // Mango
// console.log(fruits[1]); // Apple
// console.log(fruits[2]); // undefined
// console.log(fruits.length); // 2
// console.log(fruits); // ["Mango", "Apple"];

// An array can store elements of any type

// let arr = [
//   "Apple",
//   {
//     name: "Neeraj",
//     age: 25,
//   },
//   false,
//   function () {
//     console.log("hello");
//   },
//   2,
// ];

// console.log(arr[3]());

// Almost everything in javascript is an object -> (4th Class)
// console.log(typeof arr); // object
// console.log(typeof {}); // object

// Array.isArray -> true

// console.log(Array.isArray(arr)); // true
// console.log(Array.isArray({})); // false
// console.log(Array.isArray([])); // true

// let arr = [];

// at method
// arr.at(i) => arr[i], if i > 0
// negative values of i, it steps back from the end of array

// let fruits = ["Apple", "Mango"];
//              0         1
//             -2        -1
// console.log(fruits.at(0)); // "Apple"
// console.log(fruits.at(-1)); // "Mango"
// console.log(fruits.at(-2)); // "Apple"
// console.log(fruits[-2]); // undefined

// push and pop => modifying original array
// push -> push new values at the end
// let returnedValue = fruits.push("Strawberry");
// console.log(returnedValue); // undefined

// console.log(fruits); // undefined

// console.log(fruits.pop());

// shift and unshift
// shift ->  modify original array
// removes the first element from an array and returns that element
// and remaining elements indices are updated accordingly
// modifying original array
// const removedFruit = fruits.shift();
// console.log(removedFruit);
// console.log(fruits);

// const words = ["one", "two", "three", "four"];
// for (let i = 0; i < words.length; i++) {
//   console.log(words[i]);
//   if (words[i] === "two") {
//     words.shift();
//   }
// }

// O/P
// "one"
// "two"
// "four"

// unshift =>  modify original array
// add one or more elements to the beginning of an array
// returns new length of array

// const newLength = fruits.unshift("kiwi", "berry");
// console.log(newLength, fruits);

// concat -> does not modify original array
// used to merge two or more arrays. and returns new array

// const fruits1 = ["apple", "banana"];
// const fruits2 = ["mango", "kiwi"];
// const mergedFruits = fruits2.concat(fruits1);
// console.log(mergedFruits);

// splice and slice
// splice
// How to delete an element from the array?
// The arrays are objects, so we can try to use delete;

// let fruits = ["Apple", "Mango"];
// delete fruits[0];
// console.log(fruits[0]);

// splice can do everything: insert, remove and replace element
// Array.splice(start[, deleteCount, elem1, ..., elemN])
// It modifies arr starting from the index start: remove deleteCount elements
// and then inserts elem1, ...., elemN at their place.
// Returns the array of removed elements

// let arr = ["we", "are", "learning", "javascript"];
// //          0      1        2             3

// // let removedElements = arr.splice(1, 2); // from index 1 remove 2 element

// // console.log(removedElements, arr);

// let removedElements = arr.splice(1, 2, "love", "3000", "react and "); // from index 1 remove 2 element

// console.log(removedElements, arr);

// Negative indices
// let arr = [1, 2, 5];
// //         0  1  2
// //        -3 -2 -1

// arr.splice(-1, 0, 3, 4);
// console.log(arr); // 1, 2, 3, 4, 5

// var fruits = ["Apple", "Orange", "Kiwi", "Strawberry"];
// fruits.splice(1, 0, "Banana");
// console.log(fruits);

// slice method
// arr.slice([start], [end])

// it returns a new array copying to it all items from index start to end(not including end)
// both start and end can be negative, in that case position from array end is assumed

const nums = [1, 2, 3, 4, 5];
//            0  1  2  3  4
//           -5 -4 -3 -2 -1
// const slicedNumbers = nums.slice(1, 4);
// console.log(slicedNumbers); // [2, 3, 4]

// const slicedNumbers = nums.slice(1); // implicity end = nums.length => 5
// console.log(slicedNumbers); // [2, 3, 4, 5]

// const slicedNumbers = nums.slice(-2);
// console.log(slicedNumbers); // [4, 5]

const slicedNumbers = nums.slice(-4, -2);
console.log(slicedNumbers); // [2, 3]

// inplace(without using extra memory) and outplace(using extra memeory)?
