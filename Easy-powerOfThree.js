// Given an integer, write a function to determine if it is a power of three.
//
// Example 1:
// Input: 27
// Output: true
//
// Example 2:
// Input: 0
// Output: false
/**
 * @param {number} n
 * @return {boolean}
 * solution1 loop iteration
 */
var isPowerOfThree = function(n) {
    while(n>1){
        n/=3
    }
    return n===1
};
/**
 * @param {number} n
 * @return {boolean}
 * solution 2 base conversion similar to PowerOfTwo problem
 */
var isPowerOfThree = function(n) {
    var triN = n.toString(3).split("");
    var triIntArr = triN.map(str=>parseInt(str));
    var sum = triIntArr.reduce((total,num)=>(total+num));
    if(sum === 1){
        return true
    }else{
        return false
    }
};
