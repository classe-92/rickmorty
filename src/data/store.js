import { reactive } from 'vue';

export const store = reactive({
    characterList: [],
    baseUrl: 'https://rickandmortyapi.com/api/',
    endpoint: ''
})