function doubleIt( number ) {
  return number * 2;
}

doubleIt(5); // 10
doubleIt(20); // 40
doubleIt(3); // 3

// doubleIt -> passing the function by name
// doubleIt(); -> executes the function

function call( fn, number ) {
  return fn(number);
}

call( doubleIt, 5 );
call( doubleIt, 20 );
call( doubleIt, 3 );

// function jumping() {
//   console.log("I am jumping...");
// }
//
// let jumping = function() {
//   console.log("I am jumping...");
// }
//
// const mario = {
//   jump: jumping
// };
//
// mario.jump();

// + - * /
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

console.log( add( 5, 6 ) ); // 11
console.log( subtract( 4, 2 ) ); // 2
console.log( multiply( 3, 7 ) ); // 21
console.log( divide( 100, 3 ) ); // 33.33

function calc( operation, number1, number2 ) {
  return operation( number1, number2 );
}

calc(add, 5, 6);
calc(subtract, 4, 2);
calc(multiply, 3, 7);
calc(divide, 100, 3);

function modulo(x, y) {
  return x % y;
}

calc(modulo, 10, 2); // 0

// create a higher order function that will greet a person by their name
// "Hello Jacob"
// "Hello Jose"
// "Hello Matt"
function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Jacob");
greet("Jose");
greet("Matt");

function call( fn, text ) {
  fn( text );
}

call(greet, "Jacob");
call(greet, "Jose");
call(greet, "Matt");

function goodbye(name) {
  console.log(`Goodbye ${name}`);
}

call(goodbye, "Jacob");
call(goodbye, "Jose");
call(goodbye, "Matt");


//
