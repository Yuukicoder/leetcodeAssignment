function findSmallestMultiple(N) {
    if (N === 1) return "9";

    const queue = [];
    queue.push("9");

    while (queue.length > 0) {
        const current = queue.shift();

        const num = BigInt(current); // Use BigInt to handle large numbers

        if (num % BigInt(N) === 0n) {
            return current;
        }

        queue.push(current + "0");
        queue.push(current + "9");
    }

    return -1; // This should never happen
}

function processInput(input) {
    const lines = input.trim().split("\n");
    const T = parseInt(lines[0]);
    const results = [];

    for (let t = 1; t <= T; t++) {
        const N = parseInt(lines[t]);
        results.push(findSmallestMultiple(N));
    }

    console.log(results.join("\n"));
}

const input = `3
5
7
1`;

processInput(input);
