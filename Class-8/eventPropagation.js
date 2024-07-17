document.getElementById("grandParent").addEventListener(
  "click",
  (event) => {
    event.stopPropagation();
    console.log("GrandParent Clicked!");
  },
  true
);

document.getElementById("parent").addEventListener(
  "click",
  (event) => {
    // event.stopPropagation();
    console.log("Parent Clicked!");
  },
  true
);

document.getElementById("child").addEventListener(
  "click",
  (event) => {
    // event.stopPropagation();
    console.log("Child Clicked!");
  },
  true
);

// document.querySelector("body").addEventListener(
//   "click",
//   () => {
//     console.log("Body Clicked!");
//   },
//   true
// );

// document.addEventListener(
//   "click",
//   () => {
//     console.log("document Clicked!");
//   },
//   true
// );
// window.addEventListener(
//   "click",
//   () => {
//     console.log("window Clicked!");
//   },
//   true
// );
