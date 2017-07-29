// function expression

function name() {
}

name();

// anonymous function
function () {}

// function declaration: no semi-colon
// global name space
function myFunction() {
}

// function expression: functions as values
// we can only call this function when we have access to this variable
let myFunction = function(){};
// let name = 'Jacob';
// let age = 38;

// with a variable, we can control scope
let add = function(x, y){ return x + y };
let subtract = function(x, y){ return x - y };
let multiply = function(x, y){ return x * y };
let divide = function(x, y){ return x / y };

let add = function(x, y){
  let result = x + y;
  return result;
};
let subtract = function(x, y){
  let result = x - y;
  return result;
};
let multiply = function(x, y){
  let result = x * y;
  return result;
};
let divide = function(x, y){
  let result = x / y;
  return result;
};


//
