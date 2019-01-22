// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci
// sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.
// That is,
//
// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.
// Given N, calculate F(N).
//
// Example 1:
// Input: 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
//
// Example 2:
// Input: 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
//
// Example 3:
// Input: 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
//
// Note: 0 ≤ N ≤ 30.

/**
 * @param {number} N
 * @return {number}
 * solution 1 recursion running 96ms
 */
var fib = function(N) {
    var result;
    if(N===0){
        result = 0;
    }else if(N===1){
        result = 1;
    }else{
        result = fib(N-1)+fib(N-2)
    }
    return result
};
/**
 * @param {number} N
 * @return {number}
 * solution 2 dynamic programming running 68ms
 */
var fib = function(N) {
    var result = new Array(N+1);
    result[0] = 0;
    result[1] = 1;
    for(var i = 2;i<N+1;i++){
        result[i] = result[i-1]+result[i-2]
    }
    return result[N]
};
