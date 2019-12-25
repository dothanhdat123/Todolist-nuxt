import state from "./state";

export default {
    changeTasks({ commit }, newTasks) {
        commit('CHANGE_TASKS', newTasks);
    },
    // changeTasks({ commit }, newTasks) {
    //     // console.log("Action changeTasks", newTasks);
    //     commit('CHANGE_TASKS', newTasks)
    // },
    toggleForm({ commit }) {
        // console.log("TOGGLE_FORM action");
        commit('TOGGLE_FORM');
    },
    searchData({ commit }, data) {
        // console.log("SEARCH_DATA action");
        commit('SEARCH_DATA', data);
    },
    clearData({ commit }) {
        commit('CLEAR_DATA');
    },
    sortData({ commit }, { orderBy, orderDir }) {
        commit('SORT_DATA', { orderBy, orderDir });
    },
    handleAddNewTask({ commit, state }, task) {
        commit('HANDLE_ADD_NEW_TASK', task);
    },
    handleDeleteTask({ commit, state }, deleteTask) {
        // commit('HANDLE_DELETE_TASK', deleteTask)
        console.log("acction ", deleteTask)
        let newListTask = state.listTask = state.listTask.filter(item => item.id !== deleteTask.id);
        commit('CHANGE_TASKS', newListTask);
    }
}