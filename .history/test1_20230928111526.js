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
    var output = [];
    for (let i = 0; i < arr.length; i++) {
        const element = x - arr[i];
        if (output.includes(element) == true) {
            console.log(element + " " + a[i]);
        } else output.push(a[i]);
    }
}
console.log(twoSum([1, 2, 3], 3)); //[1,2]