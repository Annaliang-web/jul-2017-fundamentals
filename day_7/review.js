// good evening fundamentals!

let characterHeight = 180;

const fly = function() {
  console.log("I am flying...");
};

fly();

// objects
let mario = {
  characterHeight: 180;
  // data
  // properties: values
  profession: "plumber",
  favouriteFood: "pizza",
  age: 40,
  height: this.characterHeight,

  // behaviours
  jump: function() {
    console.log("I am jumping!")
  }, // method: is a function which exists inside an object or class
  // we remove ": function"
  run() {
    console.log("I am running...");
  },
  flying: fly
};

console.log( mario.age ); // 40
console.log( mario.profession ); // "plumber"
console.log( mario["favouriteFood"] ); // "pizza"

mario.jump; // this will give me a reference to a function
mario.jump(); // (); executes the function being returned


// Array
let shoppingList = ["bread", "milk", "eggs"];
shoppingList.push("beer"); // push is method of the array object or class
shoppingList.pop(); // pop is method of the array object or class, that removes an item from the end of the array


shoppingList = {
  push: function(){},
  pop: function() {}
}


// class - classification
// blueprint or cookie cutter
class Array {
  function push() {}
  function pop() {}
}

// a construction of an instance of the array class.  creating a shoppingList object
let shopppingList = new Array();
let todoList = new Array();
let numbers = new Array();
let words = new Array();


//  Object Oriented programming

// functions

function sayHello() {
  console.log("Hi");
}

sayHello();
sayHello();
sayHello();

function add() {
  return 5 + 5;
}

add(); // 10
add(); // 10
add(); // 10

function add(x, y) {
  return x + y;
}

document.write( add(4,2) );

window.alert( add(1000,1017) );

console.log( add(81324.23,88942739.12) );







// higher order function - a function that takes in a function as an argument or a function that returns a function

let call1 = function( fn ) {
  fn();
};

let call2 = function( fn ) {
  return fn();
};

function sayHello() {
  console.log("Hi");
}

function add() {
  return 5 + 5;
}

call1(sayHello);
call2(add);


// calculator
const add = function(x, y) {
  return x + y;
};
const subtract = function(x, y) {
  return x - y;
};
const multiply = function(x, y) {
  return x * y;
};
const divide = function(x, y) {
  return x / y;
};

const calc = function(operation, x, y) {
  return operation(x, y);
};
// copy and replace
// const calc = function(multiply, 5, 6) {
//   return multiply(5, 6);
//   return 30;
// };

console.log( calc(multiply, 5, 6) );

// [1,2,3,4,5] <- input
const squareIt = function(number) {
  return number * number;
  // return number ** 2;
}

squareIt(1); // 1
squareIt(2); // 4
squareIt(3); // 9
squareIt(4); // 16
squareIt(5); // 25

let numbers = [1,2,3,4,5];
// let map = function(array, fn) {};
let map = function(fn, array) {
  // squareIt( array[0] ); // 1

  // create a results variable that will store the results
  let results = [];

  // for .. of allows to iterate over an array
  // for (let number of numbers)

  for (let element of array) {
    results.push( fn(element) );
  }

  // this will allow the map function to express itself as an array of squared numbers
  return results;
};

map(numbers, squareIt); // [1,4,9,16,25]

// [1,4,9,16,25] <- output

// external libraries
// lodash
// underscore
// jQuery

// 





//
