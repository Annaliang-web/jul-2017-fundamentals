// higher order functions with arrays
let numbers = [1,2,3,4,5];

// we are squaring each number in the array
// [1,4,9,16,25]
let results = [];

for (let number of numbers) {
  console.log( number * number );
  results.push( number * number );
}

console.log( results );

function squareIt(number) {
  return number * number;
  // return number ** 2;
}

console.log( squareIt(1) );
console.log( squareIt(2) );
console.log( squareIt(3) );
console.log( squareIt(4) );
console.log( squareIt(5) );

let results = [];

for (let number of numbers) {
  console.log( squareIt(number) );
  results.push( squareIt(number) );
}

console.log( results );

// higher order function - a function that takes in a function as an argument or a function that returns a function
function call( operation, number ) {
  return operation(number);
}

call(squareIt, 1);
call(squareIt, 2);
call(squareIt, 3);
call(squareIt, 4);
call(squareIt, 5);

let results = [];

for (let number of numbers) {
  console.log( call( squareIt, number ) );
  results.push( call( squareIt, number ) );
}

console.log( results ); // [1,4,9,16,25]

// higher order function that takes in an array as an argument

// function call( fn, number )
function call( fn, array ) {
  let results = [];

  for (let element of array) {
    results.push( fn( element ) );
  }

  return results;
}

call( squareIt, [1,2,3,4,5]);

let numbers = [1,2,3,4,5];
call( squareIt, numbers );

function tripleIt( number ) {
  return number * 3;
}

call( tripleIt, numbers ); // [3, 6, 9, 12, 15]


// higher order example
function addOne() {
  return 1 + 1;
}

addOne(); // 2

function addOne( number ) {
  return number + 1;
}

addOne(10); // 11
addOne(29384092384); // 29384092385

function subtractFive( number ) {
  return number - 5;
}
function multiplyByTwo( number ) {
  return number * 2;
}
function divideByThree( number ) {
  return number / 3;
}

10 + 1;
11 - 5;
6 * 2;
12 / 3; // 4

let result = addOne(10);
result = subtractFive(result);
result = multiplyByTwo(result);
result = divideByThree(result); // result == 4

let result = divideByThree( multiplyByTwo( subtractFive( addOne(10) ) ) );

let functions = [addOne, subtractFive, multiplyByTwo, divideByThree];
let result = 10;
for (let fn of functions) {
  result = fn( result );
}

console.log(result); // 4

// this function takes in 2 arguments
// the first is an array of functions and the second is a start number
function call(arrFn, number) {
  // we store the starting number in a result variable
  let result = number;

  // we step through each function in our array of functions using for..of
  for (let fn of arrFn) {
    // we execute each function passing in the result as an argument
    // we store the result back into a tallying variable
    result = fn(result);
  }

  // we return the result so that call expresses as the result
  return result;
}

call( functions, 10 );
call([addOne, subtractFive, multiplyByTwo, divideByThree], 10);







//
