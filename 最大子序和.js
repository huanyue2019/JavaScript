// val代表当前子序列的值，每次循环val += nums[pos]，即将子序列长度加一，
// 求出这个子序列的值，若果val > max，则将val值赋给max，当前子序列是目前
// 有最大和的子序列，如果此时val < 0，则将val赋0，则放弃当前子序列，寻找
// 下一个子序列，而不是继续增长当前子序列。

let maxSubArray = function(nums) {
    let max = -1 << 31;
    let val = 0;
    for(let pos in nums) {
        val += nums[pos];
        max = Math.max(val, max);
        val = Math.max(0, val);
    }
    return max;
};