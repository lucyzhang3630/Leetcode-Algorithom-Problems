/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    var counter;
    for(var i = 0;i<chars.length;){
        counter = 1;
        for(var j=i+1;j<chars.length;j++){
            if(chars[j]===chars[i]){
                counter++
            }
        }
    }

    return chars.length

};
