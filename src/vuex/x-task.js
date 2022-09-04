export const taskModule = {
    state: () => ({
        tasks: [],
        taskChang:{},
    }),
    getters: {
        Task(state) {
            return state.tasks
        },
        TaskChange(state){
            return state.taskChang
        }
    },
    mutations: {
        inLocal(state) {
            state.tasks = JSON.parse(localStorage.tasks)
        },
        add(state, task) {
            if(!task.index && task.index!==0){
                state.tasks.push(JSON.parse(JSON.stringify(task)))
                return
        }
            state.tasks.splice(task.index,1,task)
        },
        changeAdd(state, task) {
            state.taskChang = task
        },
        del(state, task) {
            state.tasks.splice(task.index, 1)
        },
    },
    actions: {
        inLocalStorage({commit}) {
            if (localStorage.tasks) {
                commit('inLocal')
            }
        },
        addChange({commit}, task) {
            commit('changeAdd', task)
        },
        addTask({commit,state}, task) {
            commit('add', task)

            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        delTask({commit,state}, task) {
            commit('del', task)

            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
    },
    namespaced: true
}