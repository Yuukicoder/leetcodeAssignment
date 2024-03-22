// 1. Two Sum
var twoSum = (arr, x) => {
    var output = [];
    var i = 0;
    var j = 0;
    while (j < arr.length) {
        // if (arr[i] + arr[j] == x) {
        output.push(arr[i]);
        output.push(arr[j]);
        i++;

        // }
        console.log(arr[i]);
        j++;
        console.log(arr[j]);
    }
    console.log(output);
    return output;
}
console.log(twoSum([1, 2, 3], 5)); //[1,2]