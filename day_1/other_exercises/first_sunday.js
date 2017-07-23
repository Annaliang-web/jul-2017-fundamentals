// Write a JavaScript program to find the first occurrence of the
// 1st of January being a Sunday between 2014 and 2050.

// Solution 1: Using a for loop
// Note: I commented out the break so the code will list all Sundays
//       Uncomment it to stop at the first Sunday.
for(let year = 2014; year <= 2050; year ++) {
  let date = new Date(year, 0, 1)

  if(date.getDay() === 0) {
    console.log(date)
    // break
  }
}

// Solution 2: Using a while loop
let year = 2014

while(year <= 2050) {
  let date = new Date(year, 0, 1)

  if(date.getDay() === 0) {
    console.log(date)
    break;
  }
  year ++
}
