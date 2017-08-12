// timing functions

// setTimeout - this will run a function after a specified delay
// it takes in a function as an argument, it is a higher order function

let sayHello = function() {
  console.log("hi");
};
// milliseconds, 1000ms == 1sec
// sayHello is our callback function
// setTimeout(sayHello, 3000);

// let add = function(x, y) {
//   console.log(x + y);
//   return x + y;
// }
//
// let result = setTimeout(add, 5000);
//
// let setTimeout = function(fn, number) {
//   // wait a number of milliseconds ... and the execute
//   fn();
// };
//
// console.log(result);

let sayHello = function() {
  console.log("hi");
};

// when we use setTimeout it returns a unique ID
console.log("Before my timeout");
let result = setTimeout(sayHello, 3000);
console.log("After my timeout");

// event loop - allows us to execute javascript out of order

// setTimeout only executes once after a delay
// setInterval executes continuously
let id = setTimeout(sayHello, 3000);

// executes forever
let id = setInterval(sayHello, 3000);
// only executes once
let id = setInterval(sayHello, 3000);
clearInterval(id);

let counter = 0;
let intervalId = setInterval(function(){
  console.log("hi");
  counter++;

  if (counter > 10) {
    clearInterval(intervalId);
  }
}, 1000);

// can you make countdown using setInterval
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// "Blast off!"
let counter = 10;

while(counter >= 0) {

  if (counter == 0) {
    console.log("Blast off!");
  } else {
    console.log(counter);
  }
  counter--;
}

/////

let counter = 10;

let intervalId = setInterval(function(){
  if (counter == 0) {
    console.log("Blast off");
  } else {
    console.log(counter);
  }
  counter--;

  if (counter < 0) {
    clearInterval(intervalId);
  }

}, 1000);

///////









//
