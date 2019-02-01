// Write an algorithm to determine if a number is "happy".
//
// A happy number is a number defined by the following process: Starting with any
// positive integer, replace the number by the sum of the squares of its digits,
// and repeat the process until the number equals 1 (where it will stay), or it loops
// endlessly in a cycle which does not include 1. Those numbers for which this process
// ends in 1 are happy numbers.
//
// Example:
// Input: 19
// Output: true
//
// (2 in the left of the equation means square)
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 * solution 1 dynamic programming, running 84ms
 */
var isHappy = function(n) {
    var digitArr = n.toString().split("");
    var nums = [n];
    var sum;
    if(n === 1) {
        return true
    }
    while(sum!==1){
        sum = 0;
        for(var i = 0;i<digitArr.length;i++){
            sum += Math.pow(parseInt(digitArr[i]),2);
        }
        //if cycle exists, return false
        if(nums.includes(sum)){
            return false
        }
        nums.push(sum);
        digitArr = sum.toString().split("")
    }
    return true

};
