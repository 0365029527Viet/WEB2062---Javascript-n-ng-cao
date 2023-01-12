const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            'Neuer',
            'Pavad',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummer',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hammels'],
    date: 'Nov 9th, 2023',
    odds: {
        team1: 1.5,
        x: 3.25,
        team2: 6.5,
    }

};
//1.
for (const [i, player] of game.scored.entries())
    console.log(`Goal ${i + 1}:${player}`);
//2.Tính trung bình odds là làm lặp laiij đối tượng 
const odds = Object.values(game.odds);
let avarage = 0;
for (const odd of Object.values(game.odds))
    avarage += odd;
avarage /= odds.length;
console.log(avarage);
//3.
for (const [team, odd] of Object.entries(game.odds)) {
    const teamSrt = team === 'x' ? 'draw': `vicory ${game[team]}`;
    console.log(`Odd of ${teamSrt} ${odd}`);
} 