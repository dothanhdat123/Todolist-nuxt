<template>
    <div class="form-group add-task">
        <button 
            v-if="!isShowForm"
            v-on:click="toggleForm"
            type="button" class="btn btn-info btn-block">Add Task</button>
        <button 
            v-else
            v-on:click="toggleForm"
            type="button" class="btn btn-primary btn-block">Close Form</button>
    </div>
</template>

<script>
import { mapState,mapActions} from 'vuex'
export default {
    name: 'form-add',
    data() {
        return {

        }
    },
    // props: {
    //     isShowForm: { type: Boolean, default: false }
    // },
    methods: {
        ...mapActions(['toggleForm']),
        //cach 1:
        // onClickAddTask() {
        //     console.log("onClickAddTask FormAdd.vue");
        //     this.toggleForm();
        // }
    },
    computed:{
        ...mapState(['isShowForm'])
    }
}
</script>

<style>

</style>
