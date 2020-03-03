
// 题目描述：给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

//          初始化 A 和 B 的元素数量分别为 m 和 n。

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
    A.splice(m, A.length - m, ...B.slice(0, n)); //将B插入后A的后面
    A.sort((a, b) => a - b);  //对A、B组合后的数组进行重新排序
};


// 这个解法真的太强了，...遍历B并获取到B所有的属性，然后用传递的属性覆盖现有属性，即逐个提取所有单个属性并将他们传递给新对象。
// e.g.：const numbers1 = [1, 2, 3, 4, 5];
//       const numbers2 = [ ...numbers1, 1, 2, 6,7,8]; // this will be [1, 2, 3, 4, 5, 1, 2, 6, 7, 8]
