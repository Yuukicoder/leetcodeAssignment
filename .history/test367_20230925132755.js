// ! 367. Valid Perfect Square
var isPerfectSquare = (num) => {
    return Math.floor(Math.sqrt(num)) == Math.sqrt(num);
}
// binary search 
var binarySearch = (x) => {
    if (x == 1) {
        return true;
    }
    var l = 0;
    var r = x - 1;
    while (l <= r) {
        var m = (l + r) / 2;
        if (m * m == x) {
            return true;
        } else if (m * m < x) {
            m = l + 1;
        } else m = r - 1;
    }
    // console.log(m);
    return false;
}
console.log(binarySearch(1));
// binarySearch(16);
// console.log("hello");