// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
//
// Example 1:
// Input: a = 1, b = 2
// Output: 3
//
// Example 2:
// Input: a = -2, b = 3
// Output: 1
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 * solution: bit manipulation running 52ms
 */
var getSum = function(a, b) {
/**
 * Explanation:
 * let's say a and b are both one-bit variable
 * There are only four bit sum condition: (1, 1), (1, 0), (0, 1), (0, 0)
 * Their bit sum is (10), (1), (1), (0) in that sequence
 * for the condition (1, 0), (0, 1), (0, 0), we can use a^b
 * and for the condition (1, 1), we will need to use a&b<<1 (a&b make sure it's both 1, and left shift for carry)
 * the final results are the combination of these two equations
 * Now we have: a + b = a&b<<1 + a^b
 * reference:http://www.cnblogs.com/grandyang/p/5451942.html
 */
    if(b===0) return a
    var intA = a^b;
    var carryB = (a&b)<<1;
    return getSum(intA,carryB)

};
