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
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * solution 2 sliding window
 * // TODO: detailed explanation needed
 // TODO: integration of functionality
 */
var findAnagrams = function(str, pattern) {
  // Convert pattern string to hash-map.
  var patternMap = wordToMap(pattern);

  // Array that will hold our anagram start indices.
  var patternIndices = [];

  // Clone the pattern string map for further modifications.
  var currentPatternMap = {...patternMap};

  // We'll be using sliding frame to find anagrams.
  var frameStart = 0;
  var frameLength = 0;
  var wordIndex = 0;

  // Go through all letters in a string.
  while (wordIndex < str.length) {
    // Get current letter.
    var letter = str[wordIndex];

    // Depending on the current letter we may have several cases.
    if (!currentPatternMap.hasOwnProperty(letter)) {
      // No such letter in the pattern.

      // Reset letters counter.
      currentPatternMap = {...patternMap};
      // Reset and shift the frame to the next letter.
      frameStart = wordIndex + 1;
      frameLength = 0;
    } else if (currentPatternMap[letter] === 0) {
      // There is no unused letter instances left.

      // Add the first letter of the found anagram back to the map.
      var letterToRelease = str[frameStart];
      currentPatternMap[letterToRelease] += 1;

      // Shift frame right and reduce it.
      frameLength -= 1;
      frameStart += 1;
    } else {
      // The letter is in the pattern and we may use it.

      // Reduce the number of used letter instances and expand the frame.
      currentPatternMap[letter] -= 1;
      frameLength += 1;

      // If we've found an anagram...
      if (frameLength === pattern.length) {
        // Remember the start of the anagram.
        patternIndices.push(frameStart);

        // Add the first letter of the found anagram back to the map.
        var letterToRelease = str[frameStart];
        currentPatternMap[letterToRelease] += 1;

        // Shift frame right and reduce it.
        frameLength -= 1;
        frameStart += 1;
      }
    }

    // Go to the next letter.
    wordIndex = frameStart + frameLength;
  }

  // Return anagram indices that we've found.
  return patternIndices;
};

// Function that converts string to string map (counts the number of letters).
function wordToMap(str) {
  return Array.from(str).reduce((stringMap, letter) => {
    if (!stringMap.hasOwnProperty(letter)) {
      stringMap[letter] = 1;
    } else {
      stringMap[letter]++;
    }

    return stringMap;
  }, {});
}
