import SearchService from '@/services/search-service';

export default {
  state: {
    searchRecipes: [],
    updatedsearchRecipes: [],
    value: '',
  },

  getters: {
    value: (state) => state.value,
    allSearchRecipes: (state) => state.searchRecipes,
    uptadetRecipes: (state) => state.updatedsearchRecipes,
  },

  mutations: {
    SET_SEARCH_RECIPES: (state, searchRecipes) => {
      state.searchRecipes = searchRecipes;
    },

    SET_VALUE: (state, value) => {
      state.value = value;
    },

    SET_NEW_RECIPE_LIST: (state, searchRecipes) => {
      state.updatedsearchRecipes = Object.assign([], searchRecipes);
    }
  },

  actions: {
    async fetchAllSearchRecources({state, commit}){
      if(!state.value){
        commit('SET_SEARCH_RECIPES', [])
        return;
      }

      const searchRecipes = await SearchService.search(state.value);
      commit('SET_SEARCH_RECIPES', searchRecipes);
    },

    updateValue({commit}, value){
      commit('SET_VALUE', value);
    },

    updateSearchedList({commit, state}){
      if(state.searchRecipes.length){
        commit('SET_NEW_RECIPE_LIST', state.searchRecipes)
      }
    }
  },
}

