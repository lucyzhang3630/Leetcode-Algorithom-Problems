/**
 * @param {string} s
 * @return {number}
 * solution map running 184ms
 */
var romanToInt = function(s) {
    var result = 0;
    var map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    //normally roman integer are writen from large to small,
    //if we put smaller ones in front of larger ones, we need to substract the
    //smaller one from the larger one eg: IV,
    for(var i = 0;i<s.length-1;i++){
        if(map[s[i]]>=map[s[i+1]]){
            result += map[s[i]]
        }else {
            result -= map[s[i]]
        }

    }
    result+=map[s[s.length-1]];
    return result

};
