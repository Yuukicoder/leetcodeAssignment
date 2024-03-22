// 896. Monotonic Array
var bubbleSort = (arr) => {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the two elements
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var bubbleSort2 = (arr) => {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap the two elements
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var isMonotonic = x => {
    var result;
    if (JSON.stringify(x) == JSON.stringify(bubbleSort(x))) {
        result = true;
    } else if (JSON.stringify(x) == JSON.stringify(bubbleSort2(x))) {
        result = true;
    } else result = false;
    return result;

};
console.log(isMonotonic([1, 2, 3, 4, 5]));