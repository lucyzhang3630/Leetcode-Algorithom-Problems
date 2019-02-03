// The count-and-say sequence is the sequence of integers with the first five terms as following:
//
// The following are the terms from n=1 to n=10 of the count-and-say sequence:
//  1.     1
//  2.     11
//  3.     21
//  4.     1211
//  5.     111221
//  6.     312211
//  7.     13112221
//  8.     1113213211
//  9.     31131211131221
// 10.     13211311123113112211
// 1 is read off as "one 1" or 11.(sequence 2 is the count and say of sequence 1)
// 11 is read off as "two 1s" or 21.(sequence 3 is the count and say of sequence 2)
// 21 is read off as "one 2, then one 1" or 1211.
//
// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.
//
// Note: Each term of the sequence of integers will be represented as a string.
// Hint:To generate the nth term, just count and say the n-1th term.
//
// Example 1:
// Input: 1
// Output: "1"
//
// Example 2:
// Input: 4
// Output: "1211"

/**
 * @param {number} n
 * @return {string}
 * solution 1 dynamic programming running 84ms
 */
var countAndSay = function(n) {
    var results = ["1"];
    for(var i = 1;i<n;i++){
        var counter = 0;
        var temp = "";
        for(var j = 0;j<results[i-1].length;j++){
            if(j === results[i-1].length-1){
                if(results[i-1][j]===results[i-1][j-1]){
                    counter++;
                    temp+=counter.toString()+results[i-1][j];
                }else{
                    temp+="1"+results[i-1][j]
                }
            results.push(temp);
            }else if(results[i-1][j] === results[i-1][j+1]){
                counter++
            }else{
                counter++;
                temp+=counter.toString()+results[i-1][j];
                counter = 0;
            }
        }
    }
    return results[n-1]
};
