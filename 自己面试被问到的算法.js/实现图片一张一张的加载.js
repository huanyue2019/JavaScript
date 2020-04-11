// 有一个数组：
// const imgs = ['url1','url2','url3',...];
// 请实现效果：
// 请按照图片数组顺序队列加载图片（注：加载完一张再加载下一张）

const images = ['url1', 'url2', 'url3'];
const loadImg = (url) => {
  return new Promise(resolve => {
    let image = new Image();
    image.src = url;
    image.onload = () => {
      resolve(image);
    }
    image.onerror = () => {
      reject(`Errors on loading`)
    };
  });
};

const solve = (images) => {
  const imgQueue = [];
  for (let i = 0; i < images.length; i++) {
    imgQueue.push(loadImg(images[i]));
  }
  Promise.all(imgQueue).then((item) => {
    console.log(item);
  });
};
solve(images);