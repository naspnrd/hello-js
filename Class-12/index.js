// console.log("One");
// console.log("Two");
// function logThree() {
//   console.log("Three");
// }
// logThreeAndFour(); // hoisting
// function logThreeAndFour() {
//   logThree();
//   console.log("Four");
// }
// logThreeAndFour();

// function longRunningTask() {
//   let count = 0;
//   for (let j = 0; j < 1e9; j++) {
//     count++;
//   }
//   console.log("Long task done");
// }

// function importantTask() {
//   console.log("Important");
// }

// longRunningTask();
// importantTask();

navigator.geolocation.getCurrentPosition(
  (position) => console.log(position), // success callback
  (error) => console.log(error) // failure/error callback
);
