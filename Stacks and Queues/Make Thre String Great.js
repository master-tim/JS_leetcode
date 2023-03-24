/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {

    let stack = [];

    for (character of s){
        
        if (stack.length != 0 && Math.abs(stack[stack.length-1].codePointAt() - character.codePointAt()) == 32){
            stack.pop();
            continue;
        }

        stack.push(character);
    }
    return stack.join("");
    
};