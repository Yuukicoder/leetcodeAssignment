// 905. Sort Array By Parity
var sortArrayByParity = arr => arr.forEach(element => element % 2);
// var sortArrayByParity = arr => arr.forEach(element => {
//     if (element % 2 == 0)
//         console.log(element);
//     return element;
// });
console.log(sortArrayByParity([3, 1, 2, 4]));