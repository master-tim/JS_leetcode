/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (!n) return false;
    if (n === 1) return true;
    
    
    let ans = isPowerOfThree(n/3);

    return n % 3 === 0 && ans ;
};