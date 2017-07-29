// object exercises
// build a car object
const pi = 3.14159;
const name = "Jacob";

const tesla = {
  model: "Model 3",
  capacity: 5,
  colour: "red"
};

// iterate over the car object and list out it's properties and corresponding values

// dot operator
tesla.model;
tesla.capacity;
tesla.colour;

tesla["model"];
tesla["capacity"];
tesla["colour"];

let property1 = "model";
tesla[property1]; // "Model 3"
// tesla["model"]; // "Model 3"

// for..in
// for (each property in my object) {}
for (let property in tesla) {
  console.log(property); // property
  console.log(tesla[property]); // value

  // tesla[property]; // "model"
  // tesla[property]; // "capacity"
  // tesla[property]; // "colour"
}

// ---

// add features to the car

// complex data structure
const tesla = {
  model: "Model 3",
  capacity: 5,
  colour: "red",
  // feature: "360 Camera"
  features: ["360 Camera", "Self Driving", "Keyless Start"]
};

tesla.model;
tesla["model"];

tesla.features; // [array]

for (let feature of tesla.features) {
  console.log(feature);
}

// print out all the properties of the object, if it is an array, print out each element of the array

// flattening
for (let property in tesla) {

  // if the property is of data type array
  // typeof
  console.log( property );
  console.log( tesla[property] ); // value
  console.log( Array.isArray(tesla[property]) );

  // if this property's value is an array
  if ( Array.isArray(tesla[property]) ) {
    for (let element of tesla[property]) {
      console.log( element )
    }
  }
}

// typeof

typeof 3.14; // "number"
typeof "Jacob"; // "string"
typeof [1,2,3,4,5]; // "object"
typeof {name: "Jacob", age: 38}; // "object"







//
