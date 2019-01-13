// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
// Strings consists of lowercase English letters only and the length of both strings s and p
// will not be larger than 20,100.
// The order of output does not matter.
//
// Example 1:
// Input:
// s: "cbaebabacd" p: "abc"
//
// Output:
// [0, 6]
//
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * solution 1 slice and sort, runs really slow...
 */
var findAnagrams = function(s, p) {
    var arrS = s.split("");
    var arrP = p.split("").sort();
    var result = [];
    var arrSlice = [];
    for(var i = 0; i<arrS.length-arrP.length+1;i++){
        arrSlice = arrS.slice(i,i+arrP.length).sort();
        if(arrSlice.join("") === arrP.join("")){
            result.push(i);
        }
    }
    return result
};
