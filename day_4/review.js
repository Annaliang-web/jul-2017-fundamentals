// good evening fundamentals!

// saturday review

// data

// big data - tracking social media trends
// data exhaust - extranious data, being produced passively

// enormous data - too big to process in 2017


// temporary data
1 + 4;

// variable
let result = 1 + 4;

// types of data
// integer, number
// strings, text
// boolean, head or tails, true or false
let name = "Jacob";
let age = 38;
let cool = false;

// data structure
let names = ["Jacob", "Tran"];
// array - indexed list of information or data

let names = new Array(); // array constructor
let names = []; // array initializer

// array methods
names.push("Tam");
names.push("Jose");

// pop, slice, unshift, shift - w3schools documents

// single-dimensional array - we only need one piece of information to get to the data
names[0]; // "Jacob"
names[1]; // "Tran"

// multi-dimensional array - you need more than one piece of information to get to the data

let tictactoe = [
  [null, null, null], // 0
  [null, null, null], // 1
  [null, null, null] // 2
];

// 3 rows and 3 columns

// if i want to put an "X" in the center of the game board
// tictactoe[row]???
tictactoe[1]; //[null, null, null]
                    // 0   ,  1  ,  2
// tictactoe[1][col?]; //[null, null, null]
tictactoe[1][1] = "X"; //[null, "X", null]

// [
//   [null, null, null], // 0
//   [null, "X", null], // 1
//   [null, null, null] // 2
// ]

// objects - fundamentals building blocks of anything meaningful in programming
let human = new Object();

let human = {
  name: "Jacob",
  age: 38,
  hairColour: "black"
};

// dot operator
human.age; // 38
human["hairColour"]; // "black"

// for..in

for (let property in human) {
  console.log(property); // this will print out each property
  console.log(human[ property ]); // this will print the corresponding value associated with this particular property.
}

// function - list of instructions you want to call over and over again
// events - when something happens, run a list of instructions

// routine, method
function morning() {
  console.log("wake up");
  console.log("eat breakfast");
  console.log("get changed");
  console.log("catch bus");
}

morning();
morning();
morning();
morning();
morning();

// console.log("wake up");
// console.log("eat breakfast");
// console.log("get changed");
// console.log("catch bus");  console.log("wake up");
// console.log("eat breakfast");
// console.log("get changed");
// console.log("catch bus");  console.log("wake up");
// console.log("eat breakfast");
// console.log("get changed");
// console.log("catch bus");  console.log("wake up");
// console.log("eat breakfast");
// console.log("get changed");
// console.log("catch bus");  console.log("wake up");
// console.log("eat breakfast");
// console.log("get changed");
// console.log("catch bus");  console.log("wake up");
// console.log("eat breakfast");
// console.log("get changed");
// console.log("catch bus");  console.log("wake up");
// console.log("eat breakfast");
// console.log("get changed");
// console.log("catch bus");

function add() {
  5 + 6;
}
add();

function add(x, y) {
  x + y;
}
add(5, 6);

// functions are values
// return
function add(x, y) {
  let result = x + y;
  return result;
}

console.log( add(5, 6) );
window.alert( add(5, 6) );
document.write( add(5, 6) );
// human[ add(5, 6) ]

// complex data structure - object that contains an object or array. OR it be an array of objects.
// pregnant lady
let mom = {
  name: "Jane",
  age: 30,
  baby: {
    name: "Junior",
    age: 0
  }
};

// a person with many hobbies
let human = {
  name: "Jacob",
  age: 38,
  hobbies: ["coding", "surfing", "swimming"]
};

// a list of teachers
let teachers = [
  {name: "Jacob", age: 38},
  {name: "Tam", age: 36},
  {name: "Steve", age: 29},
  {name: "Jose", age: 27}
];

// lab exercise demo

// frequency of letters

// input: a sentence
let sentence = "god only knows what i'd be without you";

// isolate a letter
// i want just the letter "g"
sentence[0]; // "g"
sentence[1]; // "o"
sentence[2]; // "d"

// manipulate strings to arrays and back
// split - turns a string into an array
// join - turns an array into a string
// let name = "Jacob";
// name.split(); // ["Jacob"]
// name.split(""); // ["J", "a", "c", "o", "b"]
// name.split("c"); // ["Ja", "ob"]

// characters array
let characters = sentence.split("");

// let the computer do the hard work
for (let character of characters) {
  console.log(character);
}

// start to build a hash
// key: value
// "g": 1

// objects
// property: value

// output: what character/letter occurs most often in this sentence

// brute force method, manual methods
// g x
// o xxxxx
// d xx










//





//
