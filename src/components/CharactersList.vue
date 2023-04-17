<template>
    <section class="container">
        <div class="row">
            <CharacterCard v-for="(character, index) in store.characterList" :key="character.id" :character="character" />
        </div>
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