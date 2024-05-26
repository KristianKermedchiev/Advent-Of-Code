let input = require('./inputPartOne');

function TrebuchetPartOne(input) {
    let lines = input.split("\n");
    
    let finalNumber = 0;

    for (let i = 0; i < lines.length; i++) {
        let numbers = lines[i].replace(/[^0-9]/g, '');
        
        if (numbers.length >= 2) {
            let firstDigit = numbers.substring(0, 1);
            let lastDigit = numbers.substring(numbers.length-1);
            let result = firstDigit + lastDigit;
            finalNumber += Number(result);
        }
        else {
            let digit = numbers + numbers;
            finalNumber += Number(digit);
        };
    };

    return finalNumber;
};

console.log(TrebuchetPartOne(input));



