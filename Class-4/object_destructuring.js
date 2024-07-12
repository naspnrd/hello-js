const person = {
  name: "Neeraj",
  age: 26,
  address: {
    city: "Bengaluru",
    country: "IN",
  },
};

// const { age, name } = person;
// console.log(age, name);

// const { age: personAge, name: personName } = person;
// // console.log(age, name);
// console.log(personAge, personName);

// const {
//   name,
//   address: { city, country },
// } = person;
// console.log(city, country, name);

const { name, age, ...rest } = person;
console.log(name, rest);
