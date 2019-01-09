/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 * solution 1 brute force with js array built-in find method, running time high
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    var numsSlice = [];
    for(var i = 0; i<nums.length-1;i++){
        if(i+k>=nums.length){
            numsSlice = nums.slice(i+1);
        }else{
           numsSlice = nums.slice(i+1,i+k+1);
        }
        if(numsSlice.find(num => Math.abs(num-nums[i])<=t)){
            return true
        }
    }
    return false
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 * solution 2 sliding window, runs 72ms
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    var numsMap = nums.map((num,index)=>({val:num,idx:index}))
                        .sort((a,b)=>a.val-b.val);
    var left = 0;
    var right = 1;
    while(right<numsMap.length){
        var diff = Math.abs(numsMap[right].val-numsMap[left].val);
        var range = Math.abs(numsMap[right].idx - numsMap[left].idx);
        if(diff<=t&&range<=k){
            return true
        }else if(range>k){
          //because map is sort by value, the index is not in original order,
          // increase the right count to check to the last element to find a index
          // meets the requirement
            right++;
        }else if(diff>t){
            left++
        }
        if(left === right){
            right++
        }
    }
    return false
};
