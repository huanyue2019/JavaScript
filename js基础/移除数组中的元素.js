// 题目描述：移除数数组arr中的所有值与item相等的元素，直接在给定的arr数组上进行操作，并将结果返回。

// 注意：
// 直接操作原数组，所以不能出现newArr

// 方法一：for循环+splice
function removeWithout(arr, item){
    for(let i=arr.length;i>=0;i--){
        if(arr[i] == item) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

function removeWithout(arr, item) {
    for(let i=0;i<arr.length;i++) {
        if(arr[i]===item){
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}

// 变化一下：
// 移除数组中的元素，返回新的数组

// 方法一：filter

function remove(arr, item) {
    return arr.filter(res => {
        return res != item;
    });
}

// 方法二：for循环+push

function remove(arr, item) {
    let resArr = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== item) {
            resArr.push(arr[i]);
        }
    }
    return resArr;
}

// 方法三： forEach+push（效率高于for循环）

function remove(arr, item) {
    let resArr = arr.slice(0);
    for(let i = 0;i<resArr.length;i++) {
        if(resArr[i] == item) {
            resArr.splice(i,1);
            i--;
        }
    }
    return resArr;
}