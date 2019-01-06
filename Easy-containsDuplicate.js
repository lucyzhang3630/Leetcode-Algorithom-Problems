// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
//
// Example 1:
// Input: [1,2,3,1]
// Output: true
//
// Example 2:
// Input: [1,2,3,4]
// Output: false
/**
 * @param {number[]} nums
 * @return {boolean}
 * solution 1
 */
var containsDuplicate = function(nums) {
    var noDupArr = [];
    for(var i = 0;i<nums.length;i++) {
        if(!noDupArr.includes(nums[i])) {
            noDupArr.push(nums[i]);
        }
    }
    if(noDupArr.length === nums.length) {
        return false
    }else{
        return true
    }
};

/**
 * @param {number[]} nums
 * @return {boolean}
 * solution 2 sorting
 */
var containsDuplicate = function(nums) {
    nums.sort();
    for(var i = 1; i<nums.length;i++) {
        if(nums[i] === nums[i-1]) {
            return true
        }
    }
    return false
};

/**
 * @param {number[]} nums
 * @return {boolean}
 * solution 3 using Set
 */
var containsDuplicate = function(nums) {
    var set = new Set(nums);
    if(set.size === nums.length) {
        return false
    }else{
        return true
    }
};
