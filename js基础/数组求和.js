// 题目描述：计算给定数组中arr中所有元素的和

// 方法一：for循环

function sum(arr) {
  let res = 0;
  for (let i = 0; i <= arr.length; i++) {
    res += arr[i];
  }
  return res;
}

// 方法二：forEach循环
function sum(arr) {
  let res = 0;
  arr.forEach((value, index, array) => {
    array[index] == value; // 结果为true
    res += value;
  });
  return res;
}

// 方法三： reduce
// reduce()方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

function sum(arr) {
  return arr.reduce((pre, cur) => {
    return pre + cur;
  });
}

/**
* @method reduce
* @param {number}   accumulator  每次迭代累加的值
* @param {number}   currentValue  当前迭代的数组元素
* @param {number}   currentIndex  当前元素的下标
* @param {array}    array  原数组
*/
let arr = [1,2,6,3,4,5];
let res = arr.reduce(function(accumulator,currentValue,currentIndex,array){
 return accumulator+currentValue;
});
console.log(res);

// 方法四： eval
// eval()函数可计算某个字符串，并执行其中的javascript代码。

function sum(arr) {
  return eval(arr.join("+"));
}
