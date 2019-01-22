// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (i.e., buy one and sell
// one share of the stock), design an algorithm to find the maximum profit.
//
// Note that you cannot sell a stock before you buy one.
//
// Example 1:
// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:
// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 * solution 1 brutal force running 376ms
 */
var maxProfit = function(prices) {
  //if there is no prices or only 1 price, return 0, no transaction.
    if(!prices.length||prices.length===1){
        return 0;
    }
    var results = [];
    for(var i = 0;i<prices.length-1;i++){
        var tempResult = 0;
        for(var j = i+1;j<prices.length;j++){
            if(prices[j]-prices[i]>=tempResult){
             tempResult = prices[j]-prices[i];
            }
        }
        results.push(tempResult);
    }
    return Math.max.apply(null, results)
};

/**
 * @param {number[]} prices
 * @return {number}
 * solution 2 brutal force, space complexity improved ver of solution 1
 */
var maxProfit = function(prices) {
    if(!prices.length||prices.length===1){
        return 0;
    }
    var maxProfit = 0;
    for(var i = 0;i<prices.length-1;i++){
        for(var j = i+1;j<prices.length;j++){
            if(prices[j]-prices[i]>=maxProfit){
                maxProfit = prices[j]-prices[i];
            }
        }

    }
    return maxProfit
};

/**
 * @param {number[]} prices
 * @return {number}
 * solution 3 greedy algorithm,running 76ms
 */
var maxProfit = function(prices) {
    var minPrices = Number.MAX_SAFE_INTEGER;
    var profit = 0;
    for(var i = 0;i<prices.length;i++){
        minPrices = Math.min(minPrices,prices[i]);
        profit = Math.max(profit,prices[i]-minPrices);
    }
    return profit
};
