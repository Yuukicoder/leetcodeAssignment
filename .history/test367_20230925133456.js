// ! 367. Valid Perfect Square
// binary search 
var isPerfectSquare = (x) => {
    if (x == 1) {
        return true;
    }
    let l = 0;
    let r = x - 1;
    while (l <= r) {
        var m = parseInt((l + (r - l)) / 2);
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