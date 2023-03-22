/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    var min = Number.MAX_VALUE;
    var sum = 0;
    
    for (let i=0 ; i<nums.length ; i++){
        sum += nums[i];
        if (sum < min)
            min = sum;
    }
    if (min<0)
        return Math.abs(min)+1;
    else
        return 1;
};