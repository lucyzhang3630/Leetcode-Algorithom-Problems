/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    var counter = 0;
    var degree = 0;
    var index = 0;
    var degreeElem;
    var map = new Map();
    // TODO: how to deal with multiple degree elements
    //find the degree and degree element
    for(var i = 0;i<nums.length;i++){
        if(!map[nums[i]]){
            map[nums[i]] = 1;
        }else{
           map[nums[i]]++
        }
        if(map[nums[i]]>degree){
            degree = map[nums[i]];
            degreeElem = nums[i];
        }
    }
    //find the index of last degree element in array
    for(var j = 0;j<nums.length;j++){
        if(nums[j] === degreeElem){
            counter++
        }
        if(counter === degree){
            index = j;
            break
        }
    }
    //console.log(index)
    return index-nums.indexOf(degreeElem)+1
};
