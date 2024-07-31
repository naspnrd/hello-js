// // One way to create a promise is to using new Promise constructor
// // function, this constructor function => executor function
// // executor function => resolve, reject

// // promise state, promise result, promise fulfilled, rejected
// // promise settled, we also get some additional functionality to either
// // resolve or reject this promise

// // const promise = new Promise((resolve, reject) => {
// //   resolve(5);
// // }).then((result) => console.log(result));

// // console.log(promise);

// // new Promise((resolve, reject) => {
// //   //   setTimeout(() => resolve(5), 4000);
// //   //   resolve(6);
// //   reject(6);
// // })
// //   .then(
// //     (res) => console.log("res---", res)
// //     //   (err) => console.log("err----", err)
// //   ) // this then returns a promise
// //   //   .then(onFulfilled, onRejected);// syntax
// //   .catch((err) => console.log("catch", err)) // call then method => .then(_, onRejected);
// //   .then(() => {
// //     // TODO
// //   });
// //   .finally(() => {
// //     console.log("finally");
// //   });
// //   .then((res) => console.log(res));
// // promise.then((result) => console.log(result, promise));

// // console.log(promise);
// // console.log(console.log(1));
// // then(onFullfilled, onRejected)

// // try {
// // } catch (error) {
// // } finally {
// // }

// // api.createOrder(cart, function () {
// //   api.proceedToPayment(function () {
// //     api.showOrderSummary(function () {
// //       // TODO
// //       api.updateWallet();
// //     });
// //   });
// // });

// const cart = ["shoes", "pants", "kurta"];
// // const cart = [];

// function createOrder(cart) {
//   return new Promise((resolve, reject) => {
//     // create order
//     // validate cart
//     // orderId generated
//     if (!validateCart(cart)) {
//       reject(new Error("cart is not valid"));
//     }
//     const orderId = "123";
//     if (orderId) {
//       setTimeout(() => {
//         resolve(orderId);
//       }, 2000);
//     }
//   });
// }

// function validateCart(cart) {
//   return cart.length > 0;
//   // undefined.length => throw error ?. => optional chaining(HW)
// }

// function proceedToPayment(orderId) {
//   return new Promise((resolve, reject) => {
//     if (orderId) {
//       resolve("Payment Successful");
//     } else {
//       reject(new Error("Payment Unsuccessful"));
//     }
//   });
// }

// // createOrder(cart)
// //   .then((orderId) => {
// //     console.log(orderId);
// //     return orderId; // return a promise
// //     // implicit return undefined
// //   })
// //   .then((orderId) => {
// //     return proceedToPayment(orderId);
// //   })
// //   .then((paymentInfo) => {
// //     console.log(paymentInfo);
// //   })
// //   .catch((error) => console.log(error.message));

// // promise Hell
// // createOrder(cart).then((orderId) => {
// //   console.log(orderId);
// //   return proceedToPayment(orderId).then((paymentInfo) =>
// //     console.log(paymentInfo)
// //   );
// // });

// // promise chaining

// createOrder(cart)
//   .then((orderId) => {
//     console.log(orderId);
//     return orderId; // return a promise
//     // implicit return undefined
//   })
//   .catch((error) => console.log(error.message))

//   .then((orderId) => {
//     return proceedToPayment(orderId);
//   })

//   .then((paymentInfo) => {
//     console.log(paymentInfo);
//   })
//   .catch((error) => console.log(error));

// navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position), // success callback
//   (error) => console.log(error) // failure/error callback
// );

// function getCurrentPosition() {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// getCurrentPosition()
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error.message));

// Examples

// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });
// promise1.then((res) => {
//   console.log(res);
// });
// console.log("end");

// O/P
// start
//  1
// end
//  2

// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// });
// promise1.then((res) => {
//   console.log(res);
// });
// console.log("end");

// O/P
// start
// 1
// 3
// end
// 2

console.log("start");
const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});
promise1.then((res) => {
  console.log(res);
});
console.log("end");

// O/P
// start
// 1
// end
