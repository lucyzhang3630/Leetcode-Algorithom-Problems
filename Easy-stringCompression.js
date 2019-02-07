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

    }

    return chars.length

};
//solution : 2 pointer
var compress = function(chars) {
    let i = 0, j = 0;
    while (i < chars.length) {
        if (chars[j] === chars[i]) {
            j++;
        } else if (j > i + 1) {
          // if more than one char in the array
            const nums = (j - i).toString().split('');
            chars.splice(i + 1, j - i - 1, ...nums);
            j = i = i + 1 + nums.length;

        } else if (j = i + 1) {
            //if, only one char in the array
            i = j;
            j++;
        }
    }
    return chars.length;
};
