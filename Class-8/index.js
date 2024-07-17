// function callMe(button) {
//   debugger;
//   console.log("button Clicked", { button });
//   button.classList.toggle("primary");
//   button.disabled = true;
//   button.draggable = true;
// }

// function createBoldElement() {
//   let b = document.createElement("b");
//   b.innerText = "Neeraj Chaudhary";
//   let container = document.querySelector("#container");
//   container.appendChild(b);
// }

const students = [
  {
    name: "Neeraj",
    age: 23,
  },
  {
    name: "Danish",
    age: 25,
  },
  {
    name: "Anjana",
    age: 22,
  },
  {
    name: "Ankit",
    age: 29,
  },
  {
    name: "Himanshu",
    age: 25,
  },
  {
    name: "Mukul",
    age: 23,
  },
];

// const container = document.getElementById("container");
// function createStudent(event) {
//   console.log(event);
//   students.forEach((student) => {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     const name = document.createElement("span");
//     const age = document.createElement("span");
//     name.innerText = student.name;
//     age.innerText = student.age;
//     // appendChild() -> apend one child at a time
//     // append() -> apend more than one child at a time
//     card.append(name, age);
//     container.appendChild(card);
//   });
// }
// function handleClick() {
//   console.log("again");
// }
// const btn = document.getElementById("btn"); // accessing button
// btn.addEventListener("click", createStudent); // adding an event listener
// btn.addEventListener("click", handleClick); // adding an event listener
// // btn.removeEventListener("click", handleClick);

// const btn = document.getElementById("btn");

// function handleClick(event) {
//   console.log("Button Clicked");
//   console.log("Event type: ", event.type);
//   console.log("Target Element: ", event.target);
//   console.log("Current Target Element: ", event.currentTarget);
//   event.preventDefault();
//   event.stopPropagation();
// }
// btn.addEventListener("click", handleClick);

// btn.addEventListener("click", function (event) {
//   console.log("Button Clicked", event);
//   console.log("Event type: ", event.type);
//   console.log("Target Element: ", event.target);
//   console.log("Current Target Element: ", event.currentTarget);
//   event.preventDefault();
//   event.stopPropagation();
// });

// const input = document.querySelector("input");
// input.addEventListener("focus", function (event) {
//   console.log("focused", event);
// });

// input.addEventListener("blur", function (event) {
//   console.log("blurred", event);
// });

// input.addEventListener("input", function (event) {
//   console.log("input", event.target.value);
// });

// input.addEventListener("change", function (event) {
//   console.log("change", event.target.value);
// });

const inpElement = document.getElementById("textInput");
const outElement = document.getElementById("output");

inpElement.addEventListener("keydown", (event) => {
  console.log("key down:", event.key);
  console.log("key down:", event.code);
  console.log("key down:", event.keyCode);
  outElement.textContent = `key down: ${event.key} (code: ${event.code}, keyCode: ${event.keyCode})`;
});

inpElement.addEventListener("keyup", (event) => {
  console.log("key up:", event.key);
  console.log("key up:", event.code);
  console.log("key up:", event.keyCode);
  outElement.textContent += `key up: ${event.key} (code: ${event.code}, keyCode: ${event.keyCode})`;
});
