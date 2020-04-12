// 图的几种最短路径实现：

//     1.深度或广度优先搜索算法
//     2.弗洛伊德算法
//     3.迪杰斯特拉算法
//     4.Bellman-Ford算法


// 1）深度或广度优先搜索算法（解决单源最短路径）

// void dfs(int cur, int dst) {
//     if (minPath < dst) return; //当前走过路径大于之前最短路径，没必要再走下去  
//     if (cur == n) { //临界条件  
//         if (minPath > dst) minPath = dst;
//         return;
//     } else {
//         int i;
//         for (i = 1; i <= n; i++) {
//             if (edge[cur][i] != inf && edge[cur][i] != 0 && mark[i] == 0) {
//                 mark[i] = 1;
//                 dfs(i, dst + edge[cur][i]);
//                 mark[i] = 0; //需要在深度遍历返回时将访问标志置0            
//             }
//         }
//         return;
//     }
// }

// 2）弗洛伊德算法（解决多源最短路径）：时间复杂度O(n^3),空间复杂度O(n^2)
// 分析如下：
//     1>，首先构建邻接矩阵Floyd[n+1][n+1]，假如现在只允许经过1号结点，求任意两点间的最短路程，
//        很显然Floyd[i][j] = min{Floyd[i][j], Floyd[i][1]+Floyd[1][j]}，
// 代码如下：
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (Floyd[i][j] > Floyd[i][1] + Floyd[1][j])
            Floyd[i][j] = Floyd[i][1] + Floyd[1][j];
    }
}
// 2>，接下来继续求在只允许经过1和2号两个顶点的情况下任意两点之间的最短距离，
//     在已经实现了从i号顶点到j号顶点只经过前1号点的最短路程的前提下，
//     现在再插入第2号结点，来看看能不能更新更短路径，故只需在步骤1求得的Floyd[n+1][n+1]基础上，
//     进行Floyd[i][j] = min{Floyd[i][j], Floyd[i][2]+Floyd[2][j]}；......

// 3>，很显然，需要n次这样的更新，表示依次插入了1号，2号......n号结点，最后求得的Floyd[n+1][n+1]
// 是从i号顶点到j号顶点只经过前n号点的最短路程。

for (k = 1; k <= n; k++) {
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= n; j++) {
            if (Floyd[i][k] < inf && Floyd[k][j] < inf && Floyd[i][j] > Floyd[i][k] + Floyd[k][j])
                Floyd[i][j] = Floyd[i][k] + Floyd[k][j];
        }
    }
}




// 3.迪杰斯特拉算法（解决单源最短路径）

// 基本思想：
//         每次找到离源点（如1号结点）最近的一个顶点，然后以该顶点为中心进行扩展，最终得到源点到其余所有点的最短路径。
// 基本步骤：
//         1，设置标记数组book[]：将所有的顶点分为两部分,已知最短路径的顶点集合P和未知最短路径的顶点集合Q，
//            很显然最开始集合P只有源点一个顶点。book[i]为1表示在集合P中；
//         2，设置最短路径数组dst[]并不断更新：初始状态下，令dst[i] = edge[s][i](s为源点，edge为邻接矩阵)，
//            很显然此时dst[s]=0，book[s]=1。此时，在集合Q中可选择一个离源点s最近的顶点u加入到P中。并依据以u为新的中心点，
//            对每一条边进行松弛操作(松弛是指由结点s-->j的途中可以经过点u，并令dst[j]=min{dst[j], dst[u]+edge[u][j]})，
//            并令book[u]=1;
//         3，在集合Q中再次选择一个离源点s最近的顶点v加入到P中。并依据v为新的中心点，
//            对每一条边进行松弛操作(即dst[j]=min{dst[j], dst[v]+edge[v][j]}),并令book[v]=1;
//         4，重复3，直至集合Q为空。

/***构建邻接矩阵edge[][],且1为源点***/
for (i = 1; i <= n; i++) dst[i] = edge[1][s];
for (i = 1; i <= n; i++) book[i] = 0;
book[1] = 1;
for (i = 1; i <= n - 1; i++) {
    //找到离源点最近的顶点u，称它为新中心点
    min = inf;
    for (j = 1; j <= n; j++) {
        if (book[j] == 0 && dst[j] < min) {
            min = dst[j];
            u = j;
        }
    }
    book[u] = 1;
    //更新最短路径数组
    for (k = 1; k <= n; k++) {
        if (edge[u][k] < inf && book[k] == 0) {
            if (dst[k] > dst[u] + edge[u][k])
                dst[k] = dst[u] + edge[u][k];
        }
    }
}


// 4），Bellman-Ford算法(解决负权边，解决单源最短路径，前几种方法不能求含负权边的图)：时间复杂度O(nm),空间复杂度O(m)

// 主要思想：
//     对所有的边进行n-1轮松弛操作，因为在一个含有n个顶点的图中，任意两点之间的最短路径最多包含n-1边。
//     换句话说，第1轮在对所有的边进行松弛后，得到的是从1号顶点只能经过一条边到达其余各定点的最短路径长度。
//     第2轮在对所有的边进行松弛后，得到的是从1号顶点只能经过两条边到达其余各定点的最短路径长度，......


for (i = 1; i <= n; i++) dst[i] = inf;
dst[1] = 0;
for (k = 1; k <= n - 1; k++) {
    for (i = 1; i <= m; i++) {
        if (dst[e[i]] > dst[s[i]] + w[i])
            dst[e[i]] = dst[s[i]] + w[i];
    }
}
//检测负权回路
flag = 0;
for (i = 1; i <= m; i++) {
    if (dst[e[i]] > dst[s[i]] + w[i])
        flag = 1;
}
if (flag) cout << "此图含有负权回路";