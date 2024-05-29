

function partOneSolution(input) {

    const [timeRow, distanceRow] = input.split("\n");

    let totalPoints = 0;

    const time = parseInt(timeRow.split(": ")[1].split(" ").filter(x => x !== "").reduce((acc, num) => acc + num));
    const distance = parseInt(distanceRow.split(": ")[1].split(" ").filter(x => x !== "").reduce((acc, num) => acc + num));

    for (let i = 1; i < time; i++) {
        let holdButton = i;
        let speed = holdButton;
        let calculatedDistance = ((time - holdButton) * speed)

        if (calculatedDistance > distance) {
            totalPoints++;
        }
    }

    return totalPoints;
}

console.log(partOneSolution(
    `Time:        55     99     97     93
Distance:   401   1485   2274   1405`))