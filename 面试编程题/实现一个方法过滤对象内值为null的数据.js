// 题目描述：实现一个方法过滤对象内值为null的数据，如：
var obj = { a: 1, b: null, C: { a: 1, b: null } }
console.log(valFilter(obj)); // {a:1,c:{a:1}}
// 思考：如果使用lodash，有什么快速实现的api，怎么实现

function valFilter(obj) {
    for (let key in obj) {
        if (!(obj[key] instanceof Object)) {
            if (obj[key] === null) {
                delete obj[key];
            }
        } else {
            valFilter(obj[key]);
        }
    }
    return obj;
}

// 解释：1.instanceof 运算符与 typeof 运算符相似，用于识别正在处理的对象的类型。
//       与 typeof 方法不同的是，instanceof 方法要求开发者明确地确认对象为某特定类型。
// e.g.
var oStringObject = new String("hello world");
console.log(oStringObject instanceof String);   // 输出 "true"

// 2.Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，
// 数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 。
// e.g.
// simple array
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
var myObj = Object.create({}, {
    getFoo: {
        value: function () { return this.foo; }
    }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']



