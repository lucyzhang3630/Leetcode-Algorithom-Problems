// Given two strings s and t , write a function to determine if t is an anagram of s.
//
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
//
// Example 2:
// Input: s = "rat", t = "car"
// Output: false
//
// Note:
// You may assume the string contains only lowercase alphabets.
//
// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * solution 1 Sorting(convert the problem to comparing 2 array) 124ms
 */
var isAnagram = function(s, t) {
    var arrS = s.split("").sort();
    var arrT = t.split("").sort();
    if(arrS.length!==arrT.length){
        return false
    }
    for(var i = 0;i<arrS.length;i++){
        if(arrS[i]!==arrT[i]){
            return false
        }
    }
    return true
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * solution 2 sorting (similar to solution 1 but runs a little bit slower) 132ms
 */
var isAnagram = function(s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("");
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * solution 3 hash map 84ms
 */
var isAnagram = function(s, t) {
    var map = {};
    if(s.length!==t.length){
        return false;
    }
    for(var i = 0;i<s.length;i++){
        map[s[i]] = map[s[i]] + 1 || 1;
    }
    for(var k = 0;k<t.length;k++) {
        map[t[k]] = (map[t[k]]||0) - 1;
    }
    //if s and t are anagram, the value for each key shoule be 0
    for(var j in map){
        if(map[j]!==0){
            return false
        }
    }
    return true

};
