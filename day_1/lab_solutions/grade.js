// Assignment: [Lab] Grade Calculator
// Write a Javascript code that generates a random number for the user's
// score (0 - 100) in a variable score and then prints out their letter grade (F - A+).

while (true) {
  var score = parseInt(prompt("Please enter your score (0-100)"));

  if (score >= 0 && score <= 100) {
    break;
  }
}

if (score >= 86) {
  console.log("A")
} else if (score >= 72) {
  console.log("B")
} else if (score >= 60) {
  console.log("C")
} else if (score >= 50) {
  console.log("D")
} else if (score < 50) {
  console.log("F")
}
