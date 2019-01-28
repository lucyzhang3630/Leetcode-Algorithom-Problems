// Given a non-empty string s, you may delete at most one character. Judge whether 
// you can make it a palindrome.
//
// Example 1:
// Input: "aba"
// Output: True
//
// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.
// Note:
// The string will only contain lowercase characters a-z. The maximum length of the
// string is 50000.

/**
 * @param {string} s
 * @return {boolean}
 * solution 1 greedy running 116ms
 */
var validPalindrome = function(s) {
    var left = 0;
    var right = s.length - 1;
    while(left<right){
      //if s[left] === s[right],compare the next inner loop
        if(s[left] === s[right]){
            left++;
            right--
        }else{
          //not equal, then whether s is a valid panlindrome depends on
          //if the substring after removing one char (left or right) is a valid panlindrome
            return isPanlindrome(s,left + 1,right) || isPanlindrome(s,left,right - 1)
        }
    }
    return true
};
var isPanlindrome = function(s,left,right){
    while(left<right){
       if(s[left] === s[right] ){
           left++;
           right--;
       }else{
           return false
       }
    }
    return true

}
