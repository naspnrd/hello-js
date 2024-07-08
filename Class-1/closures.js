// closures
// Functions along with it's lexical scope bundled together
// in layman terms => the returning function has access to the
// outer and enclosing scope

function outerFunction() {
  const outerVar = "I'm an outer variable";
  function innerFunction() {
    console.log(outerVar, a, b);
  }
  return innerFunction;
}

var a = 10;
let b = 10;
const innerFunc = outerFunction();
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());

// Uses -> HW
// Memoization
// Currying
// Data Hiding ie Encapsulation
// Currying

// Disadvantages - HW
// Memory leakage

// Garbage Collected - HW
