Array.prototype.newMap = function (callback) {
 for(var i = 0;i<this.length;i++){
     callback(this[i],i);
 }   
}

var arr = [1,2,3,4,5,6,7,8,9];
arr.newMap((item,index) => {
    console.log(item,index);
})