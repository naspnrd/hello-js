// console.log("start");
// document.getElementById("btn").addEventListener("click", () => {
//   console.log("callback");
// });
// console.log("end");

// console.log("end");
// console.log("end");
// console.log("end");
// console.log("end");
// console.log("end");
// console.log("end");
// setTimeout(() => {
//   console.log("callback");
// }, 100);
// // these -> 1 seconds
// console.log("end");
// console.log("end");
// console.log("end");
// console.log("end");
// console.log("end");
// console.log("end");
// console.log("end");
// console.log("end");
// console.log("end");
// console.log("end");
// console.log("end");

console.log("start");
setTimeout(() => {
  console.log("callback");
}, 0); // 0 milliseconds
let startDate = new Date().getTime(); // 11:11
let endDate = startDate; // 11:11
while (endDate < startDate + 60000) {
  // 11:12
  endDate = new Date().getTime(); // 11:11, 11:11, 11:12
  // console.log(endDate);
}
console.log("end");
