// 题目描述：
// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
// 注意:

// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。
// 请根据这个假设，如果反转后整数溢出那么就返回 0。

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0;
    if(x > 0){
        res = Number(String(x).split('').reverse().join(''));
    }else if(x < 0){
        x = Math.abs(x);
        res = -Number(String(x).split('').reverse().join(''));
    }
    if (res < Math.pow(2, 31)* -1 || res > Math.pow(2, 31) -1){
        return 0;
    }
    return res;
};

// 其中split('').reverse.join('')为反转数组的固定用法
// Math.pow(x, y)的意思是x的y次方。

