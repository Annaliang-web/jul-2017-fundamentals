// assume we have an array of numbers
let numbers = [0, 5, 6, -12];

// compute the sum of the elements using a loop
// when we iterate for..of loop
// for (each element of my array)
let result = 0;

for (let number of numbers) {
  console.log(number);
  result += number;
  // result = result + number;
}

console.log(result);

//----
let words = new Array();
words.push("apple");
words.push("computer");
words.push("cup");
words.push("dog");

words.length; // this will tell me how many words i have in the words array

let name = "Jacob";
name.length; // string, the length property will let me know how many characters are in the string

for (let word of words) {
  console.log(word);
  // strings and arrays are closely related
  console.log(word.length);

  console.log(`The word ${word} has ${word.length} characters.`);
}

//
// for (init; condition; iterator) {
for (let i=0; i<words.length; i++) {
  console.log(words[i]);
  console.log(words[i].length);
  console.log(`The word ${words[i]} has ${words[i].length} characters.`);
}
