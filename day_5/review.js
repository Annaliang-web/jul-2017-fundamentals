// good evening fundamentals!

// categorize or group information within an object
let sentence = "god only knows what i'd be without you";
// turn this setence into an array
// a string method that will turn a string into an array
sentence.split(); // ["god only knows what i'd be without you"]
sentence.split(" "); // ["god", "only", "knows", ...]
let characters = sentence.split(""); // ["g", "o", "d", " ", "o", "n", "l", "y"]

// how do we iterate over an array?
// for .. of is for arrays
// for .. in is for objects
for (let character of characters) {
  console.log(character);
}

// objects
let shoppingList = [];
let human = {
  // property: value
  name: "Jacob",
  age: 38,
  baby: {},
  hobbies: ["coding", "hiking", "sleeping"]
};

human.name = "Prince";
human["age"] = 39;
human.hairColour = "black";
human["eyeColour"] = "brown";

// let human = new Object();

// hash
let occurences = {
  "g": 0,
  "o": 0,
  "d": 0
};

occurences["g"] = 1;
occurences["g"] = 2;

occurences["g"] += 1;
occurences["g"]++;

let shoppingCart = {
  "pencils": 5,
  "laptop": 1
};

shoppingCart["pencils"] = 8;
shoppingCart["pencils"] = quantity.value;

<form>
  <label>Pencils</label> <input name="quantity" type="text" value="8">
</form>



//
