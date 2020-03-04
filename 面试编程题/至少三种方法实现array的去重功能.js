// 题目描述：至少三种方法实现array的去重功能，如：
[1, 2, 3, 4, 5].unique(); //[1,2,3,4,5]

Array.prototype.unique = (function () {
    return function () {
        return Object.keys(
            Array.prototype.reduce.call(
                this,
                function (obj, x) {
                    obj[x] = x;
                    return obj;
                },
                {}
            )
        )
    }
})();

Array.prototype.unique = (function(){
    return function(){ //去掉空对象{}
        return Array.from(new Set(this));
    }
})();

Array.prototype.unique = (function(){
    return function() {
        return this.filter((x,index)=> this.indexOf(x) === index);
    }
})();