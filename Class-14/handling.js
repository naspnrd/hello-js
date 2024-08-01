// try ... catch statement

// try => allow you to test a block of code for errors
// catch -> to handle errors if they occur

// works on sync code, ie don't work with promises but works with async/await
// try {
//   // Code that may throw an error
//   let jsonString = '{"name": "Neeraj", "age": 30}';
//   let user = JSON.parse(jsonString);
//   console.log(user.name);
// } catch (error) {
//   // code to handle the error
//   console.log("Failed to parse JSON:", { error });
// } finally {
//   console.log("I will run no matter if error occurs or not");
// }

// sync
// try {
// } catch (error) {}
// finally{

// }

// promises
// .then(onFulFilled, onRejected)
// .catch(callback) => .then(_, callback)

new Promise((resolve, reject) => {
  //   reject(2);
  resolve(2);
})
  .then((res) => console.log(res))
  .catch((error) => console.log(error))
  .finally((a) => {
    // finally does not accept any parameters
    console.log(a);
  });

let a = 2;
let b = 2;
