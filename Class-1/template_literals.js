// `` // backtick
// ~ tild
// `${}` -> JS expression

var name = "Neeraj";
var age = 25;
var greeting = `Hello, ${name} ${age}`;

console.log(greeting);

// multiline strings

var message = `
    hello, ${name},
    Welcome to JavaScript Classes.
`;

console.log(message);

// will throw error
// ""
var message1 = "
    hello, ${name},
    Welcome to JavaScript Classes.
";