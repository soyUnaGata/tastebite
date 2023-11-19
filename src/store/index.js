import { createStore } from 'vuex';
import searchRecipes from './search-recipes.js';

const store = createStore({
    searchRecipes,
});

export default store;