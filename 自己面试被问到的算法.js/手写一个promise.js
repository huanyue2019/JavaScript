function Promise(fn) {
  this.cbs = [];
  const resolve = (value) => {
    // promise的then函数需要异步执行
    setTimeout(() => {
      this.data = value;
      this.cbs.forEach((cb) => cb(value));
    });
  };
  fn(resolve);
}

Promise.prototype.then = function (onResolved) {
  return new Promise((resolve) => {
    this.cbs.push(() => {
      const res = onResolved(this.data);
      if (res instanceof Promise) {
        res.then(resolve);
      } else {
        resolve(res);
      }
    });
  });
};

// Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象。
// 如果这个值是一个 promise ，那么将返回这个 promise ；
// 如果这个值是thenable（即带有"then" 方法），返回的promise会“跟随”这个thenable的对象，采用它的最终状态；
// 否则返回的promise将以此值完成。此函数将类promise对象的多层嵌套展平。

// 警告：不要在解析为自身的thenable 上调用Promise.resolve。这将导致无限递归，因为它试图展平无限嵌套的promise。