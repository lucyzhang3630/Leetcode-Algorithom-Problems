// Given an integer n, return the number of trailing zeroes in n!.
//
// Example 1:
// Input: 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.
//
// Example 2:
// Input: 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.
//
// Note: Your solution should be in logarithmic time complexity.

/**
 * @param {number} n
 * @return {number}
 * solution 1 using array, not working properly, when n is large
 */
var trailingZeroes = function(n) {
    //this solution is brutal force and fails when n is large, like factorail of 300,
    //keep this solution a record
    var factor = 1;
    var factorArr = [];
    var result = 0;
    var i = 1;
    while(i<=n) {
        factor *= i;
        i++;
    }
    console.log(factor);
    factorArr = factor.toString().split("");
    console.log(factorArr);
    for(var i = factorArr.length - 1;i>=0;i--){
        if(factorArr[i] !== '0') {
            console.log(i);
            result = factorArr.length - 1 - i;
            return result;
        }
    }
};

/**
 * @param {number} n
 * @return {number}
 * solution 2 using Math
 * ref: https://brilliant.org/wiki/trailing-number-of-zeros/
 */
var trailingZeroes = function(n) {
    var result = 0;
    for(var i = 1;Math.pow(5,i)<=n;i++){
        result+=Math.floor(n/Math.pow(5,i));
    }
    return result
};
