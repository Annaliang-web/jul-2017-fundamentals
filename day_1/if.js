const number = parseInt(prompt('Give me a number'));

// number > 1000 -> expression that returns true or false
// You must at least put the first conditional which is `if` (takes an expression)
// You can have optionallty one or many `else if` which also take expressions
// You can optionallty have only one `else` statement but nothing can be given
// to it (when none of the conditions are met then the code in the else gets
// executed)
// execution happens from top to bottom so make sure top conditional don't
// include bottoms ones
if(number > 1000) {
  alert('The number is extra large!');
} else if(number > 500) {
  alert('The number is large');
} else if(number > 100) {
  alert('The number is medium');
} else {
  alert('The number is small');
}
