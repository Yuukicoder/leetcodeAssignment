//! 896. Monotonic Array
var isMonotonic = x => {
    var inc = false; //increase
    var dec = false; //decrease
    var result = true;
    for (let i = 0; i < x.length; i++) {
        if (x[i] < x[i + 1]) {
            inc = true;
            if (dec == true) {
                result = false;
                break;
            }
        } else if (x[i] > x[i + 1]) {
            dec = true;
            if (inc == true) {
                result = false;
                break;
            }
        }
    }

    return result;
};
console.log(isMonotonic([1, 2, 3, 4, 5]));
console.log(isMonotonic([6, 5, 4, 4]));
console.log(isMonotonic([1, 3, 2]));