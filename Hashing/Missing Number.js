/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let hashmap = new Map();
    
    for (let i=0; i<nums.length ; i++){
        hashmap.set(nums[i], 1);
    }
    
    for (let i=0; i<=nums.length ; i++){
        if (!hashmap.has(i))
            return i;
    }
    
    return 0;
};