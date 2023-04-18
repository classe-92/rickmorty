<template>
  <HeaderComponent title="Rick & Morty" />
  <main>

    <SearchBar @searchChange="getCharacters" />
    <CharactersList />
    <div v-if="store.errormessage" class="alert alert-danger">
      {{ store.errormessage }}
    </div>
    {{ fullName }}
  </main>
</template>

<script>
import { store } from './data/store';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import SearchBar from './components/SearchBar.vue';
import CharactersList from './components/CharactersList.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    SearchBar,
    CharactersList
  },
  data() {
    return {
      store,
      name: 'Clelia',
      surname: 'Fradella'

    }
  },
  computed: {
    fullName() {
      return this.name + ' ' + this.surname;
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
        //store.characterList = res.data.results;
        // setTimeout(() => {
        //   store.loading = false;
        // }, 3000)

        //console.log(res.data.data);
      }).catch((error) => {
        // handle error
        //console.log(error);
        store.characterList.length = 0;

        store.errormessage = error.message;
      }).finally(() => {
        store.loading = false;
      });
    },

  },
  mounted() {
    //store.endpoint = 'character';
    this.getCharacters();
  }

}
</script>

<style lang="scss" scoped></style>