const input = require('./partTwoInput');

function partTwo(input) {

    let lines = input.split('\n');
    let totalPoints = 0;
    let instances = {};

    for (let line of lines) {
        let [cardId, data] = line.split(': ');
        let [winningStr, pickedStr] = data.split('|');
        let winningNumbers = [];
        let pickedNumbers = [];

        let match;
        let pattern = /\d+/g;

        while ((match = pattern.exec(winningStr)) !== null) {
            winningNumbers.push(match[0]);
        }

        while ((match = pattern.exec(pickedStr)) !== null) {
            pickedNumbers.push(match[0]);
        }

        let count = 0;
        for (let winningNum of winningNumbers) {
            if (pickedNumbers.includes(winningNum)) {
                count++;
            }
        }

        instances[cardId.replace('Card ', "").trim()] = count;
    }

    function cardCopy (input){
        totalPoints++;
        const instancesCount = instances[input];

        if (instancesCount !== 0){
            for (let i = parseInt(input) + 1; i <= parseInt(input) + instancesCount; i++){
                cardCopy(i);
            }
        }
    }

    for (let key of Object.keys(instances)){
        cardCopy(key);
    }

    return totalPoints;
}

console.log(partTwo(
    input
));