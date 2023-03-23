/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let ans = 0;
    
    let hash = new Map();
    
    for(var x of stones)
        hash.set(x, (hash.get(x) || 0 )+1);
    
    for(var x of jewels)
        if(hash.has(x))
            ans += hash.get(x);
    
    return ans;
};