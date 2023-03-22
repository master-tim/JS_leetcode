/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    if (sentence.length < 26)
        return false;
    
    let hashAl = new Map();
    
    for (let i = 0; i < sentence.length; i++) {
        if (!hashAl.has(sentence[i])) {
            hashAl.set(sentence[i], 1);
        }
        if (hashAl.size === 26) return true;
    }

    return false;   
};