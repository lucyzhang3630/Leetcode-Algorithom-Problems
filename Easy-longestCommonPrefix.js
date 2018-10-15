// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
//
// Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"
// 
// Example 2:
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var result = "";
    var counter;
    if(strs.length){
       for(var i = 0; i<strs[0].length;i++) {
        counter = 0
        for(var j=1;j<strs.length;j++) {
            if(strs[j].charAt(i)===strs[0].charAt(i)) {
                counter++
            }
        }
        if(counter===strs.length-1){
            result+=strs[0].charAt(i)
        }else{
            break
        }
    }
    }

    return result
};
