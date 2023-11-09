<template>
    <div class="container d-flex">
      <div class="header__inner d-flex justify-content-between align-items-center">
          <a class="logo" href="">
              <!-- <img class="logo-img" src="./assets/img/logo.svg" alt="logo"> -->
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
                  @input="searchAllRecipes"
                  type="text">
                </label>
                <ul class="recipes__list" v-for="recipe in searchedRecipe">
                  <!-- <li>{{ recipe.meal }}</li> -->
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
    <div class="image-carousel">
      <testcarousel 
        :imgs="imagesUrl"
        :direction="'top'"
        :count="5"
        :duration="2000"/>
        <testcarousel :imgs="imagesUrlReverse"
        :count="5"
        :direction="'down'"
        :duration="1800"/>
        <testcarousel :imgs="imagesUrl"
        :count="5"
        :duration="1500"/>
    </div>
   
    
  </section>


</template>

<script>
  import axios from "axios";
  import Testcarousel from './components/testcarousel.vue';

  export default {
    components: {
    Testcarousel
},
    data(){
      return{
        apiKey: 'fbf234dd69a143dca2d87a54c359a1cb',
        recipes: [],
        imgCarousel: [],
        searchInputState: false,
        searchRecipe: '',
      }
    },
    methods: {
      showSearchInput(){
        this.searchInputState = true;
      },
      async searchAllRecipes(){
        this.recipes = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + this.searchRecipe)
        .then(response => response.data)
        .then(response => {
            if(!response.meals) return [];  
            return response.meals
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
        .catch(error => {
          console.log(error)
        })
      },

      async recipesImages(){
        this.imgCarousel = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(response => response.data)
        .then(response => {
          if(!response.meals) return [];  
            return response.meals
            .map(meal => ({
              thumb: meal.strMealThumb,
            }))
        })
        .catch(error => {
          console.log(error)
        })
      }
      
    },
    async mounted(){
      await this.searchAllRecipes();
      await this.recipesImages();
      
    },
    computed: {
      imagesUrl() {
        return this.imgCarousel.map(m => m.thumb);
      },

      imagesUrlReverse(){
        const reversedImgs = JSON.parse(JSON.stringify(this.imagesUrl));
        return reversedImgs.reverse();
      },
      
      searchedRecipe(){
        console.log()
        return this.recipes.filter((recipe) => recipe.meal.toLowerCase().includes(this.searchRecipe.toLowerCase()))
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

.image-carousel{
  display: flex;
}



</style>
