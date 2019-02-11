// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.
//
// Example:
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
//
// Follow up:
// If you have figured out the O(n) solution, try coding another solution using the
// divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 * solution 1 greedy running 76ms
 */
var maxSubArray = function(nums) {
    var sum = 0;
    var min = 0;
    var diff = nums[0] ;//set it to nums[0];
    for(var i = 0; i<nums.length;i++) {
      //add the array from left to right,
      // the maximum diff between sums would be the result
        sum+=nums[i];
        if(sum-min>diff){
            diff = sum - min;
        }
        if(sum<min){
            min = sum;
        }

    }
    return diff
};
