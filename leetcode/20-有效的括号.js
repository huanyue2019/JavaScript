// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 利用栈。
// 遇到左括号，一律推入栈中，
// 遇到右括号，将栈顶部元素拿出，如果不匹配则返回 false，如果匹配则继续循环。

// 为了提高性能, 在循环前进行这一步：let len = s.length是非常关键的，减少了计算次数。
// 为了提高执行时间，这一步if (len%2) return false是非常关键的，减少了不必要的计算。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    let len = s.length;
    if (len%2) return false;
    for (let i = 0; i < len; i++) {
        let letter = s[i];
        switch(letter) {
            case "(": {
                arr.push(letter);
                break;
            }
            case "[": {
                arr.push(letter);
                break;
            }
            case "{": {
                arr.push(letter);
                break;
            }
            case ")": {
                if (arr.pop() !== "(") return false;
                break;
            }
            case "]": {
                 if (arr.pop() !== "[") return false;
                break;
            }
            case "}": {
                if (arr.pop() !== "{") return false;
                break;
            }
        }
    }
    return !arr.length;

};

// 解法二：

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