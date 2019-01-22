// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//
// Note: Given n will be a positive integer.
//
// Example 1:
// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
//
// Example 2:
// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
//
// Hint:
// To reach nth step, what could have been your previous steps? (Think about the step sizes)

/**
 * @param {number} n
 * @return {number}
 * solution 1 recursion but runs exceed time limit if n is large like 200
 */
var climbStairs = function(n) {
    var result = 0;
    if(n === 1){
       result = 1;
    }else if(n === 2){
        result = 2;
    }else{
        result+=climbStairs(n-1)+climbStairs(n-2)
    }
    return result
};
/**
 * @param {number} n
 * @return {number}
 * solution 2 using array, it is similar to calculate fibonacci number
 */
var climbStairs = function(n) {
    if (n <= 3) return n;
    let arr = [1,2,3];
    for (let i = 3; i < n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr.pop();
};
