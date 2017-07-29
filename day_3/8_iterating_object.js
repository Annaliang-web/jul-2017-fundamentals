// iterate over an object
// for in loop is for objects
// for of loop is for arrays

let names = ["Jacob", "Thuong", "Tran"];

// iterate over an array of names
for (let name of names) {
  console.log(name);
}

let human = {
  name: "Jacob",
  age: 38,
  height: 160
};
// for (let property in object)
for (let property in human) {
  console.log(property); // will print out to the console each one of our properties
  // property is a String data type
  console.log(human[ property ]); // get the corresponding value
  // human[ "name" ]; // get the corresponding value
  // human[ "age" ]; // get the corresponding value
  // human[ "height" ]; // get the corresponding value
}

// human.name;
// human["name"]; <- hint hint hint

let populations = {
  "British Columbia": 4600000,
  "Albert": 3200000,
  "Ontario": 7500000
}

let maxPopulation = 0;
let maxProvince = "";
for (let province in populations) {
  if (populations[province] > maxPopulation) {
    maxPopulation = populations[province];
    maxProvince = province;
  }
}

// string concatenation, mathetical or string glueing
console.log("The largest populated province is " + maxProvince);
// string interpolation
console.log(`The largest populated province is ${maxProvince} with a population of ${maxPopulation}`);

console.log(`The largest populated province is ${maxProvince} with a population of ${populations[maxProvince]}`);

console.log(`The largest populated province is ${maxProvince} with a population of ${populations["Ontario"]}`);










//
