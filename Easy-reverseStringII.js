// Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
//
// Example:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
//
// Restrictions:
// The string consists of lower English letters only.
// Length of the given string and k will in the range [1, 10000]
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverse = (arr, fr, to) => {
    for (let i = fr, j = to; i < j; i++, j--) {
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
}

var reverseStr = (s, k) => {
    let chars = s.split('');
    for (let i = 0; i < s.length; i += k * 2) {
        let j = Math.min(s.length - 1, i + k - 1);
        reverse(chars, i, j);
    }
    return chars.join('');
};
