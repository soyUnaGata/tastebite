import { createStore } from 'vuex';
import { searchRecipes } from './search-recipes';

const store = createStore({
    modules: {
        searchRecipes,
    },
});

export default store;