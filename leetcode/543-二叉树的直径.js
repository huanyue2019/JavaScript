// 题目描述：给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过根结点。

// 解答：

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var diameterOfBinaryTree = function(root) {
    function helper(node) {
      if (node === null) return 0;
      
      let left = helper(node.left),
          right = helper(node.right);
      
      height = Math.max(left + right, height);
      return Math.max(left, right) + 1;
    }
    
    let height = 0;
    helper(root);
    
    return height;
  };