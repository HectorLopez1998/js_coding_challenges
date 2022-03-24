// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
 

const averageScoreDolpins = (96 + 108 + 89) / 3;
const averageScoreKoalas = (88 + 91 + 110) / 3;
console.log(`Dolphins ${averageScoreDolpins}`);
console.log(`Koalas ${averageScoreKoalas}`);

if(averageScoreDolpins > averageScoreKoalas){
  console.log('The Dolphins are the winners!');
} else if (averageScoreDolpins === averageScoreKoalas){
  console.log('Looks like a draw to me...Boring...');
} else {
  console.log('The Koalas are the winners!');
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

//Bonus 1
// 3. Bonus1:Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

const requirement = 100;
const averageScoreDolpins1 = (97 + 112 + 101) / 3;
const averageScoreKoalas1 = (109 + 95 + 123) / 3;
console.log(`Bonus Dolphins ${averageScoreDolpins1}`);
console.log(`Bonus Koalas ${averageScoreKoalas1}`);

if(averageScoreDolpins1 >= requirement && averageScoreDolpins1 > averageScoreKoalas1) {
  console.log('The Dolphins are the winners!');
 } else if(averageScoreDolpins1 &&  averageScoreKoalas1 >= requirement && averageScoreDolpins1 === averageScoreKoalas1) {
  console.log('Draw');
 } else if (averageScoreDolpins1 && averageScoreKoalas1 < requirement){
  console.log("No winner tonight!");
 } else {
   console.log('The Koalas win for the first time in their history!');
 }

 console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

 // Bonus 2
 // 4. Bonus2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
 // Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

 const averageScoreDolpins2 = (97 + 112 + 101) / 3;
 const averageScoreKoalas2 = (109 + 95 + 106) / 3;
 console.log(`Bonus Dolphins ${averageScoreDolpins2}`);
console.log(`Bonus Koalas ${averageScoreKoalas2}`);
 if(averageScoreDolpins2 >= requirement && averageScoreDolpins2 > averageScoreKoalas2) {
  console.log('The Dolphins are the winners!');
 } else if(averageScoreDolpins2 &&  averageScoreKoalas2 >= requirement && averageScoreDolpins2 === averageScoreKoalas2) {
  console.log('Draw');
 } else if (averageScoreDolpins2 && averageScoreKoalas2 < requirement){
  console.log("No winner tonight!");
 } else {
   console.log('The Koalas win for the first time in their history!');
 }




