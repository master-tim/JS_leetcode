/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = null;
    
    if (nums.length <= 1){
        return nums[0]/k;
    } 
    
    for ( let i=k; i <= nums.length ; i++){
        var temp = null;
        
        for ( let j=i-k; j<i; j++){
            temp += nums[j];
        }
        
        if (temp > sum || sum == null)
            sum = temp;
        
    }
    
    return sum/k;
};