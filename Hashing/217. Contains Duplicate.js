/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();
    for (var x of nums){
        if (set.has(x))
            return true;
        set.add(x);
    }
    return false;
};