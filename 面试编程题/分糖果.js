
// 题目描述：排排坐，分糖果。

// 我们买了一些糖果 candies，打算把它们分给排好队的 n = num_people 个小朋友。

// 给第一个小朋友 1 颗糖果，第二个小朋友 2 颗，依此类推，直到给最后一个小朋友 n 颗糖果。

// 然后，我们再回到队伍的起点，给第一个小朋友 n + 1 颗糖果，第二个小朋友 n + 2 颗，依此类推，直到给最后一个小朋友 2 * n 颗糖果。

// 重复上述过程（每次都比上一次多给出一颗糖果，当到达队伍终点后再次从队伍起点开始），直到我们分完所有的糖果。注意，就算我们手中的剩下糖果数不够（不比前一次发出的糖果多），这些糖果也会全部发给当前的小朋友。

// 返回一个长度为 num_people、元素之和为 candies 的数组，以表示糖果的最终分发情况（即 ans[i] 表示第 i 个小朋友分到的糖果数）。


var distributeCandies = function (candies, num_people) {
    let res = new Array(num_people).fill(0)
    let i = 0
    while (candies != 0) {
        res[i % num_people] += Math.min(i + 1, candies)
        candies -= Math.min(i + 1, candies)
        i++
    }
    return res
}

var distributeCandies = function (candies, num_people) {
    let result = new Array(num_people).fill(0);
    let surplus = candies;
    let j = 0;
    for (let i = 1; i < candies; i++) {
        if (surplus > i) {
            result[j] = result[j] + i;
            surplus = surplus - i;
            j++;
            if (j === num_people) {
                j = 0;
            }
        } else {
            result[j] = result[j] + surplus;
            break;
        }
    }
    return result;
};
// fill()方法将数组中的所有元素更改为静态值，从开始索引（默认为0 ）到结束索引（默认为array.length ）. 它返回修改后的数组.