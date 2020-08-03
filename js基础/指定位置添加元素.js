// 题目描述：在数组arr的index处添加元素item。不直接修改数组arr，返回新的数组

// 方法一： 先复制前0~index个元素，将item元素插入之后，再拼接index之后的元素

function insert(arr,item, index) {
    let resArr = arr.slice(0,index);
    resArr.push(item);
    resArr = resArr.concat(arr.slice(index));
    return resArr;
}

// 方法二：使用splice方法插入(效率较高)

function insert(arr,item,index) {
    let resArr = arr.splice(0);
    resArr.splice(index,0,item);
    return resArr;
}

// 方法三：push.apply+splice

function insert(arr,item,index){
    let resArr = [];
    [].push.apply(resArr, arr);
    resArr.splice(index,0,item);
    return resArr;
}