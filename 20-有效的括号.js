// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let len = s.length;
    let first = s[0];
    if(len === 0) return true;
    if(len % 2 != 0 || [')',']','}'].indexOf(first) != -1){
        return false;
    }
    let stack = [first];
    const MAP = {
        ')':'(',
        ']':'[',
        '}': '{'
    }
    for(let i = 1;i<len;i++){
        let length = stack.length;
        let top = length > 0 ? stack[length - 1] : null;
        let now = s[i];
        if(MAP[now] === top){
            stack.pop();
        }else{
            stack.push(now);
        }
    }
    return stack.length === 0;
};