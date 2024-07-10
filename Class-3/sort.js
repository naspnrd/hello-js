// sort method
//  in javascript to sort element in place we have sort method
// returns sorted array
// By default, sort method sorts the elements alphabetically when applied to string
// and numerically when applied to number
// you can provide custom sorting function to define the sort order

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);

// const fruits1 = ["Banana", "Baiana"];
// fruits1.sort();
// console.log(fruits1);

// with numbers
// using sort without a compare function will not give the proper result
// the numbers will be converted to strings and then comparison happens

// const numbers = [31, 10, 5, 2, 4];
// numbers.sort();
// console.log(numbers);

// function compare(a, b) {
//   if (a < b) return -1;
//   if (a > b) return 1;
//   return 0;
// }

function compare(a, b) {
  return a - b;
}

const numbers = [31, 10, 5, 2, 4];
// numbers.sort(compare);
numbers.sort((a, b) => a - b); // ascending [2, 4, 5, 10, 31]
numbers.sort((a, b) => b - a); // descending [31, 10, 5, 4, 2]
console.log(numbers);
