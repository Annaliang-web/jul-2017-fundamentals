// Assignment: [Lab] FizzBuzz
// Write code that prompts the user for two numbers, then iterates through the
// numbers 1 - 100. The function will print "fizz" if the current number is
// divisible by the first number, "buzz" if the current number is divisible
// by the second number, "fizzbuzz" if it's divisible by both, else print the
// current number.

// Solution 1
var num1 = parseInt(prompt("Please enter number 1"))
var num2 = parseInt(prompt("Please enter number 2"))

for (var i = 1; i <= 100; i++) {
  if (i % (num1 * num2) === 0) {
    console.log(i, "FizzBuzz");
  } else if (i % num1 === 0) {
    console.log(i, "fizz");
  } else if (i % num2 === 0) {
    console.log(i, "buzz");
  } else {
    console.log(i)
  }
}


// Solution 2: Jose
let firstNumber = parseInt(prompt("Give me first number"));
let secondNumber = parseInt(prompt('Give me second number'));

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
  if (currentNumber % firstNumber === 0 && currentNumber % secondNumber === 0) {
    console.log(`FizzBuzz : ${currentNumber}`);
  } else if (currentNumber % firstNumber === 0) {
    console.log(`Fizz : ${currentNumber}`);
  } else if (currentNumber % secondNumber === 0) {
    console.log(`Buzz : ${currentNumber}`);
  } else {
    console.log(currentNumber);
  }
}
