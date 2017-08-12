// counter example
// lets count from one to ten

console.log( 1 );
console.log( 2 );
console.log( 3 );
console.log( 4 );
console.log( 5 );
console.log( 6 );
console.log( 7 );
console.log( 8 );
console.log( 9 );
console.log( 10 );

let counter = 1;

while (counter <= 10) {
  console.log( counter );
  counter++; // incrementer
}

// create a counter object
const counter = {
  count: 0,
  step: 1,
  inc() { this.count += this.step },
  dec() { this.count -= this.step },
  set(n) { this.count = n },
  setStep(n) { this.step = n }
};

counter.count; // 0
counter.inc(); // 1
counter.inc(); // 2
counter.inc(); // 3
counter.dec(); // 2

// getter/setter
// attribute accessors
counter.set(100); // 100
counter.setStep(2);
counter.inc(); // 100 + 2 = 102

counter.count = 10;
counter.count = 20;
counter.count = 100;

// make this counter object more functional
// i want to be able to set the count property to any number
// i want a set method which takes in a value

// i want to be able to change the step
// when i increment, i may want to increment by 2s or 3s
// you would need to create a setStep method
// make a step property


//
