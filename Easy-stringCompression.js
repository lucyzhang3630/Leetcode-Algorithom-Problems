// Given an array of characters, compress it in-place.
// The length after compression must always be smaller than or equal to the original array.
// Every element of the array should be a character (not int) of length 1.
// After you are done modifying the input array in-place, return the new length of the array.
//
// Follow up:
// Could you solve it using only O(1) extra space?
//
// Example 1:
// Input:
// ["a","a","b","b","c","c","c"]
// Output:
// Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation:
// "aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".
//
//
// Example 2:
// Input:
// ["a"]
// Output:
// Return 1, and the first 1 characters of the input array should be: ["a"]
// Explanation:
// Nothing is replaced.
//
//
// Example 3:
// Input:
// ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output:
// Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation:
// Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
// Notice each digit has it's own entry in the array.
//
// Note:
// All characters have an ASCII value in [35, 126].
// 1 <= len(chars) <= 1000.
//
// Hint:
// How do you know if you are at the end of a consecutive group of characters?

/**
 * @param {character[]} chars
 * @return {number}
 * solution 1 brutal force, time limit exceeded
 */
var compress = function(chars) {
    var counter;
    var index = 0;
    var i = 0;
    var length = chars.length;
    var char = "";
    while(i<length){
        console.log(i);
        counter = 0;
        char = chars[i];
        while(i<length&&chars[i] === char){
            counter++;
            i++;
        }
        if(counter>1){
            chars.splice(index+1,counter-1,...counter.toString().split(""));
            index += counter.toString().split("").length + 1;
        }else{
            index +=1
        }

    }

    return chars.length

};
/**
 * @param {character[]} chars
 * @return {number}
 * solution 2: two pointers running 84ms
 */
var compress = function(chars) {
    var i = 0;
    var j = 0;//use the difference between i and j as the counter
    while(i<chars.length){
        if(chars[j]===chars[i]){
            j++
        }else if(j>i+1){
            //if there is more than one char[i]
            chars.splice(i+1,j-i-1,...(j-i).toString().split(""));
            i = j = i + 1 + (j-i).toString().split("").length;
        }else if(j = i+1){
            i = j;
            j++;
        }
    }

    return chars.length

};
