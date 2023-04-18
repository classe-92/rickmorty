<template>
    <div class="container d-flex justify-content-center p-4">
        <form class="row row-cols-lg-auto g-3 align-items-center" @submit.prevent="setSearch">
            <div class="col-12">
                <label class="visually-hidden" for="charactername">Search name</label>
                <input type="text" class="form-control" id="charactername" placeholder="Search name"
                    v-model.trim="store.search.name">
            </div>

            <div class="col-12">
                <label class="visually-hidden" for="searchStatus">Search status</label>
                <select class="form-select" id="searchStatus" v-model="store.search.status">
                    <option selected value="">Choose...</option>
                    <option :value="status" v-for="(status, index) in statusOptions" :key="index">{{
                        status }}</option>
                </select>
            </div>

            <div class="col-12">
                <button type="submit" class="btn btn-primary">Search</button>
            </div>

            <div class="col-12">
                <button type="reset" class="btn btn-primary" @click="resetSearch">Reset</button>
            </div>
        </form>
    </div>
</template>

<script>
import { store } from '../data/store';
import axios from 'axios';
export default {
    name: 'SearchBar',
    data() {
        return {
            store,
            statusOptions: [
                'alive',
                'dead',
                'unknown'
            ]
        }
    },
    methods: {
        setSearch() {
            this.$emit('searchChange');
        },
        resetSearch() {
            store.search.status = '';
            store.search.name = '';
            this.$emit('searchChange');

        }
    },
    // mounted() {
    //     axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then((res) => {
    //         console.log(res.data);
    //         this.statusOptions = res.data;
    //     })
    // }

}
</script>

<style lang="scss" scoped></style>