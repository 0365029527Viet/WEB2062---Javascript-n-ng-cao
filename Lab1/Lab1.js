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
    score : '4:0',
    scorder: ['Lewandowski','Gnarby','Lewandowski','Hammels'],
    date: 'Nov 9th, 2023',
    odds: {
        team1: 1.5,
        x: 3.25,
        team2: 6.5,
    }
    
};

//Dùng hàm hủy để hủy cấu trúc mảng ban đầu
const [player1, player2] = game.players;
console.log(player1, player2);

//Tạo 1 biến thủ môn và mảng vs tất cả các cầu thủ còn lại. 
const [gk, ...fieldPlayer] = player1;
console.log(gk, fieldPlayer);

//Tạo 1 mảng vs tất cả người chơi còn lại
const allPlayer = [...player1, ...player2];
console.log(allPlayer);

//4.
const playersFinal = [...player1, 'Thiago', 'Coutinho', 'Periscric'];
//Tạo Biến dựa trên tỉ lệ cược odds
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);
//5.Taọ hàm prinGoals
const printGoals = function(...players){
    console.log(`${players.length} goals were scored`);
}

    // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimich');
    // printGoals('Muller', 'Davies');
    printGoals(game.scored);
//6
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

