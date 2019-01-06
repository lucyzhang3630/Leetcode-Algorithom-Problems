// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
//
// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true
//
// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true
//
// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
// Reference for time complexity comparision: 
// https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * solution 1 using Set
 * if n and k are extremely large, there will be time limit exceeded error
 */
var containsNearbyDuplicate = function(nums, k) {
    var numsCopy = [];
    var set;
    if(nums.length>k){
        for(var i=0;i<nums.length-k;i++){
            numsCopy = nums.slice(i,i+k+1);
            set = new Set(numsCopy)
            if(set.size!==numsCopy.length){
                return true
            }
        }
        return false;
    }else{
        set = new Set(nums);
        if(set.size === nums.length){
            return false
        }else{
            return true
        }
    }

};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * solution 2 using Map,faster than 100% js submition,runing 64ms
 */
var containsNearbyDuplicate = function(nums, k) {
    var map = new Map();
    for(var i = 0;i<nums.length;i++){
        if(map.has(nums[i])&&i-map.get(nums[i])<=k){
            return true
        }
        //map would set new index i (the value of the map) to duplicate nums[i](the key of the map),
        //that is different from array.push, in this way, the key(nums[i]) would always associate the latest index
        map.set(nums[i],i);
    }
    return false

};
