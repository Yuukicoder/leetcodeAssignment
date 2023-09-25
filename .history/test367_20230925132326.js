// ! 367. Valid Perfect Square
var isPerfectSquare = (num) => {
    return Math.floor(Math.sqrt(num)) == Math.sqrt(num);
}
// binary search 
var binarySearch = (x) => {
    if (x == 1) {
        return 1;
    }
    var l = 0;
    var r = x;
    while (l <= r) {
        var m = (l + r) / 2;
        if (m * m == x) {
            return m;
        } else if (m * m > x) {
            m = l + 1;
        } else m = r - 1;
    }
    return m;
}
console.log(binarySearch(16));