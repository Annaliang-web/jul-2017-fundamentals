// complex data structures
// JSON - javascript object notation

// is when objects contains objects or arrays
let mom = {
  name: "Julia",
  age: 37,
  weight: 110,

  baby: {
    name: "Sienna",
    age: 5,
    weight: 40
  }
};

// how do i get to the baby
mom.baby;
mom["baby"]; // is an object

// what is the baby's name?
mom.baby.age;
mom.baby["age"]; // is a number

// when an array contains objects
let human = {
  name: "Jacob",
  age: 38,
  height: 160,
  hobbies: ["BJJ", "Rock Climbing", "Coding"]
};

// what are my hobbies?
human.hobbies; // is an array
human.hobbies[0]; // is an string
human.hobbies[1]; // is an string
human.hobbies[2]; // is an string

// iterate over the array
for (let hobby of human.hobbies) {
  console.log(hobby);
}









//
