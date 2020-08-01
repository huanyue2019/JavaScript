//  题目描述： 在数组的末尾添加元素，不直接修改数组arr，结果返回新的数组。

// 方法一：
// for循环+push()

function append(arr, item) {
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    resArr.push(arr[i]);
  }
  resArr.push(item);
  return resArr;
}


// 方法二：concat

function append(arr, item){
    return arr.concat(item);
}

// 方法三：splice浅拷贝+push

function append(arr, item) {
    let newArr = arr.slice(0); // splice(start, end)浅拷贝数组
    newArr.push(item);
    return newArr;
}

// 方法四：...拓展运算符

function append(arr, item) {
    let resArr = [...arr, item];
    return resArr;
}

