function abc(name, age) {
  //   let obj = {
  return {
    name,
    age,
    getName: function () {
      this.name;
    },
  };
  //   return obj;
}

const obj1 = abc("a", 2);
const obj2 = abc("b", 3);
// console.log(obj1.name);
console.log(obj1.getName());
// console.log(obj1 === obj2);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getName = function () {
  return this.name;
};
const person1 = new Person("Neeraj", 25);
console.log(person1.age);
