// ! 367. Valid Perfect Square
var isPerfectSquare = (num) => {
    return Math.floor(Math.sqrt(num)) == Math.sqrt(num);
}
console.log(isPerfectSquare(16));