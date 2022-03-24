/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height invariables
2. Calculate both their BMIs using the formula(you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. */

const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;

// BMI = mass / height ** 2
//Test #1
const markBMI1 = massMark1 / (heightMark1 * heightMark1);
const johnBMI1 = massJohn1 / (heightJohn1 * heightJohn1);

//Test #2

const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;
const markBMI2 = massMark2 / (heightMark2 * heightMark2);
const johnBMI2 = massJohn2 / (heightJohn2 * heightJohn2);


const markHigherBMI1 = markBMI1 > johnBMI1;
const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markBMI1, johnBMI1, markHigherBMI1);
console.log(markBMI2, johnBMI2, markHigherBMI2);




