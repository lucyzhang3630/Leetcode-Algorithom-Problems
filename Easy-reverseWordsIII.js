// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
//
// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
//
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  //split the string into words and reverse each word,then join together to get the result
    var words = s.split(" ");
    var result;
    for(var i = 0; i<words.length;i++){
        words[i] = words[i].split("").reverse().join("");
    }
    result = words.join(" ");
    return result;
};
