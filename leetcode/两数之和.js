/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i ++) {
      const otherIndex = map.get(target - nums[i]); // 把target当成map的一个键，使用get方法读取这个值。如果找不到键值，返回undefined。
      if (otherIndex !== undefined) return [otherIndex, i];
      map.set(nums[i], i); // 返回当前map对象。
    }
  };
// map.get()   get() 方法返回某个 Map 对象中的一个指定元素。
// map.set()   set() 方法为 Map 对象添加或更新一个指定了键（key）和值（value）的（新）键值对。


// 1.使用一层循环，每遍历到一个元素就计算该元素与 targettarget 之间的差值 dif，然后以 dif 为下标到数组temp中寻找，
// 如果 temp[dif] 有值(即不是 undefined)，则返回两个元素在数组 numsnums 的下标，如果没有找到，
// 则将当前元素存入数组 temptemp 中(下标: nums[i], Value: inums[i],Value:i) 。
// 2.时间复杂度：O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var temp = [];
  for(var i=0;i<nums.length;i++){
      var dif = target - nums[i];
      if(temp[dif] != undefined){
          return [temp[dif],i];
      }
      temp[nums[i]] = i;
  }
};


