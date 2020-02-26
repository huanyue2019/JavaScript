// 题目描述：给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
//          不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

// 题解：如果数组里碰到相同的val，就splice掉这一项，此时数组项数就少了一个，i要往后退回一个，即i--， 结束～

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i = 0;i<nums.length;i++){
        if(nums[i] === val){
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};