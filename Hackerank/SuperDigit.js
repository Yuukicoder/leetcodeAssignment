function computeSuperDigit(num) {
    // Độ dài num = 1 thì chuyển về int
    if (num.length === 1) {
        return parseInt(num, 10);
    }

    // Tính tổng chữ số của num
    const digitSum = num.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);

    // Đệ quy lại num đến lúc dừng khi num < 10
    return computeSuperDigit(digitSum.toString());
}

function superDigit(n, k) {
    // Tính tổng chữ số của n sau đó nhân k
    const initialSum = n.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0) * k;

    
    return computeSuperDigit(initialSum.toString());
}


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter n and k (space-separated): ", (input) => {
    const [n, k] = input.split(" ");
    const result = superDigit(n, parseInt(k, 10));
    console.log("Super digit:", result);
    rl.close();
});
