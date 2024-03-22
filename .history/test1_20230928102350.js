// 1. Two Sum
var twoSum = (arr, x) => {
    var output = [];
    var i = 0;
    var j = 0;
    while (j < arr.length) {
        if (arr[i] + arr[j] == x) {
            output.push(a[i]);
            output.push(a[j]);
            i++;

        }
        j++;
        console.log(a[j]);
    }
    console.log(output);
    return output;
}
console.log(twoSum([1, 2, 3], 5)); //[1,2]