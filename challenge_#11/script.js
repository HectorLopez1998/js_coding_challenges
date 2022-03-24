// Coding Challenge #11

/* 1. Use a constructor function to implement a car. A car has a make and a speed property. The speed property is the current speed of the car in km/h.
  2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console.
  3. Implement a break method that will decrease the car speed by 5, and log the new speed to the console.
  4. Create two car objects and experiment with calling 'accelerate' and 'break' multiple times on each of them.

  Data Car 1: 'BMW' going at 120 km/h
  Data Car 2: 'Mercedes' going at 95 km/h
  */

const Car = function (make, speed) {
  this.make = make
  this.speed = speed
}

Car.prototype.accelerate = function () {
  const newSpeed = this.speed += 10
  console.log(this.make + ' increased speed by ' + newSpeed);
}

Car.prototype.break = function () {
  this.speed -= 5
  console.log(this.make + ' decreased speed by ' + this.speed);
}

const bmw = new Car('BMW', 120)
const mercedes = new Car('Mercedes', 95)
console.log(bmw);
console.log(mercedes);
bmw.accelerate()
bmw.accelerate()
bmw.accelerate()
mercedes.break()
mercedes.break()
console.log(bmw);
console.log();
console.log(mercedes);
