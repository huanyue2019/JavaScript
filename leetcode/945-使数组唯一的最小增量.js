// 给定整数数组 A，每次 move 操作将会选择任意 A[i]，并将其递增 1。

// 返回使 A 中的每个值都是唯一的最少操作次数。

// 示例 1:

// 输入：[1,2,2]
// 输出：1
// 解释：经过一次 move 操作，数组将变为 [1, 2, 3]。
// 示例 2:

// 输入：[3,2,1,2,1,7]
// 输出：6
// 解释：经过 6 次 move 操作，数组将变为 [3, 4, 1, 2, 5, 7]。
// 可以看出 5 次或 5 次以下的 move 操作是不能让数组的每个值唯一的。


// 遍历

// 时间复杂度：O(N\log N)O(NlogN)，其中 NN 是数组 AA 的长度，即排序的时间复杂度。

// 空间复杂度：O(\log N)O(logN)，排序需要额外 O(\log N)O(logN) 的栈空间。

/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    let move = 0;
    A.sort((a,b) => a-b);
    for(i=0;i<A.length;i++){
        if(A[i] <= A[i-1]){
            let n = A[i-1] - A[i] + 1
            A[i] += n
            move += n
        }
    }
    return move;
};

// hash方法
/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    let count = 0;
    let hash = [];
    for(let num of A){
        while(hash[num]){
            count++;
            num++;
        }
        hash[num] = true
    }
    return count;
};