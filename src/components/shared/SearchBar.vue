<template>
  <div class="search d-flex">
    <div class="search__wrapper d-flex">
      <div class="search__item d-flex align-items-center">
        <Transition name="slide-fade">
          <label class="search__input" v-if="searchInputState" for="">
            <input class="search__input-item" v-model="query" placeholder="Search recipe..." @input="search" type="text"
              @keyup.enter="showFullList" />
            <button class="clean__search" type="button" v-show="query.length" @click="cleanSearch">
              <svg class="clean__search-svg" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960"
                width="25">
                <path
                  d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </button>
          </label>
        </Transition>
        <img class="search__icon" @click="showSearchInput" src="@/assets/img/search.svg" alt="" />

      </div>

      <div class="recipes__searched-list scroll-list d-flex flex-column" v-if="meals.length !== 0" v-show="query.length">
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
  methods: {
    showSearchInput() {
      if (this.searchInputState == false) {
        this.query = '';
      }

      if (this.query.length > 0) {
        this.showFullList();
      }
      else {
        this.searchInputState = !this.searchInputState;
      }

    },

    search: debounce(async function (e) {
      this.meals = await SearchService.search(this.query);
      if (e.keyCode === 13) {
        this.query = '';
      }

      if (this.meals.length == 0) return;
    }, 500),

    showFullList() {
      if (this.meals.length == 0) return;
      this.$router.push({ name: 'search', params: { query: this.query } })
      this.searchInputState = false;
      this.query = '';
    },

    showFullRecipe(meal) {
      this.searchInputState = false;
      this.query = '';
      this.$emit('show-full-recipe', meal);
    },

    cleanSearch() {
      this.query = '';
    }
  },
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

.search__input {
  position: relative;
}

.clean__search {
  position: absolute;
  right: 0;
  border-radius: 50%;
  transform: translate(-50%, 34%);
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
}

.clean__search-svg {
  fill: var(--danger-color);
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
  z-index: var(--for-search-scroll);
  position: absolute;
  background: var(--white);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
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
}

@media (max-width: 992px) {

  .search__input-item,
  .recipes__searched-list {
    width: 250px;
  }
}

@media (max-width: 768px) {

  .search__input-item,
  .recipes__searched-list {
    width: 350px;
  }
}
</style>