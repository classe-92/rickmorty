<template>
  <HeaderComponent />
</template>

<script>
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  data() {
    return {

    }
  },
  methods: {
    getCharacters() {
      axios.get('https://rickandmortyapi.com/api/character').then((res) => {
        console.log(res.data.results)
      });
    }
  },
  mounted() {
    this.getCharacters();
  }

}
</script>

<style lang="scss" scoped></style>