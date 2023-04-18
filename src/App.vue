<template>
  <HeaderComponent title="Rick & Morty" />
  <main>
    <div class="container d-flex justify-content-center p-4">
      <form class="row row-cols-lg-auto g-3 align-items-center" @submit.prevent="getCharacters">
        <div class="col-12">
          <label class="visually-hidden" for="charactername">Search name</label>
          <input type="text" class="form-control" id="charactername" placeholder="Search name"
            v-model.trim="store.search.name">
        </div>

        <div class="col-12">
          <label class="visually-hidden" for="searchStatus">Search status</label>
          <select class="form-select" id="searchStatus" v-model="store.search.status">
            <option selected value="">Choose...</option>
            <option :value="status" v-for="(status, index) in statusOptions" :key="index">{{ status }}</option>
          </select>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">Search</button>
        </div>

        <div class="col-12">
          <button type="reset" class="btn btn-primary">Reset</button>
        </div>
      </form>
    </div>

    <CharactersList />
    <div v-if="store.errormessage" class="alert alert-danger">
      {{ store.errormessage }}
    </div>
  </main>
</template>

<script>
import { store } from './data/store';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import CharactersList from './components/CharactersList.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    CharactersList
  },
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
    getCharacters() {
      store.errormessage = '';
      store.loading = true;
      const url = store.baseUrl + store.endpoint;
      let options = {}
      let params = {}
      for (let key in store.search) {
        if (store.search[key]) {
          params[key] = store.search[key]
        }
      }
      //console.log(params);
      if (Object.keys(params).length > 0) {
        options.params = params;
      }
      //console.log(options);
      axios.get(url, options).then((res) => {
        store.characterList = res.data.results;
        // setTimeout(() => {
        //   store.loading = false;
        // }, 3000)
        store.loading = false;
        //console.log(res.data.data);
      }).catch((error) => {
        // handle error
        //console.log(error);
        store.characterList.length = 0;
        store.loading = false;
        store.errormessage = error.message;
      });
    }
  },
  mounted() {
    store.endpoint = 'character';
    this.getCharacters();
  }

}
</script>

<style lang="scss" scoped></style>