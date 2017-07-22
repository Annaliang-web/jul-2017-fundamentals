10 % 5 // this will give you 0 because 10 is perfectly divisible by 5

Math.random() // this will give you a random number that is 0 or more and it's
              // less than 1

Math.floor(1.99999999999999) // this will give 1 (round down)

Math.ceil(1.00000000000001) // this will give 2 (round up)


/*
  Exercise:
    Write a piece of code that generates a random number between 0 and 99
*/

// Solution
Math.floor(Math.random() * 100)
