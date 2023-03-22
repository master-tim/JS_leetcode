/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let ans = 0, l = 0, r = 0, zeros = 0 ;
    
    for (r ; r < nums.length ; r ++){
        
        if (nums[r] == 0)
            zeros ++;
        
        if (zeros > k ){
            
            if (nums[l] == 0)
                zeros --;
            
            l ++;
            ans --;
        }
        
        ans ++;
    }
    
    return ans;
};