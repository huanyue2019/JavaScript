// 题目描述：统计数组arr中值等于item的元素出现的次数

// 方法一：for循环

function count(arr, item) {
  let resCount = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === item) {
      resCount++;
    }
  }
  return resCount;
}

// 方法二：forEach

function count(arr, item) {
  let resCount = 0;
  arr.forEach((v) => {
    if (v == item) {
      resCount++;
    }
  });
  return resCount;
}

// 方法三：filter

function count(arr, item) {
  let res = arr.filter((v) => {
    return v === item;
  });
  return res.length;
}

// 方法四：map（效率高于filter）

function count(arr, item) {
  let resCount = 0;
  arr.map((v) => {
    if (v === item) {
      resCount++;
    }
  });
  return resCount;
}

// 方法五： reduce

function count(arr, item) {
  let res = arr.reduce((init, curr) => {
    // 如果当前置等于item，该函数值加一
    return curr === item ? init + 1 : init;
  }, 0);
  return res;
}
