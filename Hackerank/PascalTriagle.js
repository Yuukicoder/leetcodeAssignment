const readline = require("readline");

// Tạo interface để nhận input từ người dùng
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Hỏi người dùng nhập số dòng
rl.question("Nhập số dòng của tam giác Pascal: ", (answer) => {
  const n = parseInt(answer, 10);

  // Gọi hàm in tam giác Pascal
  printPascalsTriangle(n);

  rl.close(); // Đóng interface
});

// Hàm in tam giác Pascal
function printPascalsTriangle(n) {
    function binomialCoefficient(n, k) {
      let res = 1;
      for (let i = 0; i < k; i++) {
        res *= n - i;
        res /= i + 1;
      }
      return res;
    }
  
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j <= i; j++) {
        row.push(binomialCoefficient(i, j));
      }
      console.log(row.join(" "));
    }
  }
  