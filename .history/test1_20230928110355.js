// 1. Two Sum
var twoSum = (arr, x) => {
    // var output = [];
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[j] + arr[i] == x)
    //             // console.log(i + " " + j);
    //             output.push(i, j);
    //     }

    // }
    // console.log(output);
    // return output;
    return arr.filter((a, b) => a + b == x);
}
console.log(twoSum([1, 2, 3], 5)); //[1,2]