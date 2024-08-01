// async function abc() {
//   return 1; // return Promise.resolve(1)
// }

// const p2 = abc();
// console.log(p2);

// p2.then((res) => console.log(res)) // 1
//   .catch((err) => console.log(err));

// const bcd = async () => 5; // arrow functions
// let p1 = bcd();

// console.log(p1);
// p1.then((res) => console.log(res)) // 5
//   .catch((err) => console.log(err));

// console.log("start");
// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(4), 10000);
//   });
//   let result = await promise; // wait until the promise is resolved
//   // function execution gets paused at line 22 and resume when promise settles with result
//   console.log(result);
//   //   await promise;
//   return result;
// }

// f();
// //   .then((val) => {
// //     console.log(val);
// //   })
// //   .catch((err) => console.log(err));

// console.log("end");

// O/P
// start
// end
// 4

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value!");
//   }, 10000);
// });

// async function handlePromise() {
//   console.log("Hello World");
//   const val = await p;
//   console.log("Hello Everyone");
//   console.log(val);
//   const val2 = await p;
//   console.log("Hello Everyone Once Again");
//   console.log(val2);
// }

// handlePromise();

// code of 10 millions in sync -> 10 minutes

// O/P
/*
    Hello World
    Hello Everyone
    Promise Resolved Value!
    Hello Everyone Once Again
    Promise Resolved Value!
 */

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value 1");
//   }, 5000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value 2");
//   }, 10000);
// });

// async function handlePromise() {
//   console.log("Hello World");
//   const val = await p1;
//   console.log("Hello Everyone");
//   console.log(val);
//   const val2 = await p2;
//   console.log("Hello Everyone Once Again");
//   console.log(val2);
// }

// handlePromise();

/*
    Hello World
    Hello Everyone
    Promise Resolved Value 1
    Hello Everyone Once Again
    Promise Resolved Value 2
 */

// Error Handling
// for promises -> .catch() => for error handling
// but in async and await we don't have .catch() method

// we will using try-catch block to handle errors

async function f() {
  try {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(4), 1000);
    });
    let result = await promise; // wait until the promise is resolved
    // function execution gets paused at line 22 and resume when promise settles with result
    console.log("result----", result);
    //   await promise;
    return result;
  } catch (error) {
    console.log("catch---", error);
  }
}

f();
