// const arr = [1, 2, 3];
// const arr1 = [1, 2, 3];
// console.log(arr);
// console.log(...arr); // 1 2 3

// const arr3 = [...arr, ...arr1];
// console.log(arr3);

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(...arr));

const obj1 = { name: "neeraj" };
const obj2 = { age: 25 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// rest

const arr = [1, 2, 3, 4, 6, 7, 6];
const [a, b, ...rest] = arr;

console.log(a, b, rest);

function sum(a, b, c, ...rem) {
  //   console.log(rem);
  // arguments
  console.log(arguments[2]); // deprecated
  //   console.log(Array.from(arguments));
  console.log([...arguments]);
  return a + b + c;
}

console.log(sum(...arr));
