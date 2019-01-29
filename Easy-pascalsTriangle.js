// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
//
// Example:
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 * solution 1 brutal force, running 68ms
 */
var generate = function(numRows) {
    var result = [[1]];

    if(numRows === 0){
        return []
    }else{
        for(var i = 1;i<numRows;i++){
            var temp = [];
            temp.length = i+1;
            temp[0] = 1;

            for(var j = 1;j<i;j++){
                temp[j] = result[i-1][j-1]+result[i-1][j]
            }
            temp[i] = 1;
            result.push(temp)
        }
    }
    return result

};
