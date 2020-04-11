<!-- 动态规划和递归或者分治本质上没有太大的区别（关键看有无最优的子结构）；
共性：找到重复子问题；
差异性：最优子结构、中途可以淘汰次优解。
java语言中的模板： -->
`
public void recur(int level,int param){
    if(level > MAX_LEVEL){
        return;
    }
    process(level,param);
    recur(level:level + 1,newParam);
}
`
