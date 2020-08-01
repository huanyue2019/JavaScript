// 题目描述： 找出元素item在给定数组arr中的位置

// 方法一

function indexOf(arr, item) {
  if (Array.prototype.indexOf) {
    // 判断浏览器是否支持indexOf方法
    return arr.indexOf(item);
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
  }
}

// 方法二

function indexOf(arr, item) {
  if (Array.prototype.indexOf) {
    return arr.indexOf(item);
  } else if (arr.indexOf(item) > 0) {
    return arr.indexOf(item);
  } else {
    return -1;
  }
}

// indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在则返回-1；

// 语法：

// arr.indexOf(searchElement) //查找searchElement元素在数组中的第一个位置
// arr.indexOf(searchElement[,fromIndex = 0]);  // 从fromElemnet开始查找searchElement元素在数组中的第一个位置

// str.indexOf(searchValue[,fromIndex])




