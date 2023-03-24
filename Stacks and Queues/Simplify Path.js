/**
 * @param {string} path
 * @return {string}
 */

var simplifyPath = function(path) {
    
    path = path.split('/');
    
    let stack = [];
    
    for(let p of path){
        if(p == '.' || p == '') continue;
        else if(p == '..')   stack.pop();
        else stack.push(p);
    }
    
    return '/' + stack.join('/');
    
};