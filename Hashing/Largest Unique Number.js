/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    let hashmap = new Map();
    let highAns = -1;
    
    for(let i=0 ; i<nums.length ; i++)
        hashmap.set(nums[i], (hashmap.get(nums[i]) || 0) + 1);
    
    for(var [key,val] of hashmap){
        if (val === 1) {
            highAns = Math.max(highAns, key);
        }
    }
    
    return highAns;
};