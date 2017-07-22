// we can create string in three ways

"I'm a string"
'me too'
`me as well`

// we can get the number of characters using .length

"hello world".length // 11

// we can get a particular character using it's index
"hello world"[2] // l

// We can using String interpolation with backticks only (ES6 feature)
`1 + 1 is ${1 + 1}`

// Converting (parsing) Strings to numbers

parseFloat("444.5") // 444.5
parseInt("444.5") // 444

// Exercises
// 1. Create a string “Hello, [Your Name]!” by concatenating 3 strings
// 2. Compute the length of that string

"Hello," + "Evan Kerr" + "!"

("Hello," + "Evan Kerr" + "!").length

//  Find out how to remove beginning and trailing spaces from Javascript
// strings from MDN

"  Tam   ".trim() // "Tam"
