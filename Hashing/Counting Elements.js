/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    
    let sum = 0
    let hashNums = new Set()
    
    for(let i = 0; i < arr.length; i++){
        hashNums.add(arr[i])
    }
    
    for(let i = 0; i < arr.length; i++){
        if(hashNums.has(arr[i] + 1)){
            sum++
        }
    }
    
    return sum
};