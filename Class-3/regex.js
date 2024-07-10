// RegEx menans Regular Expressions are powerful patterns used to
// match and manipulate text

// let regExp = new RegExp("pattern", "flags");

// regExp = /pattern/; // no flags // static means it doesn;t allow
// // for expression to be inserted
// regExp = /pattern/gim;

// Flags
// i -> with this flag search is case-insensitive

// g -> with this flag the search looks for all matches, without it -> only the
// first match is returned

// m -> multiline mode

// y -> sticky mode: searching at the exact position in the text

// u -> Enables full Unicode support

// let num = 1;
// let str = "Neeraj";
// let regex = new RegExp("[0-9]");
// console.log(regex.test(num)); // true
// console.log(regex.test(str)); // false

let re = "Hello Studytonight";
let result = /hello/i.test(re);
console.log(result); // true
