import SearchService from '@/services/search-service';

export default {
  state: {
    searchRecipes: [],
    value: '',
  },

  getters: {
    value: (state) => state.value,
    allsearchRecipes: (state) => state.searchRecipes
  },

  mutations: {
    SET_SEARCH_RECIPES: (state, searchRecipes) => {
      state.searchRecipes = searchRecipes;
    },

    SET_VALUE: (state, value) => {
      state.value = value;
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
    }
  },
}

export const searchRecipes = {
  state,
  getters,
  actions,
  mutations,
};
