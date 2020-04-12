// 题目描述：
// 给定一个二叉树，检查它是否是镜像对称的。
// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3
// 进阶：

// 你可以运用递归和迭代两种方法解决这个问题吗？

// 递归法：

// 如果一个树的左子树和右子树树镜像对称，那么这个树就是对称的

//  1、 它们的两个根结点具有相同的值。
//  2、 每个树的右子树都与另一个树的左子树镜像对称。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root === null) return true;
    return help(root.left, root.right);
};

function help(left, right) {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    return (
        left.val === right.val &&
        help(left.left, right.right) &&
        help(left.right, right.left)
    );
}
// 复杂度分析： 

// 时间复杂度：O(n),因为我们遍历整个输入树一次，其中n是树中结点的总数。
// 空间复杂度：O(n)——最糟糕的情况下,递归调用的次数受树的高度的限制，在最糟糕的情况下，树是线性的，其高度为O(n)。

// 迭代法

// 利用队列，队列中每两个连续的节点应该是相等的，而且他们的子树互为镜像。每次提取两个结点并比较他们的值，然后将两个结点的左右子节点
// 按相反的顺序插入到队列中。当队列为空时，或者检测到树不对称时（从队列中取出两个不相等的连续结点），算法结束。
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root === null) return true;
    let node = root;
    let queue = [node];
    while (queue.length > 0) {
        if (!help(queue)) {
            return false;
        }
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            node = queue.shift();
            if (node !== null) {
                queue.push(node.left);
                queue.push(node.right);
            }
        }
    }
    return true;
};

function help(arr) {
    let left = 0,
        right = arr.length - 1;
    while (left < right) {
        if (arr[left] === null || arr[right] === null) {
            if (arr[left] !== arr[right]) {
                return false;
            }
        } else {
            if (arr[left].val !== arr[right].val) {
                return false;
            }
        }
        left++;
        right--;
    }
    return true;
}