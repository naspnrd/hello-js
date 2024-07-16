// const elementById = document.getElementById("heading");
// // elementById.draggable = true;
// console.log({ elementById });

// const elementByClassName = document.getElementsByClassName("main");
// // HTMLCollection []
// console.log(elementByClassName);

// const elementByTagName = document.getElementsByTagName("h1");
// // HTMLCollection []
// console.log(elementByTagName);

// // QuerySelector -> retrieves the first element that matches a specified CSS selector
// // const elementByQuerySelector = document.querySelector("#heading");
// // const elementByQuerySelector = document.querySelector(".main");
// // console.log(elementByQuerySelector);

// // QuerySelector -> all elements that matches a CSS selector
// // NodeList
// // const elementByQuerySelectorAll = document.querySelector("#heading");
// const elementByQuerySelectorAll = document.querySelectorAll(".main");
// console.log(elementByQuerySelectorAll);
// // elementByQuerySelectorAll.forEach((element) => {
// //   element.style.color = "skyblue";
// // });

// const parentElement = elementById.parentNode;
// console.log(parentElement);
// const childElements = parentElement.children;
// console.log(childElements);

// const nextSibling = elementById.nextElementSibling;

// console.log(nextSibling);
// const prevSibling = elementById.previousElementSibling;
// console.log(prevSibling);

// const customDataElement = document.querySelector('[data-custom="example"]');
// console.log(customDataElement);

// const descendantElements = document.querySelectorAll("#container .content");
// descendantElements.forEach((element) => {
//   //   console.log(element.getAttribute("class"));
//   element.setAttribute("class", "content1");
//   element.style.color = "grey";
//   element.style.fontSize = "40px";
// });
// console.log(descendantElements);

// const childElements = document.querySelectorAll("#container > .content");
// console.log(descendantElements);

// // getAttribute()

// className
const btn = document.getElementById("btn");
// btn.className = "active-btn";
// // btn.className = "blue-btn";
// btn.className += " blue-btn";

// // ClassList -> Array
// btn.classList.add("abc", "hello");

// btn.classList.remove("blue-btn", "hello");

// // .contains() // true or false value
// console.log(btn.classList.contains("abc")); // true
// console.log(btn.classList.contains("abcs")); // false

// // toggle() -> to remove and add certain class

// btn.classList.toggle("active"); // add
// btn.classList.toggle("active"); // remove

// btn.classList.toggle("primary");
// btn.classList.toggle("primary");
// btn.classList.toggle("secondary");

// const buttons = document.getElementsByTagName("button");
// buttons[0].classList.add("primary");
// buttons[1].classList.add("secondary");

const exmDiv = document.getElementById("example");
console.log(exmDiv.innerText);
console.log(exmDiv.innerHTML);
console.log(exmDiv.textContent);
