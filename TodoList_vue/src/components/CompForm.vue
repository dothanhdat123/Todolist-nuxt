<template>
    <b-col cols="12" lg="6">
        <!-- ADD : START -->
        <form-add 
        />
        <!-- ADD :  END -->

        <form v-if="isShowForm" action="" method="POST" class="form-inline justify-content-between">
            <div class="form-group">
                <label class="sr-only" for="">label</label>
                <input v-model="taskname" type="text" class="form-control" placeholder="Task Name" />
            </div>
            <div class="form-group">
                <label class="sr-only" for="">label</label>
                <select v-model="level"  class="form-control" required="required">
                    <option value="0">Small</option>
                    <option value="1">Medium</option>
                    <option value="2">High</option>
                </select>
            </div>

            <button
                v-if="taskSelected === null"
                v-on:click="handleAddNew"
                type="button" class="btn btn-primary">Submit</button>
            <button
                v-else
                v-on:click="handleEditTask"
                type="button" class="btn btn-primary">Update</button>

            <button v-on:click="handleCancel" type="button" class="btn btn-secondary">Cancel</button>
        </form>
    </b-col>
</template>

<script>
import FormAdd from './FormAdd';
import uuidv4 from 'uuid/v4';

import {mapState ,mapActions} from 'vuex'

export default {
    name: 'comp-form',
    components: {
        FormAdd
    },
    props: {
        // isShowForm: { type: Boolean, default: false },
        taskSelected: { type: Object, default: null }
    },
    data() {
        return {
            taskname: '',
            level: 0
        }
    },
    watch: {
        taskSelected: function(newData, oldData) {
            if(newData !== null) {
                // Người dùng có click vào button edit
                this.taskname = newData.name;
                this.level = newData.level;
            }
            // console.log("beforeUpdate: ", this.taskSelected);
            console.log("watcher taskSelected", newData, oldData);
        }
    },
    beforeUpdate() {
        
    },
    computed:{
        ...mapState(['isShowForm'])
    },
    methods: {
        ...mapActions(['toggleForm','handleAddNewTask']),
        handleEditTask() {
            let objTaskEdit = {
                id: this.taskSelected.id,
                name: this.taskname,
                level: parseInt(this.level)
            }
            this.$emit('handleEditTaskById', objTaskEdit);
       
            this.handleResetData();
            // console.log("handleEditTask Form.vue", this.taskSelected);
        },
        handleAddNew() {
            // Kiểm tra dữ liệu hợp lệ????
               if(this.taskname.trim()){
                     let objTask = {
                     id: uuidv4(),
                     name: this.taskname.trim(),
                     level: parseInt(this.level)
                  }
            // this.$emit('handleAddNewTask', objTask)
                 this.$store.dispatch('handleAddNewTask',objTaskEdit);
                  this.handleCancel();
               }
               else{
                   alert("Vui long nhap task name");
               }
        },
        // handleToggleForm() {
        //     console.log("handleAddTask CompForm.vue");
        //     this.$emit('toggleForm');
        // },
        handleCancel() {
            // this.$emit('toggleForm');
                // this.toggleForm();
            this.$store.dispatch('toggleForm');
            this.handleResetData();
            // Reset Data
        },
        handleResetData() {
            this.taskname = '';
            this.level = 0;
        }
    }
}
</script>

<style>

</style>
