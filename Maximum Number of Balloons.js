/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let hash = new Map();
    let wordH = new Map();
    
    let word = 'balloon'; 
    let num = 0;
    
    for(var x of word)
        wordH.set(x, 1);
    
    for(let i=0; i<text.length ; i++){
        if (wordH.has(text[i]))
            hash.set(text[i], (hash.get(text[i]) || 0) +1 );
    }
    
    while(hash.size >= wordH.size){    
        
        for (var x of word){
            if (hash.get(x) > 0){
                hash.set(x, hash.get(x)-1);
            }
            else {
                return num;
            }
        }
        num +=1;
    }
    
    return num;
    
};