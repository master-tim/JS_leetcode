/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let ans = []
    let s = matrix.length

    for(let i=0; i<matrix[0].length; i++){
        let ansI = []
        for (let j=matrix.length-1; j>= 0; j--){
            ansI.push(matrix[j][i]);
        }
        ans.push(ansI);
    }
    
    for(var x of ans){
        matrix.push(x);
    }

    for(let i=0; i< s ; i++){
        matrix.shift();
    }
};