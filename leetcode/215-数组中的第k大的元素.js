
// 参考快排序的快速查找
var findKthLargest = function (nums, k) {
    function swap(a, b) {
        let temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
    // 查找nums[start]正确的排序位置
    // 直到找到排在第k-1位的。就是所求结果
    function findLocation(start, end) {
        if (start === end) return nums[start];
        let i = start;
        let j = end + 1;
        while (true) {
            while (nums[++i] > nums[start])
                if (i === end) break;
            while (nums[--j] < nums[start])
                if (j === start) break;
            if (i < j) swap(i, j);// 交换左右边元素，保证左分支元素 大于 右分支元素
            if (i >= j) {
                swap(start, j);
                break;
            }
        }
        // 找到所求元素
        if (j === k - 1) return nums[j];
        // j>k-1 从nums[j]的左边分支开始查找
        // 否则 从右边分支查找
        if (j > k - 1) return findLocation(start, j - 1);
        else return findLocation(j + 1, end);
    }
    return findLocation(0, nums.length - 1);
};



// var findKthLargest = function (nums, k) {
//     //堆
//     function Heap() {
//         this.heap = [];
//         //leftNode: 2 * i + 1,
//         //rightNode: 2 * i + 2;
//         this.getTop = function () {
//             return this.heap[0];
//         }
//         this.insert = function (num) {
//             this.heap.push(num);
//             let idx = this.heap.length - 1,
//                 fatherIndex = Math.floor((idx - 1) / 2);
//             while (fatherIndex >= 0 && this.heap[idx] < this.heap[fatherIndex]) {
//                 [this.heap[idx], this.heap[fatherIndex]] = [this.heap[fatherIndex], this.heap[idx]];
//                 idx = fatherIndex;
//                 fatherIndex = Math.floor((idx - 1) / 2);
//             }
//         }
//         this.remove = function (num) {
//             if (this.heap.length == 1 && num == undefined) {
//                 return this.heap.pop();
//             }
//             let res = this.heap[0];
//             num = num == undefined ? this.heap.pop() : num;
//             this.heap[0] = num;
//             let idx = 0,
//                 left = 2 * idx + 1,
//                 right = 2 * idx + 2;
//             while (this.heap[idx] > this.heap[left] || this.heap[idx] > this.heap[right]) {
//                 if (this.heap[left] > this.heap[right]) {
//                     [this.heap[right], this.heap[idx]] = [this.heap[idx], this.heap[right]];
//                     idx = right;
//                 } else {
//                     [this.heap[left], this.heap[idx]] = [this.heap[idx], this.heap[left]];
//                     idx = left
//                 }
//                 left = 2 * idx + 1;
//                 right = 2 * idx + 2;
//             }
//             return res;
//         }
//     }

//     let heap = new Heap();
//     for (let i = 0; i < nums.length; i++) {
//         if (i < k) {
//             heap.insert(nums[i]);
//         } else if (nums[i] > heap.getTop()) {
//             heap.remove(nums[i]);
//         }
//     }
//     return heap.getTop();

//     //快速选择
//     return findKthNumber(nums, nums.length - k + 1);

//     function findKthNumber(arr, k, p = 0, q = arr.length) {
//         function helper(nums, start, end) {
//             let random = (Math.random() * (end - start - 1) + start) | 0;
//             [nums[random], nums[end - 1]] = [nums[end - 1], nums[random]];
//             let x = nums[end - 1];
//             let index = start;
//             for (let i = start; i < end - 1; i++) {
//                 if (nums[i] < x) {
//                     [nums[index], nums[i]] = [nums[i], nums[index]];
//                     index++;
//                 }
//             }
//             [nums[end - 1], nums[index]] = [nums[index], nums[end - 1]];
//             return index;
//         }
//         if (p == q) return arr[p];
//         let index = helper(arr, p, q),
//             i = index - p + 1;
//         if (i == k) return arr[index];
//         return i > k ? findKthNumber(arr, k, p, index) : findKthNumber(arr, k - i, index + 1, q)
//     }
// };