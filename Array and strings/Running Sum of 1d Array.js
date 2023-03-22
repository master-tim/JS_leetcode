/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let ans = [];
    let sum = 0;
    
    for (let i=0; i < nums.length ; i++){
        ans.push(sum += nums[i]);
    }
    return ans;
};