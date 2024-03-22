// 1. Two Sum
var twoSum = (arr, x) => {
    var output = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (a[j] + a[i] == x)
                console.log(a[j] + " " + a[i]);
        }

    }
    console.log(output);
    return output;
}
console.log(twoSum([1, 2, 3], 5)); //[1,2]