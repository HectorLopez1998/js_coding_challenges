// Coding Challenge #1
/* 
We're building a football betting app (soccer for my American friends :))

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players.
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho', and 'Perisic'.
5. Based on the game.odds object, create one variable for each odd (called 'team', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names(Not an array) and prints each of them to the console, along with the number of gaols scored in total(number of player names passed in)
7. The team with the lower odd is more likely to win.Print to the console which team is more likely to win, WITHOUT using an if\else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored 
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Gnarby',
      'Lewandowski'
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze'
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 13.33,
    x: 3.25,
    team2: 6.5,
  },
};


let [players1, players2] = game.players
let [gk1, ...fieldPlayers1] = players1
let [gk2, ...fieldPlayers2] = players2
let allPlayers = [...players1, ...players2]
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic']

let { odds: { team1, draw, team2 } } = game; // Nested destructuring

function printGoals(...scorers) {
  for (let i = 0; i <= scorers.length - 1; i++) {
    console.log(scorers[i]);
  }
  console.log(`Goals scored: ${scorers.length}`);
}
printGoals(...game.scored)
team1 < team2 && console.log('team1 is more likely to win')
team1 > team2 && console.log('team2 is more likely to win')
console.log(team1, team2);