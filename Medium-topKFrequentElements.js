// Given a non-empty array of integers, return the k most frequent elements.
//
// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
//
// Example 2:
// Input: nums = [1], k = 1
// Output: [1]
//
// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * solution 1 using map running 92 ms
 */
var topKFrequent = function(nums, k) {
    var result = [];
    var mapArr = [];
    var map = new Map();
    for(var i = 0;i<nums.length;i++){
       if(!map.has(nums[i])) {
           map.set(nums[i],1);
       }else{
           map.set(nums[i], map.get(nums[i])+1);
       }
    }
    //sort the map by value in decending order
    var sortedMap = new Map([...map.entries()].sort((a,b) => b[1]- a[1]));

    //iterate the map
    sortedMap.forEach((value,key,map)=>result.push(key))
    return result.slice(0,k)
};
