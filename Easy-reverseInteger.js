/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * Example 1:
 * Input: 123
 * Output: 321
 *
 * Example 2:
 * Input: -123
 * Output: -321
 *
 * Example 3:
 * Input: 120
 * Output: 21
 * Note:
 * Assume we are dealing with an environment which could only store integers within
 * the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem,
 * assume that your function returns 0 when the reversed integer overflows.
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result;
    var numArray;
    if(x<0) {
        x = -x;
        numArray = x.toString().split("").filter(num=>num!==0);
        result = -Number( numArray.reverse().join(""));
    }else if(x>0) {
        numArray = x.toString().split("").filter(num=>num!==0)
        result = Number( numArray.reverse().join(""));
    }else if(x===0){
        result = 0
    }
    //check if the result overflows
    if((result>Math.pow(2,31)-1)||(result<-Math.pow(2,31))) {
        result = 0
    }
    return result
};
