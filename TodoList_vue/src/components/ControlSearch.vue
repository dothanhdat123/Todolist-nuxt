<template>
    <div class="col-12">
        <div class="input-group">
            <input 
                v-bind:value="strSearch"
                v-on:input="handleSearch"
                type="text" class="form-control" placeholder="Search for..." />
            <span class="input-group-append">
                <button 
                    v-on:click="handleClear"
                    class="btn btn-info" type="button">Clear!</button>
            </span>
        </div>
    </div>
</template>

<script>
// v-model => v-bind -> v-on:input
import { mapState, mapActions} from 'vuex'
export default {
    name: 'control-search',
    // props: {
    //     strSearch: { type: String, default: '' }
    // },
    data() {
        return { }
    },
    computed:{
        ...mapState(['strSearch']),
    },
    methods: {
         ...mapActions(['searchData','clearData']),
        handleClear() {
            // Thay đổi giá trị strSearch về ''
            this.$store.dispatch('clearData', '');
        },
        handleSearch(e) {        
                     console.log('handleSearch Search.vue',e.target.value);
            // var data = e.target.value;
            // // console.log(e.target);
   
            // this.$emit('handleSearch', e.target.value);
            this.$store.dispatch('searchData',e.target.value);
        }
    }
}
</script>

<style>

</style>
