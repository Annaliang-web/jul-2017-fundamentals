// function - is a list of instructions you may want to repeat over and over and over again

// routines
// mathetical
// tools

// morning routine
// workout routine
// meal routine

// functionKeyword functionName() {}
// () arguments
// {} code block
function morning() {
  console.log("shower");
  console.log("ate breakfast");
  console.log("drove to codecore");
  console.log("open the doors");
  console.log("parked the car");
}

// execute or run my function
// second saturday
morning();
// third saturday
morning();
// fourth saturday
morning();
// fifth saturday
morning();

console.log("shower");
console.log("ate breakfast");
console.log("drove to codecore");
console.log("open the doors");
console.log("parked the car");

console.log("shower");
console.log("ate breakfast");
console.log("drove to codecore");
console.log("open the doors");
console.log("parked the car");

console.log("shower");
console.log("ate breakfast");
console.log("drove to codecore");
console.log("open the doors");
console.log("parked the car");

console.log("shower");
console.log("ate breakfast");
console.log("drove to codecore");
console.log("open the doors");
console.log("parked the car");


// math functions
function add() {
  4 + 2;
}

add();
add();
add();

// () for arguments
function add(x, y) {
  x + y;
}

add(1, 2);
add(2, 3);
add(23423, 2342342);

// functions as values
// functions have the ability to express themselves as data
// return

function add(x, y) {
  return x + y;
}
// function add(x, y) {
//   let result = x + y;
//   return result;
// }

add(2, 3) + add(4, 6);
5 + 10;
15;

// simple recursion
add( add(2,3), add(4,6) );
add( 5, 10 );
15;

// make a subtract function
// function subtract(x, y) {
//   let result = x - y;
//   return result;
// }

function subtract(x, y) {
  return x - y;
}

// make a multiply function
function multiply(x, y) {
  return x * y;
}

// make a divide function
function divide(x, y) {
  return x / y;
}

// solve a simple mathematical trivia question to claim a prize
// 85 * 15 + 102 - 12 // solve this using functions
subtract( add( multiply(85, 15), 102), 12);

let result = multiply(85, 15);
result = add(result, 102);
result = subtract(result, 12);

console.log("The answer is: " + result);
console.log(`The answer is: ${result}`);

// STRETCH: imagine the values are in the form of a numbers array
// let numbers = [85, 15, 102, 12]


//
