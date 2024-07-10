const arr = ["Neeraj", "Chaudhary", "25", "26"];

// // const firstName = arr[0];
// // const lastName = arr[1];

const [firstName, lastName, ...rem] = arr; // error

console.log(rem);

// const nestedArray = [1, [2, 3], 4];

// const [a, [b, c], d] = nestedArray;

// console.log(a, b, c, d);

// const arr = ["Neeraj"];

// const [firstName = "John", lastName = "Cena"] = arr;

// console.log(firstName, lastName);
