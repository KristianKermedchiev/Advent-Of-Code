const input = require('./inputPartOne.js');

function sumPartNumbers(schematic) {
    // Split the input into lines
    let lines = schematic.trim().split('\n');
    
    // Convert the lines into a 2D array
    let grid = lines.map(line => line.split(''));

    let rows = grid.length;
    let cols = grid[0].length;

    // Helper function to check if a character is a symbol
    function isSymbol(char) {
        return char !== '.' && isNaN(parseInt(char));
    }

    // Directions array for 8 possible directions (including diagonals)
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],         [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    let sum = 0;

    // Traverse the grid to find numbers and check their adjacency to symbols
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (!isNaN(parseInt(grid[r][c]))) {
                let numStr = '';
                let numStart = c;

                // Extract the full number
                while (c < cols && !isNaN(parseInt(grid[r][c]))) {
                    numStr += grid[r][c];
                    c++;
                }

                let num = parseInt(numStr);

                // Check adjacency to symbols
                let adjacentToSymbol = false;
                for (let i = 0; i < directions.length; i++) {
                    let [dr, dc] = directions[i];
                    let adjR = r + dr;
                    let adjC = numStart + dc;
                    
                    if (adjR >= 0 && adjR < rows && adjC >= 0 && adjC < cols && isSymbol(grid[adjR][adjC])) {
                        adjacentToSymbol = true;
                        break;
                    }

                    // Check adjacency for all cells of the multi-digit number
                    for (let j = 1; j < numStr.length; j++) {
                        adjC = numStart + j + dc;
                        if (adjR >= 0 && adjR < rows && adjC >= 0 && adjC < cols && isSymbol(grid[adjR][adjC])) {
                            adjacentToSymbol = true;
                            break;
                        }
                    }

                    if (adjacentToSymbol) break;
                }

                if (adjacentToSymbol) {
                    sum += num;
                }
            }
        }
    }

    return sum;
}

console.log(sumPartNumbers(input)); 
