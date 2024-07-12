// methods
// JSON.stringify() // converts the JSON object into a string
// JSON.parse()

let jsonObj = {
  name: "Neeraj",
  age: 25,
  isStudent: false,
  address: {
    city: "Mathura",
    state: "UP",
    country: "IN",
  },
  hobbies: ["teaching", "games", "biker/biking"],
  hasPets: null,
  greet: function () {
    console.log("hello");
  },
};

let stringifiedJSON = JSON.stringify(jsonObj);
console.log(JSON.parse(stringifiedJSON));

let jsonObjFormat = {
  name: "Neeraj",
  age: 25,
};
