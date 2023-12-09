<template>
  <div class="search d-flex">
    <div class="search__wrapper d-flex">
      <div class="search__item d-flex align-items-center">
        <Transition name="slide-fade">
          <label class="search__input" v-if="searchInputState" for="">
              <input class="search__input-item" 
              placeholder="Search recipe..."
              @input="search" type="text" 
              @keyup.enter="showFullList" />
          </label>
        </Transition>
          <img class="search__icon" @click="showSearchInput" src="@/assets/img/search.svg" alt="" />
     
      </div>

      <div class="recipes__searched-list scroll-list d-flex flex-column" v-show="query.length">
        <ul class="recipes__list d-flex align-items-center" v-for="recipe in meals" :key="recipe.id"
          @click="showFullRecipe(recipe)">
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

export default ({
  data() {
    return {
      searchInputState: false,
      query: '',
      meals: [],
    }
  },
  watch: {
    // 'query': function () {
    //   if (!this.searchInputState){
    //     this.query = '';
    //     console.log(this.query)
    //   }
    // console.log(this.query)
    // }
  },
  computed: {
  },
  methods: {
    showSearchInput() {
      this.searchInputState = !this.searchInputState;
      if(this.searchInputState == false){
        this.query = '';
      }
    },

    search: debounce(async function (e) {
      this.query = e.target.value;
      this.meals = await SearchService.search(this.query);
      if (e.keyCode === 13) {
        this.query = ''
      }
    }, 500),

    showFullList() {
      window.history.pushState(null, document.title, `${window.location.pathname}?search=${this.query}`);
      this.$emit('list-of-meals', this.meals);
      this.searchInputState = false;
      this.query = '';
    },

    showFullRecipe(meal) {
      this.searchInputState = false;
      this.query = '';
      this.$emit('show-full-recipe', meal);
    }
  },
  async mounted() {

  }
})
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.search {
  gap: 15px;
}
.search__input-item {
  height: 45px;
  padding: 6px 10px;
  background-color: transparent;
  border: 1px solid var(--secondary);
  border-radius: 10px;
  transition: 1s cubic-bezier(0, 0, 1, 1) 500ms;
}

input[type="text"].search__input-item {
  outline: none;
  color: var(--headlines);
  font-size: 16px;
}

input[type="text"].search__input-item:-webkit-autofil {
  color: var(--headlines);
  -webkit-text-fill-color: white;
}

input[type="text"].search__input-item::placeholder {
  color: var(--secondary);
  font-size: 15px;
  font-weight: 200;
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
  width: 350px;
}

.search__icon {
  width: 30px;
}

.recipes__searched-list {
  position: absolute;
  transform: translateY(15%);
  width: 350px;
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
  color: var(--headlines);
}

.scroll-list {
  overflow: hidden;
  overflow-y: scroll;
  z-index: 89;
  position: absolute;
  /* background: var(--background-elements); */
  background: var(--white);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
  /* backdrop-filter: blur(3.7px); */
  /* -webkit-backdrop-filter: blur(3.7px); */
  border: 1px solid rgba(255, 100, 47, 0.67);
  padding-left: 7px;
  padding-top: 10px;
}

.scroll-list::-webkit-scrollbar {
  height: 10px;
  width: 8px;
}

.scroll-list::-webkit-scrollbar-track {
  background-color: transparent;
}

.scroll-list::-webkit-scrollbar-thumb {
  background-color: var(--secondary-light);
  height: 38px;
  border-radius: 10px;
}</style>