// ! 633. Sum of Square Numbers
var judgeSquareSum = x => {
    var l = 0;
    var r = Math.sqrt(x);
    while (l <= r) {
        var sum = Math.pow(l, 2) + Math.pow(r, 2);
        if (sum == x) {
            return true;
        } else if (sum > x) {
            l--;
        } else r++;
    }
    return false;
}
judgeSquareSum(5);
// console.log(judgeSquareSum(5));