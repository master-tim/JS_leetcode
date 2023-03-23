/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let hashMag = new Map();
    
    for(let i=0 ; i<magazine.length ; i++)
        hashMag.set(magazine[i], (hashMag.get(magazine[i]) || 0) +1);
    
    for(var x of ransomNote){
        if(hashMag.get(x) > 0)
            hashMag.set(x, hashMag.get(x) -1);
        
        else
            return false;
    }
    
    return true;
};