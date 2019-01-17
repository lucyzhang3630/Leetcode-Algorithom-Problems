// Given a string, sort it in decreasing order based on the frequency of characters.
//
// Example 1:
//
// Input:
// "tree"
// Output:
// "eert"
// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
//
// Example 2:
// Input:
// "cccaaa"
// Output:
// "cccaaa"
// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
//
// Example 3:
// Input:
// "Aabb"
// Output:
// "bbAa"
// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
//
// Note that 'A' and 'a' are treated as two different characters.
/**
 * @param {string} s
 * @return {string}
 * solution 1 map and array running 160ms
 */
var frequencySort = function(s) {
    var resultArr = [];
    var mapArr = [];
    var map = new Map();
    //create the map with char and frequency
    for(var i = 0;i<s.length;i++){
       if(!map[s[i]]) {
           map[s[i]] = 1;
       }else{
           map[s[i]]++;
       }
    }
    //turn map into array
    for(k in map){
        mapArr.push({key:k,value:map[k]});
    }
    //sort the array
    mapArr.sort((a,b)=>b.value-a.value);
    //get the result
    for(var i = 0;i<mapArr.length;i++){
        resultArr.push(mapArr[i].key.repeat(mapArr[i].value));
    }
    return resultArr.join("")
};
/**
 * @param {string} s
 * @return {string}
 * solution 2 slitely improved version of solution 1 running 92ms
 */
var frequencySort = function(s) {
    var result = "";
    var mapArr = [];
    var map = new Map();
    for(var i = 0;i<s.length;i++){
       if(!map[s[i]]) {
           map[s[i]] = 1;
       }else{
           map[s[i]]++;
       }
    }
    for(k in map){
        mapArr.push({key:k,value:map[k]});
    }
    mapArr.sort((a,b)=>b.value-a.value);

    for(var i = 0;i<mapArr.length;i++){
        result+=mapArr[i].key.repeat(mapArr[i].value);
    }
    return result
};
/**
 * @param {string} s
 * @return {string}
 * solution 3 using only map runging 88ms
 */
var frequencySort = function(s) {
    var result = "";
    var mapArr = [];
    var map = new Map();
    for(var i = 0;i<s.length;i++){
       if(!map.has(s[i])) {
           map.set(s[i],1);
       }else{
           map.set(s[i], map.get(s[i])+1);
       }
    }
    var sortedMap = new Map([...map.entries()].sort((a,b) => b[1]- a[1]));
    sortedMap.forEach((value,key,map)=>
                      result+=key.repeat(value))
    return result
};
