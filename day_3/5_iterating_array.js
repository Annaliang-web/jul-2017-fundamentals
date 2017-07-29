// loop - where computer does the hard work for us
// array data type - data structure
// for (storage variable of my array)
// step through each item in my array and store it in this temporary variable
// for of loop - it is used specifically for the array data type
let todoList = ["Laundry", "Gym", "Code", "Sleep", "Jog", "Eat", "Game"];

todoList[0]; // "Laundry"
todoList[1]; // "Gym"
todoList[2]; // "Code"
todoList[3]; // "Sleep"

for (let item of todoList) {
  console.log(item);
}
