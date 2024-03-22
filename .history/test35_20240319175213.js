// 35. Search Insert Position
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length
    while (left < right){
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] < target){
            left = mid + 1
        }
        else {
            right = mid
        }
    }
    return left
};
console.log(
    searchInsert([1,2,5,10],7)

);