/**
 * @param {character[]} chars
 * @return {number}
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
        //console.log(i);
        // console.log(index);
        // console.log(chars);
    }

    return chars.length

};
