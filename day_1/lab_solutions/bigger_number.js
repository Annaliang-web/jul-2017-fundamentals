// Assignment: [Demo] Bigger number
// Write a Javascript code that defines two variables x and y with numbers and
// then prints to the console the larger of the two number printing.
// For instance print "The larger number is x"

var number1 = parseInt(prompt("Please enter a number"));
var number2 = parseInt(prompt("Please enter another number"));

if (number1 > number2) {
  alert('Number1 is greater thant Number2')
} else if (number2 > number1) {
  alert('Number2 is greater thant Number1')
} else {
  alert('Both numbers are equal')
}
