/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let winner = new Map();
    let loser = new Map();
    
    for (let i=0 ; i<matches.length ; i++ ){
        winner.set(matches[i][0], (winner.get(matches[i][0]) || 0)  + 1);
        loser.set(matches[i][1], (loser.get(matches[i][1]) || 0)  + 1);
    }
    
    let ansW = [], ansL = [];
    
    for(var [key, val] of winner){
        if (val >= 1 && !loser.get(key)) {
            ansW.push(key);
        }
    }
    for(var [key, val] of loser){
        // console.log(loser)
        if (val === 1) {
            ansL.push(key);
        }
    }
    ansW.sort(function(a, b){return a-b});   
    ansL.sort(function(a, b){return a-b});
    return [ansW, ansL];
};