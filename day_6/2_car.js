const car = {
  // data
  make: "Mercedes",
  model: "ML350 Diesel",
  year: 2014,
  capacity: 5,
  speed: 0,
  maxSpeed: 200,

  // methods or behaviours
  stop() {
    this.speed = 0;
    console.log("I am stopping...")
  },
  park() { console.log("I am parking...") },
  drive() { console.log(`I am driving at ${ this.speed } km/h...`) },
  setSpeed(n) {
    if (n > this.maxSpeed) {
      this.speed = this.maxSpeed;
    } else {
      this.speed = n;
    }
  },
  getSpeed() { return this.speed },
  incSpeed() { this.speed++ },
  decSpeed() { this.speed-- },
};

car.speed = 50;
car.speed = 30;
car.speed = 100;

car.setSpeed(50); // 50
car.setSpeed(30); // 30
car.setSpeed(100); // 100
car.setSpeed(200); // 200
car.setSpeed(240); // 200

// Test
console.log( car.make ); // "Mercedes"
console.log( car.speed ); // 0
car.stop(); // "I am stopping..."
car.park(); // "I am parking..."
car.drive(); // "I am driving..."

// i want to be able to set the speed of the car
// i want to tell the user how fast they are going when they are driving
// i want to be able to increase the speed
// i want to be able to decrease the speed
// i want slam of the brakes, emergency stop
