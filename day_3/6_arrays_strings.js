// arrays and strings
// they are related

// "Jacob" is an array of characters
// ['J', 'a', 'c', 'o', 'b']
  //        01234
let name = "Jacob";
name[0]; // "J"
name[4]; // "b"

// we cannot mutate an string using the array syntax, but we can access value
name[2] = "k"; // "Jakob"

// method - it is function belonging to a class or object
let characters = name.split(); // split will turn a string into an array of characters
let name = characters.join();

// csv - comma separated values
let portfolioString = "TSLA,GOOG,AMZN,MSFT,HCG,SNAP";

// parse the portfolio string and store it into a datastructure
// loop through it using a for of to display our portfolio to the user
let portfolio = portfolioString.split(",");
for (let item of portfolio) {
  console.log(item);
}

portfolio[5] = null;
portfolio[5] = "APRN";

// send the data back to the server in a concise and optimzed way
portfolioString = portfolio.join(",");




//
