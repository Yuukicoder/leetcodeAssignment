// 1. Two Sum
var twoSum = (arr, x) => {
    // ================== brute force ================
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
    // =================== Hash map ====================
    var output = [];
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const element = x - arr[i];
        if (map.has(element)) {
            return [map.get(element), i]
        }
        map.set(arr[i], i);
        // return [arr[i], element];
    }
}
console.log(twoSum([1, 2, 3], 5)); //[1,2]
console.log(twoSum([1, 2, 3], 3)); //[0,1]