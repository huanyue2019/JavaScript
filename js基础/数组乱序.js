// sort + random
// 缺点：
// 运行次数多了我们就会发现，末尾的数字为大数的概率较大，开始的数字为小数的概率较大。
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// =>  [3, 5, 9, 10, 7, 6, 4, 8, 1, 2]
// 原因：在Chrome v8引擎源码中，处理sort方法时，使用了 插入排序 和 快速排序 两种方案。
// 当目标数组长度小于10时，使用插入排序；反之，使用快速排序和插入排序的混合排序。
// 所以用 sort 方法乱序不准确的原因就在于：理想的方案是数组中每两个元素都要进行比较，这个比较有50%的交换位置概率。
// 而在插入排序的算法中，当待排序元素跟有序元素进行比较时，一旦确定了位置，就不会再跟位置前面的有序元素进行比较，
// 所以就乱序的不彻底。

// 最优方案：

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
}

let resultArr = Array(10).fill(0);
for (let i = 0; i < 10000; i++) {
  // sort 会改变原数组，必须用新数组来进行乱序
  let newArr = [].concat(arr);
  const tmp = shuffle(newArr);
  resultArr.forEach((item, index) => {
    // 不能直接改变 item 的值, item += tmp[index], 因为 forEach 不会改变原数组
    resultArr[index] += tmp[index];
  });
}
console.log(resultArr);
const average = resultArr.map((i) => i / 10000);
console.log(average);
// => [55070, 54854, 54588, 55169, 55458, 54670, 55311, 54944, 55030, 54906]
// =>  [5.507, 5.4854, 5.4588, 5.5169, 5.5458, 5.467, 5.5311, 5.4944, 5.503, 5.4906]
