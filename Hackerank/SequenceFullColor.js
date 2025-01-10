function isFullOfColors(sequence) {
    let red = 0, green = 0, yellow = 0, blue = 0;

    for (const color of sequence) {
        // Update counters for each color
        if (color === 'R') red++;
        else if (color === 'G') green++;
        else if (color === 'Y') yellow++;
        else if (color === 'B') blue++;

        // Check prefix conditions
        if (Math.abs(red - green) > 1 || Math.abs(yellow - blue) > 1) {
            return false;
        }
    }

    // Check total count conditions
    return red === green && yellow === blue;
}

function processInput(input) {
    const lines = input.trim().split("\n");
    const testCases = parseInt(lines[0], 10);
    const results = [];

    for (let i = 1; i <= testCases; i++) {
        const sequence = lines[i];
        results.push(isFullOfColors(sequence) ? "True" : "False");
    }

    // return results.join("\n");
    console.log(results);
}
console.log(

    processInput("RGGR")
);
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input = "";

// // Gather all input lines
// rl.on("line", (line) => {
//     input += line + "\n";
// });

// rl.on("close", () => {
//     // Process the input and print results
//     console.log(processInput(input));
// });
