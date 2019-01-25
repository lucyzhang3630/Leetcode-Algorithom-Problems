// Given an array nums of n integers where n > 1,  return an array output such that output[i]
// is equal to the product of all the elements of nums except nums[i].
//
// Example:
// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Note: Please solve it without division and in O(n).
//
// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra
// space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 * solution 1 division running 112ms
 */
var productExceptSelf = function(nums) {
    var product = 1;
    var results = [];
    var zeros = 0;
    for(var i = 0;i<nums.length;i++){
      //get the product of all non-zero element and the number of zeros
        if(nums[i] !== 0){
          product*= nums[i];
        }else{
            zeros++
        }

    }
    for(var j = 0;j<nums.length;j++){
      //if there is no zero in the array,
        if(nums[j]!==0 && zeros === 0){
           results.push(product/nums[j]);
           //if the element is not zero and there are zero(s) in the array,the product would be 0
        }else if(nums[j]!==0 && zeros >= 1){
            results.push(0);
            //if the element is zero and there are more than 1 zero in the array
        }else if(nums[j] === 0 && zeros>=2){
            results.push(0);
            // if the element is zero and there is only 1 zero in the array
        }else if(nums[j] === 0 && zeros === 1) {
            results.push(product);
        }

    }
    return results
};
