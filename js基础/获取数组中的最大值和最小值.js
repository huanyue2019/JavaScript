// 排序法：
var arr = [12, 56, 25, 5, 82, 51, 22];
arr.sort(function (a, b) {
  return a - b;
}); // [5,12,22,25,51,56]
var min = arr[0]; // 5
var max = arr[arr.length - 1];

// 假设法：

// 获取最大值：
var arr = [22, 13, 6, 55, 30];
var max = arr[0];
for (var i = 1; i < arr.length; i++) {
  var cur = arr[i];
  cur > max ? (max = cur) : null;
}
console.log(max); // 55
// 获取最小值：
var arr = [22, 13, 6, 55, 30];
var min = arr[0];
for (var i = 1; i < arr.length; i++) {
  var cur = arr[i];
  cur < min ? (min = cur) : null;
}
console.log(min); // 6

// 用apply来实现

var arr = [22, 13, 6, 55, 30];
var max = Math.max.apply(null, arr);
var min = Math.min.apply(null, arr);
console.log(max, min); // 55,6


// 使用ES6的拓展运算符

var arr = [22, 13, 6, 55, 30];
console.log(Math.max(...arr)); // 55
