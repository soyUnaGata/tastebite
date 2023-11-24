<template>
  <!-- <RouterView/> -->
  <div class="header__wrapper container d-flex g-10">
    <page-header />
    <search-bar @list-of-meals="getListOfMeals"/>
  </div>


  <div class="main container">
    <div class="headline">
      <h1>
        Recipe
        <p>Marketplace</p>
      </h1>
    </div>
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

  <details v-if="details" :meal="meal" />
  <meals-list v-else :meals="meals" />
</template>

<script>
// import { RouterView } from "vue-router";
import debounce from "lodash.debounce";
import PageHeader from '@/components/shared/PageHeader.vue';
import InfinitySliderCarousel from '@/components/InfinitySliderCarousel.vue';
import ImagesService from '@/services/images-service';
import SearchBar from '@/components/shared/SearchBar.vue';
import MealsList from '@/components/MealsList.vue';
import SearchService from "@/services/search-service.js";



export default {
  components: {
    PageHeader,
    InfinitySliderCarousel,
    SearchBar,
    MealsList
  },
  data() {
    return {
      detailed: false,
      meal: {},
      meals: [],
      imagesUrl: [],
      query: '',
    }
  },
  watch:{
    // 'query': function(query) {
    //   console.log(query, ' from App')
    //   window.history.pushState(null, document.title, `${window.location.pathname}?search=${query}`)
    // }
  },
  // created() {
  //   if(location.href.includes('details')) {
  //     this.detailed = true
  //     // this.meal = await fetch('api/details');
  //   }
  //   else{
  //     // const windowData = Object.fromEntries(new URL(window.location).searchParams.entries());
  //     // this.detailed = false;
  //     // console.log(windowData.search)
  //     // this.meals = windowData.search;
  //   }
  // },
  async created() {
    this.query = new URLSearchParams(location.search).get('search');

    if(this.query){
      this.meals = await SearchService.search(this.query);
    }
  },
  // computed: {
  // },
  async mounted() {
    await this.loadImages();
    
  },
  methods: {
    async loadImages() {
      const response = await ImagesService.getAllImages();
      this.imagesUrl = response.map((meal) => meal.thumb);
    },
    getListOfMeals(meals){
      this.meals = meals;
    },
    // getQuery(query){
    //   this.query = query;
    // }
    //   getAllRecipesByName(){
    //     return this.recipesByName = JSON.parse(JSON.stringify(this.searchedRecipe));
    //   }
  },
};
</script>

<style></style>
