// Given two arrays, write a function to compute their intersection.
//
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
//
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
//
// Note:
// Each element in the result must be unique.
// The result can be in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * solution 1 using map, running 84ms
 */
var intersection = function(nums1, nums2) {
    var map1 = new Map();
    var result = [];
    for(var i = 0;i<nums1.length;i++){
        if(!map1.has(nums1[i])) {
               map1.set(nums1[i],1);
        }else{
               map1.set(nums1[i], map1.get(nums1[i])+1);
        }
    }
    for(var j = 0;j<nums2.length;j++){
        if(map1.get(nums2[j])&&!result.includes(nums2[j])){
            result.push(nums2[j]);
        }
    }
    return result
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * solution 2 using Set, running 72ms
 */
var intersection = function(nums1, nums2) {
    var set1 = new Set(nums1);
    var result = [];

    set1.forEach((val1,val2,set)=>{
        if(nums2.includes(val1)){
            result.push(val1)
        }
    })

    return result
};
