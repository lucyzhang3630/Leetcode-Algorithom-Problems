// Count the number of prime numbers less than a non-negative number, n.
//
// Example:
// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

/**
 * @param {number} n
 * @return {number}
 * solution 1 brutal force running exceed time limit
 */
var countPrimes = function(n) {
    var counter = 0;
    for(var i = 0;i<n;i++){
        if(isPrime(i)){
            counter++
        }
    }
    return counter
};
var isPrime = function(n) {
    var counter = 1;
    if(n === 0 || n === 1){
        return false
    }else{
        for(var i = 2;i<=n;i++) {
            if(n%i===0){
                counter++
            }
        }
        if(counter>2){
            return false
        }else{
            return true
        }
    }

}

/**
 * @param {number} n
 * @return {number}
 * solution 2  Sieve of Eratosthenes masking running 224ms
 * detailed Explanation: https://leetcode.com/problems/count-primes/
 */
var countPrimes = function(n) {
    var counter = 0;
    var isPrime = [];
    isPrime[0] = false;
    isPrime[1] = false;
    for(var i = 2;i<n;i++){
        isPrime[i] = true;
    }
    for(var i = 2;i*i<n;i++){
        for(var j = i*i;j<=n;j+=i){
            isPrime[j] = false
        }
    }
    for(var k = 0;k<isPrime.length;k++){
        if(isPrime[k]){
            counter++
        }
    }
    return counter
};
