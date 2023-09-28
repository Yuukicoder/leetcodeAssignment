// 905. Sort Array By Parity
// var sortArrayByParity = arr => arr.forEach(element => element = 2);
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
var sortArrayByParity = arr => {
    var newArr = [];
    newArr.push(...bubbleSort(arr.filter(x => x % 2 == 0)));
    return newArr;
}

// var sortArrayByParity = arr => arr.forEach(element => {
//     if (element % 2 == 0)
//         console.log(element);
//     return element;
// });
console.log(sortArrayByParity([3, 1, 2, 4, 2, 0]));