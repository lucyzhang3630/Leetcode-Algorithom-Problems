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
