// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
//
// Note that the row index starts from 0.
//
// Example:
// Input: 3
// Output: [1,3,3,1]
//
// Follow up:
// Could you optimize your algorithm to use only O(k) extra space?

/**
 * @param {number} rowIndex
 * @return {number[]}
 * solution 1 dynamic programming running 72 ms
 */
var getRow = function(rowIndex) {
    var result = [[1]];
    if(rowIndex === 0){
        return [1]
    }else{
        for(var i = 1; i<rowIndex+1;i++){
            var temp = [];
            temp[0] = 1;
            temp.length = i+1;
            for(var j = 1;j<i;j++){
                if(result[i-1][j-1]){
                    temp[j] = result[i-1][j-1] + result[i-1][j]
                }else{
                    temp[j] = 1
                }
            }
            temp[i] = 1;
            result.push(temp)
        }
    }
    return result[rowIndex]
};
