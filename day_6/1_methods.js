// method - is a function that exists within an object or a class

// method acting - daniel day lewis, he takes on the behaviour of the character he is playing in a movie, even off the set.

// process
// method man
// soap product

let jumping = function(){
  console.log("I am jumping");
};

let mario = {
  // data values
  occupation: "plumber",
  favouriteFood: "pizza",
  brother: { name: "Luigi" },
  hobbies: ["swim", "jump", "fly"],
  // behaviours or functionality
  run: function(){ console.log("I am running....") },
  jump: jumping,
  // we remove ": function" in ES6
  fly() { console.log("I am flying") }
};

mario.occupation; // "plumber"
mario["favouriteFood"]; // "pizza"

mario.run; // [function]
// add on (); to execute the function
// run is a method of mario
mario.run();
mario.jump();


// make a car object with make, model and capacity properties
// the car should be able to drive, stop and park (methods)
const car = {
  make: "Tesla",
  model: "Model X",
  capacity: 7,
  maxSpeed: 200,
  drive: function(){ console.log(`I am driving ${ this.maxSpeed } km/h...`) },
  stop: function(){ console.log( "I am stopping...") },
  park: function(){ console.log( "I am parking...") }
};

// test - TestDrivenDevelopment: TDD
console.log( car.make ); // "Tesla"
console.log( car.model ); // "Model X"
console.log( car.capacity ); // 7
// this - which object is calling this method????
car.drive(); // "I am driving 200 km/h..."
car.stop(); // "I am stopping..."
car.park(); // "I am parking..."

// different looks

const car = new Object();
car.make = "Tesla";
car.model = "Model X";
car.capacity = 7;

const car = {};
car["make"] = "Tesla";
car["model"] = "Model X";
car["capacity"] = 7;

let properties = ["make", "model", "capacity"];
const car = {};
car[ properties[0] ] = "Tesla";
car[ properties[1] ] = "Model X";
car[ properties[2] ] = 7;




//
