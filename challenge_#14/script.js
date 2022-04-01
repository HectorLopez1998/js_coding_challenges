// Coding challenge_#14
/* 
1. Re-create challenge #13, but this time using ES6 classes: create and 'EVCL' child class of the 'CarCL' class
2. Make the 'charge' property private.
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!

Data Car 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/

class CarCl {
  constructor(make, speed) {
    this.make = make
    this.speed = speed
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);

  }
  break() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);

  }
  get speedUS() {
    return this.speed / 1.6
  }

  set speedUS(speed) {
    this.speed = speed * 1.6
  }
}

class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed)
    this.#charge = charge
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.#charge--}%`);
    return this
  }

  break() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.#charge}%`);
    return this
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo
    console.log(this.#charge);
    return this
  }
}

const rivian = new EVCL('Rivian', 120, 23)
const sd = new CarCl('d', 34)
console.log(sd);
console.log();
console.log(rivian.accelerate().break().accelerate().break().break().accelerate().chargeBattery(29));

