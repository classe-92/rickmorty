<template>
  <HeaderComponent title="Rick & Morty" />
  <main>
    <CharactersList />

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
      store
    }
  },
  methods: {
    getCharacters() {
      const url = store.baseUrl + store.endpoint;
      axios.get(url).then((res) => {
        store.characterList = res.data.results;
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