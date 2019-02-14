// Given a non-empty array of non-negative integers nums, the degree of this array 
// is defined as the maximum frequency of any one of its elements.
//
// Your task is to find the smallest possible length of a (contiguous) subarray of
// nums, that has the same degree as nums.
//
// Example 1:
// Input: [1, 2, 2, 3, 1]
// Output: 2
// Explanation:
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
//
// Example 2:
// Input: [1,2,2,3,1,4,2]
// Output: 6
// Note:
// nums.length will be between 1 and 50,000.
// nums[i] will be an integer between 0 and 49,999.
//
// Hint:Say 5 is the only element that occurs the most number of times -
// for example, nums = [1, 5, 2, 3, 5, 4, 5, 6]. What is the answer?

/**
 * @param {number[]} nums
 * @return {number}
 * solution 1 running 140ms
 */
var findShortestSubArray = function(nums) {
    var counter = 0;
    var degree = 0;
    var index = 0;
    var degreeElem = [];
    var map = new Map();
    var result;
    //find the degree
    for(var i = 0;i<nums.length;i++){
        if(!map[nums[i]]){
            map[nums[i]] = 1;
        }else{
           map[nums[i]]++
        }
        if(map[nums[i]]>degree){
            degree = map[nums[i]];
        }
    }
    //find the degree element(s)
    for(var key in map){
      if(map[key] === degree){
          degreeElem.push(parseInt(key));
      }
    }
    //find the min length
    for(var j = 0;j<degreeElem.length;j++){
       if(!result){
           result = nums.lastIndexOf(degreeElem[j])-nums.indexOf(degreeElem[j])+1;
       }else if(nums.lastIndexOf(degreeElem[j])-nums.indexOf(degreeElem[j])+1<result){
           result = nums.lastIndexOf(degreeElem[j])-nums.indexOf(degreeElem[j])+1
       }
    }

    return result
};
