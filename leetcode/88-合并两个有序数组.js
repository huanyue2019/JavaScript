// 题解：给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.length = m;
    nums2.length = n;
    for(let i = 0;i< n;i++){
        nums1.push(nums2[i]);
    }
    nums1.sort((a,b)=>a - b);
};