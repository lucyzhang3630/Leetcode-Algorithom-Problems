// On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).
//
// Once you pay the cost, you can either climb one or two steps. You need to find minimum
// cost to reach the top of the floor, and you can either start from the step with index 0,
// or the step with index 1.
//
// Example 1:
// Input: cost = [10, 15, 20]
// Output: 15
// Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
//
// Example 2:
// Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// Output: 6
// Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
//
// Note:
// cost will have a length in the range [2, 1000].
// Every cost[i] will be an integer in the range [0, 999]
//
// Hint:
// Say f[i] is the final cost to climb to the top from step i. Then f[i] = cost[i] + min(f[i+1], f[i+2]).

/**
 * @param {number[]} cost
 * @return {number}
 * solution 1 dynamic programming
 */
var minCostClimbingStairs = function(cost) {
    var result = new Array();
    if(cost.length===2){
        return 0
    }else{
        result[0] = 0;
        result[1] = 0;
        for(var i = 2;i<cost.length;i++){
            //result[i] means the min cost before getting to stair[i]
            //(as cost[i] is not included in result[i] value)
            result[i]=Math.min(result[i-2]+cost[i-2],result[i-1]+cost[i-1])
        }
        //to reach the final stair, either from 2 steps away or 1 step away, get the min of it
        return Math.min(result[cost.length-1]+cost[cost.length-1],
                       result[cost.length-2]+cost[cost.length-2])
    }
};
