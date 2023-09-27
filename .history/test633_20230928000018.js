// ! 633. Sum of Square Numbers
var judgeSquareSum = x => {
    var i = 0;
    var j = Math.sqrt(x);
    while (i <= j) {
        var sum = Math.pow(i, 2) + Math.pow(j, 2);
        if (sum == x) {
            return true;
        } else if (sum > x) {
            i--;
        } else j++;
    }
    return false;
}
judgeSquareSum(5);
// console.log(judgeSquareSum(5));