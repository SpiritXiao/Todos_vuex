/* 
    使用localStorage存储数据的工具模块

    向外暴露：函数 对象
    需要向外暴露1个功能还是多个功能，1个用函数，多个用对象
 */
    const TODOS_KEY='todos_key';
    export default{
        saveTodos(todos){
            window.localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
        },

        readTodos(){

            return  JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]');
        }
    }
