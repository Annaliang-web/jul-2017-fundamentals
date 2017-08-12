// classes - classification
// darwin - classified or organized the animals he saw on the galopogos

// objects
const jacob = {
  numOfArms: 2,
  numOfLegs: 2,
  numOfEyes: 2,
  numOfNoses: 1,
  hairColour: "black",
  eyeColour: "brown"
}

const jose = {
  numOfArms: 2,
  numOfLegs: 2,
  numOfEyes: 2,
  numOfNoses: 1,
  hairColour: "brown",
  eyeColour: "brown"
}

class Human {
  constructor(hairColour) {
    this.hairColour = hairColour;
  }
  walk() {}
  run() {}
}

const jacob = new Human("black");
const jose = new Human("brown");
const matt = new Human("blonde");

console.log( jacob.hairColour );
console.log( matt.hairColour );


class Array {
  constructor() {}
  push() {}
  pop() {}
}

// create instances or copies of the array class
let shoppingList = new Array();
shoppingList.push("beer");
shoppingList.push("milk");
shoppingList.push("eggs");

// class is a concept or idea
// class describes what an object might be
// cookie cutter
// blueprint






//
