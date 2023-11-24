<template>
  <div class="search d-flex">
    <div class="search__wrapper d-flex">
      <div class="search__item d-flex align-items-center">
        <label class="search__input" v-show="searchInputState" for="">
          <input class="search__input-item" @input="search" type="text" @keyup.enter="showFullList" />
        </label>
        <img class="search__icon" @click="showSearchInput" src="@/assets/img/search.svg" alt="" />
      </div>

      <div class="recipes__searched-list d-flex flex-column"> !--- v-if="!searchRecipe" ---!
        <ul class="recipes__list d-flex align-items-center" v-for="recipe in meals" :key="recipe.id">
          <img class="recipes__items-image" :src="recipe.thumb" alt="">
          <li class="recipes__items">{{ recipe.meal }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from "lodash.debounce";
import SearchService from "@/services/search-service.js";
import UrlService from '@/services/UriService'

export default ({
  data() {
    return {
      searchInputState: false,
      query: '',
      meals: [],
    }
  },
  // async created() {
  //   const windowData = Object.fromEntries(new URL(window.location).searchParams.entries());
  //   console.log(windowData.search, ' from Search')
  //   if(windowData.search){
  //     this.query = windowData.search;
  //     this.meals = await SearchService.search(this.query);
  //     console.log(this.meals, ' from Search meals')
  //   }

  // },
  watch: {
    'query': function (val) {
    //  window.history.pushState(null, document.title, `${window.location.pathname}?search=${val}`)
    }
  },
  computed: {
    // searchedRecipe(){
    //   return this.$store.getters.allSearchRecipes;
    // }
  },
  methods: {
    showSearchInput() {
      this.searchInputState = !this.searchInputState;
    },

    // search: debounce(async function ({target}) {
    //   this.$store.dispatch('updateValue', target.value);
    //   await this.$store.dispatch('fetchAllSearchRecources');

    // }, 500),

    search: debounce(async function (e) {
      this.query = e.target.value;
      this.meals = await SearchService.search(this.query);
    }, 500),

    complete() {
      this.$store.dispatch('updateSearchedList');
      this.searchInputState = false;
      this.$emit()
      // this.$router.push({name: 'recipe-searched-list'});
    },

    showFullList() {
      window.history.pushState(null, document.title, `${window.location.pathname}?search=${this.query}`)
      this.$emit('list-of-meals', this.meals);
    }
  },
  async mounted() {
    //  if(!this.$store.getters.allSearchRecipes) await this.$store.dispatch('fetchAllSearchRecources');
    // await this.search();
  }
})
</script>

<style scoped>
.search {
  gap: 15px;
}

.search__wrapper {
  gap: 7px;
  position: relative;
}

.search__item {
  cursor: pointer;
  gap: 7px;
}

.search__input-item {
  width: 450px;
}

.search__icon {
  width: 30px;
}

.recipes__searched-list {
  position: absolute;
  transform: translateY(15%);
  width: 450px;
  height: 350px;
  overflow-y: scroll;
  gap: 15px;
  z-index: var(--for-search-list);
}

.recipe-img__wrapper {
  height: 238px;
}

.recipes__list {
  gap: 15px;
  cursor: pointer;
}

.recipes__items-image {
  width: 66px;
  height: 55px;
  object-fit: cover;
}

.recipes__items {
  font-size: 18px;
  color: var(--primary);
}</style>