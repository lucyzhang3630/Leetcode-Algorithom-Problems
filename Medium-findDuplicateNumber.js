// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.
//
// Example 1:
// Input: [1,3,4,2,2]
// Output: 2
//
// Example 2:
// Input: [3,1,3,4,2]
// Output: 3
//
// Note:
// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.
/**
 * @param {number[]} nums
 * @return {number}
 * solution 1 (2 pointer)
 */
var findDuplicate = function(nums) {
    var result;
    for(var i = 0;i<nums.length;i++){
        for(var j = i+1; j<nums.length;j++){
            if(nums[j] === nums[i]) {
                result = nums[i]
            }
        }
    }
    return result
};

/**
 * @param {number[]} nums
 * @return {number}
 * solution 2 (sort)
 */
var findDuplicate = function(nums) {
    var result;
    nums.sort();
    for(var i = 1;i<nums.length;i++){
        if(nums[i]===nums[i-1]){
            result = nums[i];
        }
    }
    return result
};
