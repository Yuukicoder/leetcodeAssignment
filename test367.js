// ! 367. Valid Perfect Square
// todo: sqrt
// var isPerfectSquare = (x) => Math.floor(Math.sqrt(x)) == Math.sqrt(x);
// Todo: binary search 
var isPerfectSquare = (x) => {
    if (x == 1) {
        return true;
    }
    let l = 1;
    let r = x;
    while (l <= r) {
        let m = parseInt((l + r) / 2); // let to UPDATE value instead re declaring value
        if (m * m == x) {
            return true;
        } else if (m * m < x) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return false;
}
console.log(isPerfectSquare(16));