let name = "John";
"Hello " + name  // "Hello John"
`Hello ${name}`  // "Hello John"

// Guildlines for variables
// 1- Must start with non-numerical character, you can use numbers after
let 1name = "John"; // Syntax error
let name1 = "John"; // this is good

// 2- You can start with capital or smaller letter, however, it's recommend
//    for non-classes (will be covered later) to use small letters

// 3- If you have more than work that composes a variable then it's recommended
//    that you omit spaces and capitalize the first letter of every word
//    excpet for the first one (you can't have spaces in variable names)
let firstName = "John"; // lower camel-case convention

// 4- If you're using ES6 then use either let or const (no var)
//    use const when you're not planning on changing the value of the varible
//    use let when you plan to change the value of the variable. Favour using
//    const over let
const count = 10;
let name = "Tam";
name = "John";
name = "Jen";

// you can't re-declare even with `let` but you can re-assign with let
let weather = 'Rainy';
let weather = 'Cloudy'; // this will give an error (re-declaration)
weather = 'Sunny'; // this is OK (re-assignment)

// Global variable are usually a bad idea when your writing code because any
// part of the code can read or write to it.
a = 10; // this is a global variable (usually not a good idea)

// pre vs post increment
let x = 10;
let y = x++;
// y -> 10
// x -> 11

y = ++x;
// x -> 12
// y -> 12
