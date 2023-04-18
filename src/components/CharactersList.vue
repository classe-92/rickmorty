<template>
    <section class="container">
        <div class="row" v-if="store.characterList.length > 0">
            <CharacterCard v-for="(character, index) in store.characterList" :key="character.id" :character="character" />
        </div>
        <div v-if="store.error.show" class="alert alert-danger">{{ store.error.message }}</div>
    </section>
</template>

<script>
import { store } from '../data/store';
import CharacterCard from './CharacterCard.vue';
export default {
    name: 'CharactersList',
    components: {
        CharacterCard
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