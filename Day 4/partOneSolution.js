const input = require('./partOneInput').trim();

function partOne (input){
    
    let rows = input.split('\n');
    let totalPoints = 0;

    for(let row of rows){
        let data = row.split('| ');
        let winningNumbers = data[0].split(': ')[1].split(" ");
        let pickedNumbers = data[1].split(" ");
        let currentScore = 0;

        for (let i = 0; i < winningNumbers.length; i++){
            let currentWinningNumber = winningNumbers[i];
            if(currentWinningNumber === ''){
                continue;
            }

            for (let y = 0; y < pickedNumbers.length; y++){
                let currentNumber = pickedNumbers[y];

                if (currentWinningNumber === currentNumber){

                    currentScore === 0 ? currentScore += 1 : currentScore *= 2;
                    break;
                };
            }
        }
        totalPoints += currentScore;
    }
    return totalPoints;
};

console.log(partOne(input));