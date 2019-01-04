// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.
//
// Example 1:
// Input: [3,2,3]
// Output: 3
//
// Example 2:
// Input: [2,2,1,1,1,2,2]
// Output: 2
/**
 * @param {number[]} nums
 * @return {number}
 * solution 1 brute force
 */
var majorityElement = function(nums) {
    var result;
    var counter;
    for(var i = 0;i<nums.length;i++) {
        counter = 0
        for(var j = 0;j<nums.length;j++) {
            if(nums[j]===nums[i]){
                counter++
            }
        }
        if(counter>=nums.length/2){
            result = nums[i]
        }
    }
    return result
};
/**
 * @param {number[]} nums
 * @return {number}
 * solution 2 sorting
 */
var majorityElement = function(nums) {
    var index = Math.floor(nums.length/2);
    nums.sort();
    return nums[index]
};

/**
 * @param {number[]} nums
 * @return {number}
 * solution 3 Boyer-Moore Vote solution
 * reference https://segmentfault.com/a/1190000004905350
 * relates to medium level majorityElement problem
 */
var majorityElement = function(nums) {
    var candidate = 0;
    var counter = 0;
    for(var i = 0;i<nums.length;i++){
        if(counter === 0) {
            candidate = nums[i];
            counter++;
        }else if(nums[i]===candidate) {
            counter++;
        }else if(nums[i]!==candidate) {
            counter--;
        }
    }
    return candidate;
};
