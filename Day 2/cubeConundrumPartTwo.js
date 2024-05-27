const input = require('./inputDayTwoPartTwo');

function cubeConundumPartTwo(input){

    let totalSum = 0;

    for(let game of input.split('\n')){
        let [gameId, gameData] = game.split(': ');

        let globalCounts = {
            red: 0,
            green: 0,
            blue: 0
        };

        for (let gameSet of gameData.split("; ")){
            let localCounts = {
                red: 0,
                green: 0,
                blue: 0
            };

            for (let cube of gameSet.split(', ')){
                let [count, color] = cube.split(' ');
                localCounts[color] += parseInt(count);

                for (let key of Object.keys(localCounts)){
                    if (localCounts[key] > globalCounts[key]){
                        globalCounts[key] = localCounts[key];
                    }
                }
            }
        }

        totalSum += globalCounts.red * globalCounts.blue * globalCounts.green;
    }

    return totalSum;
    
};

console.log(cubeConundumPartTwo(input));