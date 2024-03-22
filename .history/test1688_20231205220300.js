// 1688. Count of Matches in Tournament
var numberOfMatches = x => {
    if (x % 2 == 0)
        var q = x / 2;
    else q = (x - 1) / 2;
    var i = x - q;
    if (i == 1) console.log(q);
    return (numberOfMatches(i))
}
numberOfMatches(7)