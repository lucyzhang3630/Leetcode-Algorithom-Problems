// Given a string, find the first non-repeating character in it and return it's index.
// If it doesn't exist, return -1.
//
// Examples:
// s = "leetcode"
// return 0.
//
// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

/**
 * @param {string} s
 * @return {number}
 * solution 1 map
 */
var firstUniqChar = function(s) {
    var map = new Map();
    var sArr = s.split("");
    var uniqueChars = [];
    var index = 9999999;
    //count the occurrence of each character
    for(var i = 0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        }else{
           map[s[i]]++
        }
    }
    //find the unique chars
    for(var key in map){
      if(map[key] === 1){
          uniqueChars.push(key);
      }
    }
    //find the min index of the unique char, if exists
    if(!uniqueChars.length){
        return -1
    }else{
        for(var j = 0;j<uniqueChars.length;j++){
            if(sArr.indexOf(uniqueChars[j])<index){
                index = sArr.indexOf(uniqueChars[j]);
            }
        }
        return index
    }
};

/**
 * @param {string} s
 * @return {number}
 * solution 2 map (improved space complexity compared with solution 1)
 */
var firstUniqChar = function(s) {
    var map = new Map();
    var sArr = s.split("");
    //count the occurrence of each character
    for(var i = 0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        }else{
           map[s[i]]++
        }
    }
    //find the index
    for(var j = 0;j<sArr.length;j++){
        if(map[sArr[j]] === 1){
            return j
        }
    }
    return -1

};
