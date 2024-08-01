// Promise.all()
// from 4 promises
// Promise.all() => helps you to parallelly fetch that data

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(3), 3000);
// });

// // const p2 = false; // it converts non promise values to promise
// const p2 = 4; // it converts non promise values to promise
// // Promise.resolve()
// // const p2 = Promise.resolve(true);
// // const p4 = Promise.reject(6);
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(1), 2000);
//   //   setTimeout(() => reject(1), 3000);
// });

// let promise = Promise.all([p1, p2, p3]);
// promise.then((res) => console.log(res)).catch((error) => console.log(error));

// You can't cancel a promise in between once it's created, not supported right now

// Promise.race()
// but wait's only for first settled(fulfilled or rejected) promise and get it's result or error

// let promise = Promise.race([p1, p3]);

// promise.then((res) => console.log(res)).catch((error) => console.log(error));

// Promise.any();
// waits only for first fulfilled promise and get it's result
// If all of the promises are rejected, then returned promise is rejected with AggregateError
// It's a special error object that stores all promise errors

// Promise.any([p1, p3])
//   .then((res) => console.log(res))
//   .catch((error) => {
//     console.log(error.errors);
//     console.log(error.constructor.name);
//     console.log(error.errors[0]);
//     console.log(error.errors[1]);
//   });

// Promise.allSettled()
// returns a new Promise that resolves after all of the given promises have either
// fulfilled or rejected
// array of objects
// {
//     status: "fulfilled", value: result, // for success response
//     status: rejected, reason: error // for error
// }

// Promise.allSettled([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

// Practice Questions

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 10);

// setTimeout(() => {
//   console.log(3);
// }, 0);
// new Promise((_, reject) => {
//   console.log(4);
//   reject(5);
//   console.log(6);
// })
//   .then(() => console.log(7))
//   .catch(() => console.log(8))
//   .then(() => console.log(9))
//   .catch(() => console.log(10))
//   .then(() => console.log(11))
//   .then(console.log)
//   .finally(() => console.log(12));
// console.log(13);

// new Promise((resolve, reject) => {
//   resolve(1);
//   resolve(2);
//   reject("error");
// })
//   .then(
//     (value) => {
//       console.log(value);
//     },
//     (error) => {
//       console.log(error);
//     }
//   )
//   .catch((error) => console.log(error)); // .then(_, onRejected)
// .then(onFillFilled, onRejected)
// O/P
// 1

Promise.resolve(1)
  .then((val) => {
    console.log(val); // 1
    return val + 1;
  })
  .then((val) => {
    console.log(val); // 2
  })
  .then((val) => {
    console.log(val); // undefined
    return Promise.resolve(3).then((val) => {
      console.log(val); // 3
      // return val;
      // returns nothing
      // will return undefined
    });
  })
  .then((val) => {
    console.log(val); // undefined
    return Promise.reject(4);
  })
  .catch((val) => {
    console.log(val); // 4
    // return 10;
  })
  .finally((val) => {
    console.log(val); // undefined
    // return 10;
    throw new Error("error");
  })
  .then((val) => {
    console.log(val); // undefined
  })
  .catch((err) => console.log("catch--", err.message));

// Promise.reject(1)
//   .finally(() => {
//     throw new Error(2);
//   })
//   .then((val) => console.log(val))
//   .catch((err) => console.log(err));
// // or
// Promise.reject(1).finally(() => {
//   return Promise.reject(2);
// });

// Promise.reject(1)
//   .catch((val) => {
//     console.log(val); // 1: rejected value is 1
//     // returns nothing
//     // will return undefined for promise object
//   })
//   .then((val) => {
//     console.log(val); // undefined
//     // returns nothing
//     // will return undefined for promise object
//   });
