// ! 367. Valid Perfect Square
// binary search 
var isPerfectSquare = (x) => {
    if (x == 1) {
        return true;
    }
    let l = 1;
    let r = x;
    while (l <= r) {
        var m = (l + (r - l)) / 2;
        if (m * m == x) {
            return true;
        } else if (m * m < x) {
            m = l + 1;
        } else m = r - 1;
    }
    return false;
}
console.log(isPerfectSquare(4));
// binarySearch(16);
// console.log("hello");