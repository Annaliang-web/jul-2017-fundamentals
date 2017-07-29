// function exercises
// function is a list of instructions

// some functions can be evaluated to a value

// function is a value, or a function can express itself as a value
// keyword "return"

// function name(args) {}
// function name() {}
// function () {}

// robot to be mean
function insult(name) {
  console.log(`${name} is a doofus!`);
}
// robot to be nice
function compliment(name) {
  console.log(`${name} looks amazing!`);
}

insult("Jacob");
compliment("Jose");
compliment("Matt");
compliment("Tam");
insult("Luc");

// make a robot that can draw from a collection of insults or compliments

// make an array
let insults = [
  " is a doofus.",
  " smells.",
  " can't code.",
  " is silly."
];

let compliments = [
  " looks amazing!",
  " smells great!",
  " codes very well!",
  " is very sharp :)"
];

Math.random() * 10; // returns to us a value between 0 and 1.
Math.floor( Math.random() * 4 ); // random address, 0, 1, 2, 3

function insult(name) {
  // magic numbers
  let randomNumber =  Math.floor( Math.random() * insults.length );
  let randomInsult = insults[ randomNumber ];
  console.log(`${name} ${randomInsult}`);
  // console.log(`${name} ${ insults[ Math.floor( Math.random() * 4 ) ] }`);
}

function compliment(name) {
  // magic numbers
  let randomNumber =  Math.floor( Math.random() * compliments.length );
  let randomInsult = compliments[ randomNumber ];
  console.log(`${name} ${randomInsult}`);
  // console.log(`${name} ${ insults[ Math.floor( Math.random() * 4 ) ] }`);
}


// Math.abs();
// Math.ceil();
// Math.floor();

// compliments[4];

//
