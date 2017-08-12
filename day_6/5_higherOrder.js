// higher order functions
// is a function that takes in a function as an argument or returns a function

// add 2 numbers together
function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

add(5, 6); // 11
multiply(4, 2); // 8

function calc(operation, number1, number2) {
  return operation(number1, number2);
}

calc(add, 5, 6); // 11
calc(multiply, 5, 6); // 30

function sayHello() {
  console.log("hi");
}

sayHello(); // "hi"

function greet() {
  sayHello(); // "hi"
  sayHello(); // "hi"
  sayHello(); // "hi"
}

greet();

function greet( fn ) {
  fn();
  fn();
  fn();
}

greet( sayHello );

sayHello // passing in reference to function
sayHello(); // executing the function itself





//
