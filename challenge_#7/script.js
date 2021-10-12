/* Coding Challenge #7
Let's go back to Mac and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass,and height (Mac Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI(the same method on both objects). Store the BMI value to a property, and also return it from the method

3. Log to the console who has the higher BMI,together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mac's (23.9)!"

Test data: Mac weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. */

const macMillerBMI = {
  firstName: 'Mac',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,
  calcMacBMI: function(){
    this.macBMI = this.mass / (this.height ** 2);
    return this.macBMI;
  }
}

const johnSmithBMI = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  calcJohnBMI: function(){
    this.johnBMI = this.mass / (this.height ** 2);
    return this.johnBMI;
  }
}
 macMillerBMI.calcMacBMI()
 johnSmithBMI.calcJohnBMI()

if (macMillerBMI.macBMI > johnSmithBMI.johnBMI) {
  console.log(`${macMillerBMI.firstName} ${macMillerBMI.lastName}'s BMI (${macMillerBMI.calcMacBMI()}) is higher than ${johnSmithBMI.firstName} ${johnSmithBMI.lastName}'s BMI (${johnSmithBMI.calcJohnBMI()})`)
}else {
  console.log(`${johnSmithBMI.firstName} ${johnSmithBMI.lastName}'s BMI (${johnSmithBMI.calcJohnBMI()}) is higher than ${macMillerBMI.firstName} ${macMillerBMI.lastName}'s BMI (${macMillerBMI.calcMacBMI()})`)
}


