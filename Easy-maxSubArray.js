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
