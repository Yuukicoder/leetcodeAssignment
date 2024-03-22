// 1. Two Sum
var twoSum = (arr, x) => {
    var output = [];
    var i = 0;
    var j = 0;
    while (i < arr.length) {
        if (arr[i] % 2 == 0) {
            output.push(arr[i]);
            // i++;

        }
        console.log(arr[i]);
        // j++;
        // console.log(arr[j]);
    }
    console.log(output);
    return output;
}
console.log(twoSum([1, 2, 3], 5)); //[1,2]