// 自定义链表：对外公开的方法有
// append(element) 在链表最后追加节点
// insert(index, element) 根据索引index, 在索引位置插入节点
// remove(element)  删除节点
// removeAt(index)  删除指定索引节点
// removeAll(element) 删除所有匹配的节点
// set(index, element) 根据索引，修改对应索引的节点值
// get(index)  根据索引获取节点信息
// indexOf(element) 获取某个节点的索引位置
// clear()  清空所有节点
// length()   返回节点长度
// print() 打印所有节点信息
// toString() 打印所有节点信息，同print
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let[prev,curr] = [null,head];
    while(curr){
        [curr.next,prev,curr] = [prev,curr,curr.next];
    }
    return prev;
};