// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
// Note: The algorithm should run in linear time and in O(1) space.
//
// Example 1:
// Input: [3,2,3]
// Output: [3]
//
// Example 2:
// Input: [1,1,1,3,3,2,2,2]
// Output: [1,2]
//
// Hint:How many majority elements could it possibly have?
/**
 * @param {number[]} nums
 * @return {number[]}
 * reference: https://segmentfault.com/a/1190000004905350
 * solution using Boyer-Moore Vote Algorithm
 */
var majorityElement = function(nums) {
    var num1 = 0; var num2 = 1;
    var counter1 = 0; var counter2 = 0;
    var tester1 = 0; var tester2 = 0;
    var results = [];

    nums.forEach(function(num){
        if(num1 === num){
            counter1++;
        }else if(num2 === num){
            counter2++;
        }else if(counter1 === 0) {
            num1 = num;
            counter1++;
        }else if(counter2 === 0) {
            num2 = num;
            counter2++;
        }else {
            counter1--;
            counter2--;
        }
    });
    //check if num1 and num2 meets the required frequency
    for(var i = 0; i<nums.length;i++){
        if(nums[i]===num1){
            tester1++;
            if(tester1>nums.length/3&&!results.includes(nums[i])){
                results.push(nums[i]);
            }
        }else if(nums[i]===num2){
            tester2++;
            if(tester2>nums.length/3&&!results.includes(nums[i])){
                results.push(nums[i]);
            }
        }

    }
    return results
};
