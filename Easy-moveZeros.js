// Given an array nums, write a function to move all 0's to the end of it while maintaining
// the relative order of the non-zero elements.
//
// Example:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// 
// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//bubble sort, two pointer
//reference:https://segmentfault.com/q/1010000009397912
var moveZeroes = function(nums) {
    for(var i = 0;i<nums.length;i++) {
        for(var j=i;j<nums.length;j++) {
            if(nums[i]===0) {
                var temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
};
