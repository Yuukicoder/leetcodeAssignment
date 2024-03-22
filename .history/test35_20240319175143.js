// 35. Search Insert Position
var searchInsert = (nums, target)=> {
    let l = 0, r = nums.length
    while(l<r){
        let m = l + Math.floor((r-l)/2);
        if(nums[m]>target){
            r = m;
        }
        else {
            l = m;
        }
    }
    return m;

}
console.log(
    searchInsert([1,2,5,10],7)

);