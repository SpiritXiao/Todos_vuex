import {DELETE_TODO,ADD_TODO,DELETE_COMPLETED_TODO,SELECT_ALL_TODO,RECEIVE_TODOS} from './mutation-type'

export default{
    [DELETE_TODO] (state,{index}) {
        state.todos.splice(index,1)
    },
    [ADD_TODO] (state,{todo}) {
        state.todos.unshift(todo)
    },
    [DELETE_COMPLETED_TODO] (state) {
        state.todos=state.todos.filter(todo => !todo.complete)
    },
    [SELECT_ALL_TODO] (state,{check}) {
        state.todos.forEach(todo => todo.complete=check);
    },
    [RECEIVE_TODOS] (state,{todos}) {
        state.todos=todos
    }
}