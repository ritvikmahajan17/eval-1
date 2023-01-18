const score = rolls => {

    let curr = 0;
    let points = 0;

    while (curr < rolls.length) {



        if (rolls[curr] === 10) {
            if (curr + 2 < rolls.length) {
                points += rolls[curr] + rolls[curr + 1] + rolls[curr + 2];
                curr += 1;
            }
            else {
                break;
            }
        }
        else if (rolls[curr] < 10) {
            if (rolls[curr] + rolls[curr + 1] === 10) {
                if (curr + 2 < rolls.length) {
                    points += rolls[curr] + rolls[curr + 1] + rolls[curr + 2];
                    curr += 2;
                }
                else {
                    break;
                }
            }
            else {
                points += rolls[curr] + rolls[curr + 1];
                curr += 2;
            }
        }

    }

    return points;

}

const bestScore = allRolls => {

    const bestGame = allRolls.reduce((acc, game)=> {
        const oneGameScore = score(game);
        acc = Math.max(oneGameScore,acc);

        return acc;
    }, 0)

    return bestGame;

}

console.log(score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]))
console.log(score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]))
console.log(score([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))

const allGames = [ [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10],[6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
console.log(bestScore(allGames))