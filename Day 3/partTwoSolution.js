const input = require('./inputPartTwo');

function partTwoSolution(input){

    let total = 0;
    let data = input.trim().split('\n');
    let map = [];

    for (let lineIndex = 0; lineIndex < data.length; lineIndex++){
        let numbers = [];

        let match;
        let pattern = /\d+/g;
        while ((match = pattern.exec(data[lineIndex])) !== null){
            numbers.push({ start: match.index, end: pattern.lastIndex - 1, number: match[0] });
        }

        for (let number of numbers){
            for (let y = lineIndex - 1; y <= lineIndex + 1; y++){
                for(let x = number.start - 1; x <= number.end + 1; x++){
                    if (y >= 0 && y < data.length && x >= 0 && data[lineIndex].length > x){
                        if (data[y][x] == "*"){
                            map.push({x, y, number: parseInt(number.number)})
                        }
                    }
                }
            }
        }
    }

    for (let y = 0; y < data.length; y++){
        for (let x = 0; x < data[y].length; x++){
            let selected = map.filter(el => el.x == x && el.y == y);
            if (selected.length == 2){
                let nums = selected.map(el => el.number);
                total += nums[0] * nums[1];
            }
        }
    }
    return total;
};

console.log(partTwoSolution(input));