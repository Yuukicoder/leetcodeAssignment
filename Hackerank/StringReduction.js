const readline = require("readline");

// Tạo giao diện để đọc đầu vào từ terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function removePreviousOccurrences(s) {
    const seen = new Set(); // Lưu các ký tự đã gặp
    let result = ""; // Kết quả đầu ra

    for (const char of s) {
        if (!seen.has(char)) { // Nếu ký tự chưa xuất hiện, thêm vào kết quả
            result += char;
            seen.add(char); // Đánh dấu đã gặp ký tự
        }
    }
    return result;
}

// Hỏi người dùng nhập chuỗi
rl.question("Nhập một chuỗi ký tự: ", (input) => {
    const result = removePreviousOccurrences(input);
    console.log("Kết quả sau khi loại bỏ ký tự lặp:", result);
    rl.close(); 
});
