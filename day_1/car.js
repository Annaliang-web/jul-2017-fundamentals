// Write a piece of code that asks the user for the year of a car and then prints: future, new, old or very old.

const year = parseInt(prompt('What year was your car made in?'));

if(year > 2017) {
  console.log('The car will be made in the future');
} else if(year > 2010) {
  console.log('The car is new');
} else if(year > 2000) {
  console.log('The car is old');
} else {
  console.log('The car is very old');
}
