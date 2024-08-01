// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then((result) => {
//     console.log(result); // 1
//     // return result * 2; // Resolve // 1 * 2 // 2
//     return Promise.resolve(result * 2); // Resolve
//   })
//   .then((result) => {
//     console.log(result); // 2
//     return result * 2; // Resolve // 2 * 2 // 4
//   })
//   .then((result) => {
//     console.log(result); // 4
//     return result * 2; // 8
//   })
//   .catch((error) => console.log(error));

// // Promise.resolve() => convert non promise value to promise value
// // Promise.reject()

// Promise.resolve(1).then((res) => console.log(res));
// Promise.reject(12).catch((err) => console.log(err));

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// });

// promise.then((result) => {
//   console.log(result); // 1
//   return result * 2; // 1 * 2 = 2
// });

// promise.then((result) => {
//   console.log(result); // 2
//   return result * 2; // 2 * 2 = 4
// });

// promise.then((result) => {
//   console.log(result); // 4
//   return result * 2; // 4 * 2 = 8
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then((result) => {
//     console.log(result); // 1
//     // return result * 2; // Resolve // 1 * 2 // 2
//     // return Promise.resolve(result * 2); // Resolve
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2));
//     });
//     // .then((res) => console.log(res));
//   })
//   .then((result) => {
//     console.log(result); // 2
//     return result * 2; // Resolve // 2 * 2 // 4
//   })
//   .then((result) => {
//     console.log(result); // 4
//     return result * 2; // 8
//   })
//   .catch((error) => console.log(error));

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then((result) => {
//     console.log(result); // 1
//     // // return result * 2; // Resolve // 1 * 2 // 2
//     // return Promise.resolve(result * 2); // Resolve
//     // implicity return a promise
//   })
//   .catch((error) => console.log(error));

// steps to make a sandwich
// 1. Get Bread
// 2. Take the bread and add veggies
// 3. If cheese is requested, add cheese to bread and veggies
// 4. If toast is requested, toast the sandwich, if not serve it.
// 5. Ask for toppings and then serve the sandwich

function getBread() {
  return new Promise((resolve, reject) => {
    let sandwich = []; // Initialize the sandwich array with bread
    sandwich.push("bread");
    console.log("Sandwich so far:", sandwich);
    // Proceed to next step, add veggies
    resolve(sandwich);
  });
}

function addVeggies(sandwich) {
  return new Promise((resolve, reject) => {
    const veggies = ["tomato", "jalepeno", "cucumber"];
    sandwich.push(...veggies);
    console.log("Sandwich so far:", sandwich);
    // Proceed to next step, add veggies
    resolve(sandwich);
  });
}

function addCheese(sandwich, addCheese) {
  return new Promise((resolve, reject) => {
    if (addCheese) sandwich.push("cheese");
    console.log("Sandwich so far:", sandwich);
    resolve(sandwich);
  });
}

function toastSandwich(sandwich, addToast) {
  return new Promise((resolve, reject) => {
    if (addToast) sandwich.push("toasted");
    console.log("Sandwich so far:", sandwich);
    resolve(sandwich);
  });
}

function addToppingsAndServe(sandwich) {
  return new Promise((resolve, reject) => {
    let toppings = ["lettuce", "mayo", "sweet chilli"];
    sandwich.push(...toppings);
    console.log("Sandwich so far:", sandwich);
    console.log("Sandwich is ready to be served");
    resolve(sandwich);
  });
}

// promise chaining
getBread()
  .then(addVeggies)
  .then((sandwich) => addCheese(sandwich, false))
  .then((sandwich) => toastSandwich(sandwich, false))
  .then(addToppingsAndServe)
  .catch((error) =>
    console.log("error occured while preparing sandwich", error)
  );

getBread().then().catch();
