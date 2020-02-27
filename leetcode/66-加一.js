// 题目描述：给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
//         最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
//         你可以假设除了整数 0 之外，这个整数不会以零开头。

var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++
        if (digits[i] >= 10) {
            digits[i] = digits[i] % 10
            if (i === 0) {
                digits.unshift(1)
                break
            }
        } else {
            break
        }
    }
    return digits;
}
