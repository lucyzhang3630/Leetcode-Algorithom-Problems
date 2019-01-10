// Given an integer, write a function to determine if it is a power of two.
//
// Example 1:
// Input: 1
// Output: true
// Explanation: 2^0 = 1
//
// Example 2:
// Input: 16
// Output: true
// Explanation: 2^4 = 16
//
// Example 3:
// Input: 218
// Output: false
/**
 * @param {number} n
 * @return {boolean}
 * solution 1 bitwise
 */
var isPowerOfTwo = function(n) {
  //if a number is power of two, then after we turn it to binary, it will only have one "1" in it
  //eg: 2--0010,4--0100 etc
    var binaryN = n.toString(2).split("");
    var binaryIntArr = binaryN.map(str=>parseInt(str));
    var sum = binaryIntArr.reduce((total,num)=>(total+num));
    if(sum === 1){
        return true
    }else{
        return false
    }
};
/**
 * @param {number} n
 * @return {boolean}
 * solution Math-wise running time is basically the same with solution 1
 */
var isPowerOfTwo = function(n) {
    var total = 1;
    while(total<n){
        total *=2;
    }
    return total===n
};
