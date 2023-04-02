/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    let ans = [];
    potions.sort(function(a, b){return a - b});
    console.log(potions);
    for(var spell of spells){
        let n =0;
        for(let j=0; j < potions.length ; j++){
            if (potions[j]*spell >= success){
                n = potions.length - j;
                break;
            }
        }
        ans.push(n);
    }
    return ans;
};