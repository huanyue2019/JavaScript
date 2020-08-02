// 删除数组arr的第一个元素，不直接修改数组arr，结果返回新的数组

// 方法一： concat

function concat(arr1, arr2) {
    let resArr = arr1.concat(arr2);
    return resArr;
}

// 方法二：...扩展运算符

function concat(arr1,arr2) {
    let resArr = [...arr1,...arr2]
    return resArr;
}

// 方法三：slice + push.apply

function concat(arr1,arr2) {
    let resArr = arr1.slice(0);
    [].push.apply(resArr,arr2);
    return resArr;
}