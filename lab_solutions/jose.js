// Small or Large city - function
// Initializing a const "whatCities" variable as an object containing cities (properties) and population number (values)
const whatCities = { vancouver: 603502, burnaby: 223220, langley: 104177, surrey: 705000, abbotsford: 100000 };
// creating a function "sizeOfCity" which will get an object argument (cities)
function sizeOfCity(cities) {
  // initializing temporal variabes within function:
  // typeOfCity = string variable which will hold the type of city
  let typeOfCity = '';
  // populationCity = numeric variable wich will hold the City population
  let populationCity = 0;
  // result = string variable which will contain the complete string of the size of the city and population
  let result = '';
  // the following for...in loop will go through all the properties of the object "cities", "city" represents the current property of the present iteration (i.e. vancouver, burnaby, langley, etc.)
  for (let city in cities) {
    // city[0].toUpperCase() = the first character of the name of the city is taken to be capitalized
    // city.substr(1) = the rest of the characters of the name of the city are added starting in position one and forward
    // typeOfCity will contain the property (name of city) capitalized (i.e. Vancouver, Burnaby, etc.)
    typeOfCity = city[0].toUpperCase() + city.substr(1);
    // cities[city] = the value of the property (city) from the object (cities) will be passed to "populationCity"
    populationCity = cities[city];
    // condition: if the population of the city "cities[city]" is greater than 150000, the variable result will contain `${typeOfCity} is a large city with a population of ${populationCity} people.`
    if (cities[city] > 150000) {
      result = `${typeOfCity} is a large city with a population of ${populationCity} people.`;
      // otherwise "else", the variable result will contain `${typeOfCity} is a small city with a population of ${populationCity} people.`
    } else {
      result = `${typeOfCity} is a small city with a population of ${populationCity} people.`;
    };
    // sending the value of resukt to the console
    console.log(result);
  };
};
// running the function which will work both ways shown below, "printing" every city with its population and size of it
sizeOfCity(whatCities);
sizeOfCity({ vancouver: 603502, burnaby: 223220, langley: 104177, surrey: 705000, abbotsford: 100000 });



 //Largest number and smallest number - function
//initializing const "whatNumbers" variable with an array of numbers
const whatNumbers = [3,64,3,56,80,34,75,-1,12,-5,5,0];
//the function "sizeOfNumber" will take an array as an argument
function sizeOfNumber(numbers) {
  // initializing temporal variables within the function:
  // "largestNumber" as a numeric variable which will contain the lowest value
  let largestNumber = -999999999;
  // "smallestNumber" as a numeric variable which will contain the highest value
  let smallestNumber = 999999999;
  // for...of loop will go through all elements of array "numbers", and "number" will represent each numeric value within the array
  for (let number of numbers) {
    // consition: if "number" is greater than "largestNumber", the value of "number" will be passed onto "largestNumber"
    if (number > largestNumber) {
      largestNumber = number;
      // otherwise "else", if "number" is lesser than "smallestNumber", the value of "number" will be passed onto "smallestNumber"
    } else if (number < smallestNumber) {
      smallestNumber = number;
    };
  };
  // returning the "smallestNumber" and "largestNumber"
  return [smallestNumber, largestNumber];
}
// running the function which will work both ways shown below, "printing" the greater and smaller numbers
console.log(sizeOfNumber(whatNumbers));
console.log(sizeOfNumber([3,64,3,56,80,34,75,-1,12,-5,5,0]));


 //Popular name - function
//initializing const "whatNames" variable with an object of properties (people names) and values (times the name repeats)
const whatNames = { mike: 2, john: 3, jen: 5, eli: 1, pepe: 10};
//declaring the function with an argument "names" which will take an object
function allNames(names) {
  // initializing temporal variables within the function:
  // "popularName" as a string variable which will contain the property (person name) of the object
  let popularName = '';
  //"timesPopularNameRepeats" as a numeric variable which will contain the value (times name repeats) of the property
  let timesPopularNameRepeats = 0;
  // for...in loop will allow us to go through every property and value per iteration, where "name" is the property (person name) of the object and "names" is the object.
  for (let name in names) {
    // "names[name]" will give us the value (times name repeats) of the current property (person name) of the object "names"
    if (names[name] > timesPopularNameRepeats) {
      // if the value "names[name]" is greater than the value contain in our temporal variable "timesPopularNameRepeats", the value of "names[name]" will be pass onto "timesPopularNameRepeats"
      timesPopularNameRepeats = names[name];
      // at the same time, the name "name" of the person (property of the object) will have the first letter of it capitaliza "name[0].toUpperCase()" and add together with the rest of the name "name.substr(1)", which both together will be assigned to "popularName"
      popularName = name[0].toUpperCase() + name.substr(1);
    };
  };
  // the function will return the most popular name "popularName"
  return popularName;
};
// executing the function in different ways:
console.log(`The most popular name is ${allNames(whatNames)}`);
console.log(`The most popular name is ${allNames({ mike: 2, john: 3, jen: 5, eli: 1, pepe: 10})}`);


 //Frequency of letters - function
// creating a function which will take an argument "sentence"
function frequencyLetters(sentence) {
  // Initializing temporal variables:
  // "splitSentenceIntoAnArray" is a variable which will contain every single character (letter, space, etc.) you entered. This is done by splitting the "sentence.split('')".
  let splitSentenceIntoAnArray = sentence.split('');
  // Initializing "occurrencesObject" as an object which will contain every single character uniquely in the object
  let occurrencesObject = {};
  // for...of will go through the array "splitSentenceIntoAnArray", taking every element (character) per iteration
  for (let character of splitSentenceIntoAnArray) {
    // if the character (element) from the array exists as a property (letter) in the object "occurrencesObject", the value of the property in the will increase by one.
    if (occurrencesObject[character]) {
        occurrencesObject[character]++;
      } else {
        // if the property doesn't exist within the object, it will create it and initialize it, assigning it a value of one.
        occurrencesObject[character] = 1;
      };
  };
  // the function will return all characters with the times they repeat within the sentence entered
  return occurrencesObject
};
// calling the function in different ways:
console.log(frequencyLetters(prompt('Enter a sentence')));
console.log(frequencyLetters('This is a test gals and guys'));



 //Sort your books
// Initializing "books" as an array
let books = [];
// Initialing 'book' as an empty string
let book = '';
// while...loop - all the block of code within here will repeat over and over until we enter 'exit', which is the key word (in this case) to exit out of the while loop
while (book != 'exit') {
  // if we just press enter without typing any characters when propmted, the value of "book" will be empty, in that case we don't want to save this value.
  if (book != '') {
    // if the value of "book" is different than empty, we "push" (add) this value to "books.push(book)"
    books.push(book);
  };
  // We prompt/request the user to enter a book name, which we assign it to "book"
  book = prompt('Enter a Book name');
};
// we "print" all "books" entered and sort "books.sort() them by name.
console.log(`Your books are:\n${books.sort()}`);



 //Temperature Convertor
// Initialinz "temperatureCelsius" as a numeric variable
let temperatureCelsius = -60;
// creating a function which will take a numeric argument into "getTemperature"
function temperature(getTemperature) {
  // the Celsius degrees will be converted into Fahrenheit, and return
  return getTemperature * 9/5 + 32;
};
// calling the function:
console.log(`${temperatureCelsius} Celsius is ${temperature(temperatureCelsius)} in Fahrenheit`);




 //Temperature Convertor - Stretch 1
// Initializing "arrayOfCelsiusTemperatures" as an array of Celsius temperatures
let arrayOfCelsiusTemperatures = [23, 26, 30];
// create a function which with an argument "getTemperatures" which will take an array
function arrayTemperatures(getTemperatures) {
  // initialize a "fahrenheitTemperatures" array variable, which will contain the Fahrenheit temperatures
  let fahrenheitTemperatures = [];
  // the for...of loop will go through each individual element "celsius" of the array "getTemperatures"
  for (let celsius of getTemperatures) {
    // "fahrenheitTemperatures" will contain the conversion of the "celsius" temperature into Fahrenheit and added to "fahrenheitTemperatures.push(celsius * 9/5 + 32)"
    fahrenheitTemperatures.push(celsius * 9/5 + 32);
  };
  // the function will return the "fahrenheitTemperatures" array containing all Celsius conversions to Fahrenheit
  return fahrenheitTemperatures;
};
// we call the function in different ways:
arrayTemperatures(arrayOfCelsiusTemperatures);
arrayTemperatures([23, 26, 30]);



 //Temperature Convertor - Stretch 2
// initializing "objectOfCelsiusTemperatures" as an object with properties (cities) and values (Celsius temperatures)
let objectOfCelsiusTemperatures = { vancouver: 23, burnaby: 26, seattle: 30 };
// create a function that will take an object as an argument into "getTemperatures"
function objectTemperatures(getTemperatures) {
  // initializing a temporal object variable "fahrenheitTemperatures", which will hold the cities (properties) and their Fahrenheit temperatures (values)
  let fahrenheitTemperatures = {};
  // for...in loop will go through every single property (city) of the object "getTemperatures" per iteration
  for (let city in getTemperatures) {
    // the "city" will be added to the "fahrenheitTemperatures" object, with its converted value (Celsius to Fahrenheit) "getTemperatures[city] * 9/5 + 32"
    fahrenheitTemperatures[city] = getTemperatures[city] * 9/5 + 32;
  };
  // returning the object with the cities (properties) and its Fahrenheit temperatures (values)
  return fahrenheitTemperatures;
};
// running the function in different ways:
objectTemperatures(objectOfCelsiusTemperatures);
objectTemperatures({ vancouver: 23, burnaby: 26, seattle: 30 });



 //Temperature Convertor - Stretch 3
// create a function with an argument "getTemperature" which will take one Celsius temperature (one numeric values)
function temperature(getTemperature) {
  return getTemperature * 9/5 + 32;
};

// create a function with an argument "getTemperature" which will take an array of Celsius temperatures (several numeric values/elements)
function arrayTemperatures(getTemperatures) {
  let fahrenheitTemperatures = [];
  for (let celsius of getTemperatures) {
    fahrenheitTemperatures.push(celsius * 9/5 + 32);
  };
  return fahrenheitTemperatures;
};

// create a function with an argument "getTemperature" which will take an object of Cities (properties) and their Celsius temperatures (values)
function objectTemperatures(getTemperatures) {
  let fahrenheitTemperatures = {};
  for (let celsius in getTemperatures) {
    fahrenheitTemperatures[celsius] = getTemperatures[celsius] * 9/5 + 32;
  };
  return fahrenheitTemperatures;
};

// create a function that will call another function depending if the argument received in "data" is a number, array or object type
function anyTypeOfData(data) {
  // if the "data" variable type is a number it will call the function "temperature(data)"
  if (typeof(data) == 'number') {
    console.log(temperature(data));
    // if the "data" variable type is an array it will call the function "arrayTemperatures(data)"
  } else if (Array.isArray(data)) {
    console.log(arrayTemperatures(data));
    // Otherwise, if the "data" variable type is an object it will call the function "objectTemperatures(data)"
  } else {
    console.log(objectTemperatures(data));
  };
};

anyTypeOfData(23);
anyTypeOfData([23, 26, 30]);
anyTypeOfData({ vancouver: 23, burnaby: 26, seattle: 30 });



 //Most recurring letter
// initializing "sentence" as a string variable, which will get its value when the user is prompted for it "prompt('Ente a sentence')"
let sentence = prompt('Ente a sentence');
// we split the "sentence.split('')" into single characters (letters, spaces, etc.), and assign it to "splitSentenceIntoAnArray"
let splitSentenceIntoAnArray = sentence.split('');
// initializing "frequencyOfLettersObject" as an empty object, which will hold every single character (property) with the times (value) this repeats
let frequencyOfLettersObject = {};
// for...of loop will go through every single element "letter" of the array "splitSentenceIntoAnArray" per iteration
for (let letter of splitSentenceIntoAnArray) {
  // if the "letter" exist as a property within the object "frequencyOfLettersObject[letter]", its value will be incremented by one.
  if (frequencyOfLettersObject[letter]) {
    frequencyOfLettersObject[letter]++;
  } else {
    // otherwise, the property (letter) will be created within the object "frequencyOfLettersObject" and initialized with a value of one.
    frequencyOfLettersObject[letter] = 1;
  };
};
// after getting all characters/letters into the object, we need to get which letter/character most repeats
// we initialize an empty string variable "mostRecurrentLetter" which will contain the most repeated character/letter
let mostRecurrentLetter = '';
// we initialize a numeric variable "timesOfMostRecurrentLetter" with a value of zero
let timesOfMostRecurrentLetter = 0;
// we go through every single property (character) per iteration
for (let character in frequencyOfLettersObject) {
  // we compare the property value "frequencyOfLettersObject[character]" against our temporal variable "timesOfMostRecurrentLetter", which will contain the number of times a character has been repeated in the sentence we entered lines above
  if (frequencyOfLettersObject[character] > timesOfMostRecurrentLetter) {
    // if the value "frequencyOfLettersObject[character]" is greater than "timesOfMostRecurrentLetter", we assign the value of "frequencyOfLettersObject[character]" to "timesOfMostRecurrentLetter". Otherwise, we do nothing.
    timesOfMostRecurrentLetter = frequencyOfLettersObject[character];
    // at the same time we pass the "character" (property) that most repeats to "mostRecurrentLetter" to use it later on.
    mostRecurrentLetter = character;
  };
};
// after the for...in loop is done, we print the following result:
console.log(`The most recurring letter in your sentence "${sentence}" is \'${mostRecurrentLetter}\' repeated "${timesOfMostRecurrentLetter}" time(s)`);
