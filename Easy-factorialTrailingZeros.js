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
//test git hubs contribution part, it is not counting my commit as contribution

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    //Todo: how to handle large numbers like the factorial of 300
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
