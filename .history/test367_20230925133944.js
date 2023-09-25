// ! 367. Valid Perfect Square
// binary search 
var isPerfectSquare = (x) => {
    if (x == 1) {
        return true;
    }
    var l = 1;
    var r = x;
    while (l <= r) {
        let m = parseInt((l + r) / 2);
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
console.log(isPerfectSquare(4));
// binarySearch(16);
// console.log("hello");