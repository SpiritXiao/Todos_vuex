export default{
    //总数量
    totalCount (state) {
        return state.todos.length
    },
    //完成的数量
    completedCount (state) {
        return state.todos.reduce((preTotal,todo)=>preTotal+(todo.complete?1:0),0)
    },
    //判断是否全部选中
    isAllSelected (state,getters) {
        return getters.totalCount===getters.compeleteCount && getters.totalCount>0
    }
}