// console.log("Hello");
// console.log("Everyone");
// console.log("Welcome to JS Classes");

// console.log("Hello");
// setTimeout(() => {
//   console.log("Everyone");
// }, 2000);
// console.log("Welcome to JS Classes");
// function x() {} // function statement

// function y(x) {
//   // y is higher order function, x is callback function
//   x();
// }
// y(x); // synchronously
// setTimeout(x, 2000); // async nature

// Example for building an ecommerce website
// 1. Adding items to cart
// 2. Create an Order
// 3. Payment

const cart = ["shoes", "pants", "kurta"];

// First create an order, once order is created then only proceed to payment
// so payment is dependent on createOrder success (so here we can use callback)
// as we have dependency in our code

// callbackHell refers to a situation were callbacks are nested within other callbacks
// several levels deep, potentially making it difficult to
// understand and maintain the code
// callback Hell also known as Pyramid of DOOM.
// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary(function () {
//       // TODO
//       api.updateWallet();
//     });
//   });
// });

// setTimeout(() => {
//   console.log("first callback");
//   setTimeout(() => {
//     console.log("second callback");
//     // bug got introduced
//     setTimeout(() => {
//       console.log("third callback");
//       setTimeout(() => {
//         console.log("fourth callback");
//         setTimeout(() => {
//           console.log("Fifth callback");
//           setTimeout(() => {
//             console.log("sixth callback");
//             setTimeout(() => {
//               console.log("seventh callback");
//             }, 2000);
//           }, 3000);
//         }, 1000);
//       }, 100);
//     }, 5000);
//   }, 500);
// }, 200);

// steps to make a sandwich
// 1. Get Bread
// 2. Take the bread and add veggies
// 3. If cheese is requested, add cheese to bread and veggies
// 4. If toast is requested, toast the sandwich, if not serve it.
// 5. Ask for toppings and then serve the sandwich

function fnc1(fnc2) {
  let sandwich = []; // Initialize the sandwich array with bread
  sandwich.push("bread");
  console.log("Sandwich so far:", sandwich);
  // Proceed to next step, add veggies
  fnc2(sandwich, fnc3);
}

function fnc2(sandwich, fnc3) {
  // Add veggies to sandwich
  const veggies = ["tomato", "jalepeno", "cucumber"];
  //   sandwich.push(veggies[0]);
  //   sandwich.push(veggies[2]);
  sandwich.push(...veggies);
  console.log("Sandwich so far:", sandwich);
  // Proceed to next step: optionally add cheese
  fnc3(sandwich, false, fnc4);
}

function fnc3(sandwich, addCheese, fnc4) {
  if (addCheese) sandwich.push("cheese");
  console.log("Sandwich so far:", sandwich);
  fnc4(sandwich, true, fnc5); // toast
}

function fnc4(sandwich, addToast, fnc5) {
  if (addToast) sandwich.push("toasted");
  console.log("Sandwich so far:", sandwich);
  fnc5(sandwich); // toast
}

function fnc5(sandwich) {
  let toppings = ["lettuce", "mayo", "sweet chilli"];
  sandwich.push(...toppings);
  console.log("Sandwich so far:", sandwich);
  console.log("Sandwich is ready to be served");
}

// Start the sandwich making process

fnc1(fnc2);
