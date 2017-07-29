
// array - indexed list of information
// ordered list
// 2 ways to create arrays
let shoppingList = ['milk', 'eggs', 'cheese', 'fruit', 'veggies', 'beer'];

// 1. milk
// 2. eggs
// 3. cheese
// 4. fruit
// 5. veggies
// 6. beer

// array constructor
let shoppingList = new Array();
// array method - a function, a list of instructions, that allow us to access or manipulate teh array

shoppingList.push('milk'); // 0
shoppingList.push('eggs'); //  1
shoppingList.push('cheese'); // 2
shoppingList.push('fruit'); // 3
shoppingList.push('veggies'); // 4
shoppingList.push('beer'); // 5 <- the address of 5 will give us 'beer'

// give me the first item on my shopping list
// shoppingList[index];
shoppingList[0]; // we start counting from zero instead of 1
shoppingList[5]; // how do we get the last item on my shopping list

// one-dimensional array - we need one piece of information to get to the data

let names = ["Jacob", "Thuong", "Tran"];
// what is my first name
names[0]; // "Jacob"
// what is my middle name
names[1]; // "Thuong"
// what is my last name
names[2]; // "Tran"


let firstName = "Jacob";
let middleName = "Thuong";
let lastName = "Tran";
// loop - where computer does the hard work for us
// array data type - data structure
// for (storage variable of my array)
// step through each item in my array and store it in this temporary variable
// for of loop - it is used specifically for the array data type
for (let item of todoList) {
  console.log(item);
}

// for in loop - is used for objects




//
