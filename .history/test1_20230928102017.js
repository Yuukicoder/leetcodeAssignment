// 1. Two Sum
var twoSum = (arr, x) => {
    var output = [];
    var i = 0;
    var j = 0;
    while (j < arr.length) {
        if (arr[i] + arr[j] == x) {
            output.push(i, j);
            i++;

        }
        j++;
    }
    return output;
}
console.log(twoSum([1, 2, 3], 5)); //[1,2]