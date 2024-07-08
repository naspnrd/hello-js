// scope
// where you can access a spefici variable, func and object inside the code

// function f() {
//   console.log("print a ---", a);
// }

// var a = 5;
// f();

// function f() {
//   function c() {
//     console.log("print a ---", a);
//   }
//   c();
// }

// var a = 5;
// f();
// Lexical Env => local memory along with lexical env of it's parent

// Type of scopes
// 1. Global Scope
//
// var a = "I'm global variable"; // global

// b = 5; // global

// function foo() {
//   console.log(a, b, c, d);
// }

// let c = 6; // script scope
// const d = 9; // script scope

// foo();

// local Scope (Function Scope)

function foo() {
  // local scope
  // block scope
  function foo1(){
    let d = 10;
  }

//   let d = 8; // local scope
  {
    let d = 9; // block scope
  }
  console.log(d);
  {
  }
  {
  }
  console.log(d);
}
if(){

} else {

}

{

    {
        {
            {
                {
                    let d =10;
                }
                console.log(d)
            }
        }
    }
}
// foo();
// console.log(a, b);

// Block Scope
// let and const
// block

let a = 5;
const b = 10;

{
  let a = 5;
  const b = 6;
  var c = 10;
  //   console.log(a, b);
}

// console.log(a, b);
console.log(c);
