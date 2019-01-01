// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
//
// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
//
// Example 1:
// Input: [2,2,1]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result = 0.5;
    nums.sort();
    for(var i = 1; i<nums.length-1;i++) {
       if(nums[i]!==nums[i-1]&&nums[i]!==nums[i+1]){
           result = nums[i];
       }
    }
    //if not found in the middle of the array,test for the first and last element of the array
    if(result===0.5){
        if(nums[0]===nums[1]) {
            result = nums[nums.length-1];
        }else{
            result = nums[0];
        }

    }
    return result
};
