let input = require('./inputDayTwo');

function cubeConundrumSolution(input){

    let sumOfIds = 0;

    for(let game of input.split('\n')){
        let valid = true;

        let [gameId, gameData] = game.split(': ');

        for (let gameSet of gameData.split("; ")){
            let cubeCounts = {
                red: 12,
                green: 13,
                blue: 14
            };

            for (let cube of gameSet.split(', ')){
                let [count, color] = cube.split(' ');
                cubeCounts[color] -= parseInt(count);

                for (let key of Object.keys(cubeCounts)){
                    if (cubeCounts[key] < 0){
                        valid = false;
                        break;
                    }
                }
            }
        }
        if (valid){
            sumOfIds += parseInt(gameId.split(' ')[1]);
        }
    }

    return sumOfIds;
};

console.log(cubeConundrumSolution(input));