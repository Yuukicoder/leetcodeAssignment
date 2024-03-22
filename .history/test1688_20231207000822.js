// 1688. Count of Matches in Tournament
var s = 1;
var numberOfMatches = x => {
    if (x == 1)
        return 0;
    // if (x % 2 == 0)
    //     return x / 2 + numberOfMatches(x / 2);
    // else return (x - 1) / 2 + numberOfMatches((x - 1) / 2 + 1)
    x % 2 == 0 ? x / 2 + numberOfMatches(x / 2) : (x - 1) / 2 + numberOfMatches((x - 1) / 2 + 1)
}
console.log(numberOfMatches(14));
console.log(numberOfMatches(7));