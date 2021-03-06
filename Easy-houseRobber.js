// You are a professional robber planning to rob houses along a street. Each house
// has a certain amount of money stashed, the only constraint stopping you from robbing
// each of them is that adjacent houses have security system connected and it will
// automatically contact the police if two adjacent houses were broken into on the same night.
//
// Given a list of non-negative integers representing the amount of money of each house,
// determine the maximum amount of money you can rob tonight without alerting the police.
//
// Example 1:
// Input: [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.
// Example 2:
// Input: [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.

/**
 * @param {number[]} nums
 * @return {number}
 * solution 1 dynamic programming running 76ms
 */
var rob = function(nums) {
    var money = [];
    var temp = 0;
    if(nums.length === 0){
        return 0
    }else if(nums.length === 1){
        return nums[0]
    }else if(nums.length === 2){
        return Math.max.apply(Math,nums);
    }
    money[0] = nums[0];
    money[1] = Math.max(nums[1],nums[0]);
    for(var i = 2;i<nums.length;i++){
      //for house[i],only 2 options available, robbing or leaving,
        //if rob, then the robber would get the money robbed from previous i-2 house plus money in house[i]
        //if leave, then the robber would get money robbed from previous i-1 house
        temp = Math.max(money[i-2]+nums[i],money[i-1]);
        money.push(temp);
    }
    return money[money.length-1]
};
