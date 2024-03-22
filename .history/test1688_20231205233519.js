// 1688. Count of Matches in Tournament
var numberOfMatches = x => {
    var s = 0;
    if (x % 2 == 0)
        var q = x / 2;
    else q = (x - 1) / 2;
    var i = x - q;
    if (i != 1) {
        s += q;
        return (numberOfMatches(i))
    }
    console.log(s);
}
numberOfMatches(7)