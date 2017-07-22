// Use a while loop to log the EVEN numbers from 0 to 100 to the console.
// Solution 1
let x = 0;

while(x <= 100) {
  console.log(x);
  x += 2;
}


// Solution 2
let x = 0;

while(x <= 100) {
  if(x % 2 === 0) {
    console.log(x);
  }
  x += 1;
}
