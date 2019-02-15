/**
 * @param {number[]} prices
 * @return {number}
 * solution 1 running 80ms
 */
var maxProfit = function(prices) {
    var max = 0;
    for(var i = 1;i<prices.length;i++){
        if(prices[i]>prices[i-1]){
            max+= prices[i]-prices[i-1]
        }
    }
    return max
};
