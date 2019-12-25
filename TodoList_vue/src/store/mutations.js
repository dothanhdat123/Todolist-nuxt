export default {
    CHANGE_TASKS(state, newTasks) {
        console.log("acction ", newTasks);
        state.listTask = newTasks;
    },
    TOGGLE_FORM(state) {
        if (state.isShowForm) state.taskSelected = null;
        // console.log("TOGGLE_FORM muatation");
        state.isShowForm = !state.isShowForm
    },
    SEARCH_DATA(state, data) {
        // console.log("SEARCH_DATA muatation");
        state.strSearch = data;
    },
    CLEAR_DATA(state) {
        state.strSearch = '';
    },
    SORT_DATA(state, { orderBy, orderDir }) {
        state.orderBy = orderBy;
        state.orderDir = orderDir;
    },
    HANDLE_ADD_NEW_TASK(state, task) {
        // console.log('handleAddNewTask App.vue', task);
        state.listTask.push(task);
    },
    // HANDLE_DELETE_TASK(state, deleteTask) {
    //     state.listTask = state.listTask.filter(item => item.id !== deleteTask.id);
    // }
}