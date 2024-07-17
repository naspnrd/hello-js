document.querySelector("#category").addEventListener("click", (event) => {
  // event -> event object
  // event.target -> refers to where event triggers
  // event.currentTarget -> refers to where event is attached
  //   event.target.id -> id for li
  console.log(event.target);
  console.log(event.currentTarget);
  if (event.target.tagName === "LI") {
    window.location.href = "/Class-8/" + event.target.id + ".html";
  }
});
