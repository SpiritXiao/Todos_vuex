import {DELETE_TODO,ADD_TODO,DELETE_COMPLETED_TODO,SELECT_ALL_TODO,RECEIVE_TODOS} from './mutation-type'
import storageUtil from '../util/storageUtil'

export default{
    deleteTodo ({commit},index) {
        commit(DELETE_TODO,{index})
    },
    addTodo ({commit},todo) {
        commit(ADD_TODO,{todo})
    },
    deleteCompletedTodos ({commit}) {
        commit(DELETE_COMPLETED_TODO)
    },
    selectAllTodos ({commit},check) {
        commit(SELECT_ALL_TODO,{check})
    },
    //异步获取todos并更新状态
    reqTodos ({commit}) {
        setTimeout(function () {
            const todos=storageUtil.readTodos()
            commit(RECEIVE_TODOS,{todos})
        },1000)
    }
}