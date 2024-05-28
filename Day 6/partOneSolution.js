

function partOneSolution(input){

    const [timeRow, distanceRow] = input.split("\n");

    let currentRoundPoints = 0;
    let totalPoints = [];

    const time = timeRow.split(": ")[1].split(" ").filter(x => x !== "");
    const distance = distanceRow.split(": ")[1].split(" ").filter(x => x !== "");

    while (time.length > 0){
        let currentRecordDistance = parseInt(distance.shift());
        let currentRecordTime = parseInt(time.shift());

        for (let i = 1; i < currentRecordTime; i++){
            let holdButton = i;
            let speed = holdButton;
            let calculatedDistance = ((currentRecordTime - holdButton) * speed)

            if(calculatedDistance > currentRecordDistance){
                currentRoundPoints++;
            }
        }

        totalPoints.push(currentRoundPoints);
        currentRoundPoints = 0;
    }
    
    return totalPoints.reduce((acc, num) => acc * num, 1);
}

console.log(partOneSolution(
`Time:        55     99     97     93
Distance:   401   1485   2274   1405`))