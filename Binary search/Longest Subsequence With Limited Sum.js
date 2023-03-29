/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort(function(a, b){return a - b});
    
    let ans = [];
    for(var x of queries){
        
        let sum = 0;
        let i = 0;
        
        for(var y of nums){
            
            if (x >= sum+y){ 
                sum += y; 
                i++;
            }   
            
        }
        ans.push(i);
    }
    
    return ans;
};