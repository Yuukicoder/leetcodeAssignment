// ! 367. Valid Perfect Square
// binary search 
var isPerfectSquare = (x) => {
    if (num < 0) {
        return false;
    }
    if (num == 1) {
        return true;
    }
    let start = 1;
    let end = num;
    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        if (mid * mid == num) {
            return true;
        } else if (mid * mid < num) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return false;
}
console.log(isPerfectSquare(4));
// binarySearch(16);
// console.log("hello");