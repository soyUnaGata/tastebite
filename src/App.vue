<template>
  <div class="header__wrapper container d-flex g-10 align-items-center ">
    <page-header />
    <search-bar @list-of-meals="getListOfMeals" @show-full-recipe="getRecipe" />
    <profile-section />
  </div>

  <router-view></router-view>
</template>

<script>
import { RouterView } from "vue-router";
import PageHeader from '@/components/shared/PageHeader.vue';
import InfinitySliderCarousel from '@/components/InfinitySliderCarousel.vue';
import ImagesService from '@/services/images-service';
import SearchBar from '@/components/shared/SearchBar.vue';
import SearchService from "@/services/search-service.js";
import ProfileSection from './components/shared/ProfileSection.vue';



export default {
  components: {
    PageHeader,
    InfinitySliderCarousel,
    SearchBar,
    ProfileSection

  },
  data() {
    return {
      details: false,
      meal: {},
      meals: [],
      imagesUrl: [],
      query: '',
      mealId: '',
    }
  },
  watch: {
    'meals': async function () {
      if (this.meals.length) {
        this.details = false;
      }
    }
  },
  methods: {
    async loadImages() {
      const response = await ImagesService.getAllImages();
      this.imagesUrl = response.map((meal) => meal.thumb);
    },
    getListOfMeals(meals) {
      this.meals = meals;
    },
    getMealRecipe(meal) {
      window.history.pushState(null, document.title, `${window.location.pathname}?meal=${meal.id}`);
      this.meal = meal;
      this.details = true;
    },
    getRecipe(meal) {
      window.history.pushState(null, document.title, `${window.location.pathname}?meal=${meal.id}`);
      this.meal = meal;
      this.details = true;
    },

    async render() {
      // this.query = new URLSearchParams(location.search).get('search');
      this.query = this.$route.params.query;

      if (this.query) {
        this.meals = await SearchService.search(this.query);
      }
      else {
        this.details = true;
        this.mealId = new URLSearchParams(location.search).get('meal');
        // this.meal = await MealService.search(this.mealId);
      }
    },

    showFavoriteMeals() {
      window.history.pushState(null, document.title, `${window.location.pathname}?favorites`);
      this.isProfile = true;
    }
  },
  async mounted() {
    await this.loadImages();
    window.addEventListener('popstate', this.render);
  },
  unmounted() {
    window.removeEventListener('popstate', this.render);
  },
  async created() {
    await this.render();
  },
};
</script>

<style>
.header__wrapper {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: var(--white);
  z-index: var(--for-header);
}
</style>
