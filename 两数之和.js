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
      const otherIndex = map.get(target - nums[i])
      if (otherIndex !== undefined) return [otherIndex, i]
      map.set(nums[i], i)
    }
  };
// @lc code=end


// 1.使用一层循环，每遍历到一个元素就计算该元素与 targettarget 之间的差值 difdif，然后以 difdif 为下标到数组temp中寻找，如果 temp[dif] 有值(即不是 undefinedundefined)，则返回两个元素在数组 numsnums 的下标，如果没有找到，则将当前元素存入数组 temptemp 中(下标: nums[i], Value: inums[i],Value:i) 。
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


