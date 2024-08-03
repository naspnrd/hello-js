// Local Storage
// Session Storage
// Cookies

// Local Storage -> store data without expiration time
// 5MB storage capacity

localStorage.setItem("name", "Neeraj");
localStorage.setItem("age", 25);

console.log(typeof localStorage.getItem("age"));

localStorage.removeItem("age");

localStorage.clear();

// session Storage
// but stores data for duration of user's session
// 5MB storage capacity
sessionStorage.setItem("name", "Neeraj");
sessionStorage.setItem("age", 25);

console.log(typeof sessionStorage.getItem("age"));

sessionStorage.removeItem("age");

sessionStorage.clear();

// How to store objects as string local storage/session storage

const user = {
  name: "Neeraj",
  age: 22,
  profession: "Developer",
};

// localStorage.setItem("user", user);
localStorage.setItem("user", JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem("user")));
