// 删除数组arr的最后一个元素，不要直接修改数组arr，返回新的数组。

// 方法一：slice

function truncate(arr) {
    return arr.slice(0,arr.length-1);
}

// 方法二：concat/slice+pop

function truncate(arr) {
    // let resArr = arr.slice(0);
    let resArr = arr.concat();
    resArr.pop();
    return resArr;
}
