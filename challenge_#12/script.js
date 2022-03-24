// #Coding challenge_#12
/*
1. Re-create challenge_#11, but this time using an ES6 class.
2. Add a getter called 'speedUS' which return the current speed in mi/h(divide by 1.6).
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

  Data Car 1: 'Ford' going at 120 km/h
  */

class CarCl {
  constructor(make, speed) {
    this.make = make
    this.speed = speed
  }

  accelerate() {
    this.speed += 10
    console.log('The car accelerated by ' + this.speed);
  }

  break() {
    this.speed -= 5
    console.log('The car slowed down by ' + this.speed);
  }

  get speedUs() {
    return this.speed / 1.6

  }

  set speedUs(speed) {
    this.speed = speed * 1.6
  }
}

const ford = new CarCl('Ford', 120)
ford.speedUs = 50
console.log(ford);