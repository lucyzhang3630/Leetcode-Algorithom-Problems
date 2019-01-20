// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
//
// Note:
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
//
// Example:
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
// Output:
//         [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * solution 1 array method running 80ms
 */
var merge = function(nums1, m, nums2, n) {
  //remove trailing 0 if any
    nums1.length = m;
    for(var i = 0;i<nums2.length;i++){
        nums1.push(nums2[i]);
    }
    nums1.sort((a,b)=>(a-b));
};
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * solution 2 two-pointer running 72ms
 */
var merge = function (nums1, m, nums2, n) {
    var len = m + n;
    //remove extra space
    nums1.length = len;
    //get the last index of each array
    m--;
    n--;
    //len from m+n to 1
    while(len--){
        //if num in nums1 is bigger or nothing left in nums2
        if(nums1[m]>nums2[n]||n<0){
            nums1[len] = nums1[m];
            //move the pointer to previous element of nums1 and in next loop compare it with this nums2[n]
            m--;
        }else{
            //move the pointer to previous element of nums2 and in next loop compare it with this nums1[m]
            nums1[len] = nums2[n];
            n--
        }

    }

};
