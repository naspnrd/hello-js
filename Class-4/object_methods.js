// Object.keys()
// returns an array of object's enumerable properties.
const obj = {
  title: "The Matrix",
  director: "Lana Wachowski",
  releaseYear: 1999,
};

const movieKeys = Object.keys(obj);
console.log(movieKeys);

// Object.values();
const movieValues = Object.values(obj);
console.log(movieValues);

// Object.entries

const movieEntries = Object.entries(obj);
console.log(movieEntries);
