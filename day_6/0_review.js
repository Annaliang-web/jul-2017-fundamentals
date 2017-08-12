// good morning fundamentals!

// methods
// objects / classes
// higher-order functions

// review
// javascript is everywhere
// data == success
5 + 5; // 10, this is not persistant

// what was the last answer ?? or result???
let result = 5 + 5;

// javascript is an interpreted language
result + 5; // 15

let name = "Jacob";
let age = 38;

let fullName = ["Jacob", "Tran"];
let lottoNumbers = [34,49,12,10,45,26];

// objects - they are fundamental building blocks of anything meaning in programming
// OOP - object oriented programming
let phone = {
  model: "Pixel",
  manufacturer: "HTC",
  price: 450
};

// functions - javascript is a functional programming language
// functions are first class citizens

// function declaration - the function enters the global namespace
function add() {}

add();

// function expression - we can control the scope of this variable, thus controlling the scope of it's value, which happens to be an anonymous function
let add = function() {};

add();

// multiply 2 numbers together and return the result
let multiply = function(x, y) {
  let result = x * y;
  return result; // this will allows us to run the function and have it expressed as the result.
};

multiply(4, 2); // 8

console.log( multiply(4, 2) );
document.write( multiply(4, 2) );
window.alert( multiply(4, 2) );







//
