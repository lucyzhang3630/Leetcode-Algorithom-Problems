// Given two arrays, write a function to compute their intersection.
//
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
//
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
//
// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
//
// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that
// you cannot load all elements into the memory at once?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * solution 1 using 2 Maps, running 84ms
 */
var intersect = function(nums1, nums2) {
    var map1 = new Map();
    var map2 = new Map();
    var smallerMap;
    var biggerMap;
    var result = [];
    for(var i = 0;i<nums1.length;i++){
        if(!map1.has(nums1[i])) {
               map1.set(nums1[i],1);
        }else{
               map1.set(nums1[i], map1.get(nums1[i])+1);
        }
    }
    for(var j = 0;j<nums2.length;j++){
        if(!map2.has(nums2[j])) {
               map2.set(nums2[j],1);
        }else{
               map2.set(nums2[j], map2.get(nums2[j])+1);
        }
    }
    if(map1.size<=map2.size){
        smallerMap = map1;
        biggerMap = map2
    }else{
        smallerMap = map2;
        biggerMap = map1;
    }
    smallerMap.forEach((value,key,map)=>{
        if(biggerMap.has(key)){
            for(var k = 0;k<Math.min(value,biggerMap.get(key));k++){
                result.push(key)
            }

        }
    })
    return result
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * solution 2 using 1 map and then filter, running 76ms
 */
var intersect = function(nums1, nums2) {
    var map1 = new Map();
    var result = [];
    for(var i = 0;i<nums1.length;i++){
        if(!map1.has(nums1[i])) {
               map1.set(nums1[i],1);
        }else{
               map1.set(nums1[i], map1.get(nums1[i])+1);
        }
    }
    //filter out numbers that not in nums1
    result = nums2.filter(n=>{
        if(map1.get(n)){
            map1.set(n,map1.get(n)-1);
            return true
        }else{
            return false
        }
    });
    return result
};
