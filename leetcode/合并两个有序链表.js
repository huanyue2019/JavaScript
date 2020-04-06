// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 === null)
        return l2;
    if(l2 === null)
        return l1;
    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

// ------
// 4/6更新：
// 今天在重新做这道题目的时候，依然出现了错误，我的mergeTwoList单词拼写错误，所以一直显示l2.next = mergeTwoLists(l1, l2.next)这一句报错；

// 另外这个方法用的是递归的方法。
// 如果l1或者l2有任何一个是空列表，返回另一个非空链表就OK了。
// 如果两个都是非空列表的情况下，就比较两个链表头元素的大小，然后用next进行一个一个的递归操作，然后合并就好。
// 时间复杂度：O（n + m）
// 空间复杂度：O（n + m）