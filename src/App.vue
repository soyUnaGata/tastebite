<template>
    <div class="container d-flex">
      <div class="header__inner d-flex justify-content-between align-items-center">
          <a class="logo" href="">
              <img class="logo-img" src="./assets/img/logo.svg" alt="logo">
          </a>

          <nav class="menu">
              <ul class="menu__list d-flex align-items-center">
                  <li class="menu__list-item">
                      <a class="menu__list-link" href="">Homepage</a>
                  </li>
                  <li class="menu__list-item">
                      <a class="menu__list-link" href="">Reciepe Page</a>
                  </li>
                  <li class="menu__list-item">
                      <a class="menu__list-link" href="">Pages</a>
                  </li>
                  <li class="menu__list-item">
                      <a class="menu__list-link" href="">Buy</a>
                  </li>
              </ul>
          </nav>

          <div class="search d-flex">
              <div class="search__wrapper">
                <label 
                class="search__input"
                v-show="searchInputState" 
                for="">
                  <input 
                  v-model="searchRecipe" 
                  type="text">
                </label>
                <ul class="recipes__list" v-for="recipe in searchedRecipe">
                  <li>{{ recipe.title }}</li>
                </ul>
                <img 
                class="search__icon"
                @click="showSearchInput"
                src="./assets/img/search.svg" 
                alt="">
              </div>

              <li class="profile">
                  <a class="profile-link" href="">
                    
                  </a>
              </li>

            

              <div class="burger-menu__mobile">

              <div class="burger-menu__about">
        
              </div>
          </div>
          </div>

      </div>
  </div>

  <section class="main">
    <div class="headline">
      <h1> Recipe
        <p>Marketplace</p>
      </h1>
    </div>
    <div class="recipe-img__wrapper"> 
      <image-carousel
      :recipesImgCarousel="recipesImgCarousel"
      />
    </div>
    
  </section>
</template>

<script>
  import {recipes, instance} from './services/api.js';
  import axios from "axios";
  import ImageCarousel from './components/ImageCarousel.vue';

  export default {
    components: {
     ImageCarousel
    },
    data(){
      return{
        apiKey: 'fbf234dd69a143dca2d87a54c359a1cb',
        recipes: [],
        recipesImgCarousel: [],
        currentSlide: 0,
        searchInputState: false,
        recipesAll: [],
        searchRecipe: '',
      }
    },
    methods: {
      showSearchInput(){
        this.searchInputState = true;
      }
    },
    async mounted(){
      this.recipes = await instance.get('https://tasty.p.rapidapi.com/recipes/list')
        .then(response => response.data.results)
    },
    computed: {
      imagesUrl() {
        const firstImgs = this.recipes
        .filter(recipe => recipe.thumbnail_url)
        .map(recipe => recipe.thumbnail_url);

        const additionlImgs = this.recipesAll
        .filter(meal => meal.thumb)
        .map(meal => meal.thumb);

        this.recipesImgCarousel = [...firstImgs, ...additionlImgs];

        return this.recipesImgCarousel;
      },
      async allRecipes(){
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + this.searchRecipe)
        .then(response => response.data)
        .then(response => {
            if(!response.meals) return [];  
            return this.recipesAll = response.meals
              .map(meal => (
                {
                  id: meal.idMeal,
                  meal: meal.strMeal,
                  drinkAlternate: meal.strDrinkAlternate,
                  category: meal.strCategory,
                  area: meal.strArea,
                  instructions: meal.strInstructions, 
                  thumb: meal.strMealThumb,
                  youtube: meal.strYoutube,
                  ingredients: Object.keys(meal).filter(p => p.includes('Ingredient')).map(p => meal[p]),
                  measures: Object.keys(meal).filter(p => p.includes('Measure')).map(p => meal[p]),
                  source: meal.strSource,
                  imageSource: meal.strImageSource
                } 
            )) 
          }
        )
        console.log(response)
      },
      searchedRecipe(){
        // return this.recipesAll.filter((recipe) => recipe.title.toLowerCase().includes(this.searchRecipe.toLowerCase()))
      }
    }
  }
</script>

<style>
.logo {
  width: 100px;
}
.logo-img {
  width: 150px;
  height: 250px;
  object-fit: contain;
}

.main{
  display: flex;
  justify-content: space-between;
  height: 650px;
  overflow: hidden;
}
.recipe-img__wrapper {
  height: 238px; 
}



</style>
