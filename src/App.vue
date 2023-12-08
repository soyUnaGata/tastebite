<template>
  <!-- <RouterView/> -->
  <div class="header__wrapper container d-flex g-10 align-items-center ">
    <page-header />
    <search-bar @list-of-meals="getListOfMeals"
    @show-full-recipe="getRecipe"/>
    <profile-section/>
  </div>


  <div class="main container">
    <!-- <div class="headline">
      <h1>
        Recipe
        <p>Marketplace</p>
      </h1>
    </div> -->
    <!-- <div class="image-carousel">
      <infinity-slider-carousel
        :images="imagesUrl"
        :direction="'down'"
        :viewed-count="5"
        :duration="1200"
      />
      <infinity-slider-carousel
        :images="imagesUrl"
        :direction="'top'"
        :duration="1000"
        :viewed-count="4"
      />
      <infinity-slider-carousel
        :images="imagesUrl"
        :direction="'down'"
        :duration="950"
        :viewed-count="4"
      />
    </div> -->
  </div>

  <meal-details v-if="details" :meal="meal" 
  :key="meal.id"/>
  <meals-list v-else :meals="meals" 
  @show-meal-recipe="getMealRecipe"/>
</template>

<script>
// import { RouterView } from "vue-router";
import PageHeader from '@/components/shared/PageHeader.vue';
import InfinitySliderCarousel from '@/components/InfinitySliderCarousel.vue';
import ImagesService from '@/services/images-service';
import SearchBar from '@/components/shared/SearchBar.vue';
import MealsList from '@/components/MealsList.vue';
import SearchService from "@/services/search-service.js";
import MealService from "@/services/meal-service";
import MealDetails from "./components/MealDetails.vue";
import ProfileSection from './components/shared/ProfileSection.vue';



export default {
  components: {
    PageHeader,
    InfinitySliderCarousel,
    SearchBar,
    MealsList,
    MealDetails,
    ProfileSection
},
  data() {
    return {
      details: false,
      meal: {},
      meals: [],
      imagesUrl: [],
      query: '',
      mealId:'',
    }
  },
  watch: {
    'meals': async function(){
      if(this.meals.length){
        this.details = false;
      }
    }
  },
  methods: {
    async loadImages() {
      const response = await ImagesService.getAllImages();
      this.imagesUrl = response.map((meal) => meal.thumb);
    },
    getListOfMeals(meals){
      this.meals = meals;
    },
    getMealRecipe(meal){
      window.history.pushState(null, document.title, `${window.location.pathname}?meal=${meal.id}`);
      this.meal = meal;
      this.details = true;
    },
    getRecipe(meal){
      window.history.pushState(null, document.title, `${window.location.pathname}?meal=${meal.id}`);
      this.meal = meal;
      this.details = true;
    },

    async render() {
      this.query = new URLSearchParams(location.search).get('search');

      if(this.query){
        this.meals = await SearchService.search(this.query);
      }
      else{
        this.details = true;
        this.mealId = new URLSearchParams(location.search).get('meal');
        this.meal = await MealService.search(this.mealId);
      }
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
