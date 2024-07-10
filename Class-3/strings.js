// string methods
// length
// returns the length of a string
// const str = "Hello, World!";
//           0123456789101112
// console.log(str.length);

// // slice method (startIndex, endIndex)
// // Extracts a section of a string and returns it as new string
// console.log(str.slice(7, 12)); // World
// console.log(str.slice(-4, -2)); // rl

// // substring method (startIndex, endIndex)
// // similar to slice() but does not allow negative index

// console.log(str.substring(7, 12)); // World

// console.log(str.substring(-4, -2)); // rl

// replace(searchValue, replaceValue)
// console.log(str.replace("World!", "Universe"));

// replaceAll(searchValue, replaceValue)

// console.log(str.replaceAll(/o/g, "0"));

// toUpperCase and toLowerCase();

// const str = "Hello, World!";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// concat(str1, str2, ...)
// const str1 = "hello";
// const str2 = "world";

// console.log(str1.concat(", ", str2, "!"));
// console.log(str1 + ", " + str2 + "!");

// trim()
// Removes whitespaces from both ends of a string.
// const str = "    Hello,   World!      ";
// console.log(str);
// console.log(str.trim());

// charAt(index)

// const str = "Hello, World!";
// console.log(str.charAt(3));

// charCodeAt(index)

// console.log(str.charCodeAt(0));

// split(separator, limit)

const str = "Hello, World!";

console.log(str.split(""));
