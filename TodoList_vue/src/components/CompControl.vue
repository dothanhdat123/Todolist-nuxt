<template>
    <div class="col-12 col-lg-6">
        <div class="row">
            <!-- SORT : START -->
            <control-sort 
            />
            <!-- SORT : END -->

            <!-- SEARCH : START -->
            <control-search  />
            <!-- SEARCH : END -->
        </div>
    </div>
</template>

<script>
import ControlSort from './ControlSort';
import ControlSearch from './ControlSearch';

export default {
    name: 'comp-control',
    components: {
        ControlSort,
        ControlSearch
    },
    // props: {
    //     orderBy: { type: String, default: 'name' },
    //     orderDir: { type: String, default: 'asc' },
    // },
    data() {
        return {

        }
    },
    methods: {
        handleSearch(data) {
            // console.log('handleSearch CompControl.vue: ', data);
            // this.$emit('handleSearch', data);
        },
        handleSort(data) {
            // console.log('handleSort CompControl.vue: ', data);
            // this.$emit('handleSort', data);
        }
    }
}
</script>

<style>

</style>
