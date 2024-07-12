// syntactic sugar over JS's existing prototype-based inheritence
// constructor function

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
}

const person1 = new Person("Neeraj", 25);
console.log(person1.age);
