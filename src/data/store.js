import { reactive } from 'vue';

export const store = reactive({
    characterList: [],
    baseUrl: 'https://rickandmortyapi.com/api/',//'https://db.ygoprodeck.com/api/v7/cardinfo.php',//'https://rickandmortyapi.com/api/',
    endpoint: '',//'?num=50&offset=0'
    error: {
        show: false,
        message: ''
    },
    search: {
        status: '',
        name: ''
    }
})