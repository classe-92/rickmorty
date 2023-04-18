<template>
    <section class="container">
        <div class="row" v-if="!store.loading">
            <CharacterCard v-for="(character, index) in store.characterList" :key="character.id" :character="character" />
        </div>
        <ApiLoader v-else />
    </section>
</template>

<script>
import { store } from '../data/store';
import CharacterCard from './CharacterCard.vue';
import ApiLoader from './ApiLoader.vue';
export default {
    name: 'CharactersList',
    components: {
        CharacterCard,
        ApiLoader
    },
    data() {
        return {
            store
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped></style>