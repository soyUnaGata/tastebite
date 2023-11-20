import { createStore } from 'vuex';
import searchRecipes from './search-recipes.js';

const store = createStore({
    modules: {
        searchRecipes
    },
  });

export default store;