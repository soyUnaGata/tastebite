<template>
  <RouterView/>
</template>

<script>
import { RouterView } from "vue-router";
import debounce from "lodash.debounce";



export default {
  // data() {
  //   return {
  //     recipes: [],
  //     imgCarousel: [],
  //     searchInputState: false,
  //     searchRecipe: "",
  //     recipesByName: [],
  //   };
  // },
  // computed: {
  //   imagesUrl() {
  //     return this.imgCarousel.map((m) => m.thumb);
  //   },
  //   searchedRecipe() {
  //     console.log(this.recipes);
  //     return this.recipes.filter((recipe) =>
  //       recipe.meal.toLowerCase().includes(this.searchRecipe.toLowerCase())
  //     );
  //   },
  // },
  // async mounted() {
  //   await this.searchAllRecipes();
  //   await this.recipesImages();
  // },
  // methods: {
  //   showSearchInput() {
  //     this.searchInputState = !this.searchInputState;
  //   },

  //   async searchAllRecipes() {
  //     this.recipes = await axios
  //       .get(
  //         "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
  //           this.searchRecipe
  //       )
  //       .then((response) => response.data)
  //       .then((response) => {
  //         if (!response.meals) return [];
  //         return response.meals.map((meal) => ({
  //           id: meal.idMeal,
  //           meal: meal.strMeal,
  //           drinkAlternate: meal.strDrinkAlternate,
  //           category: meal.strCategory,
  //           area: meal.strArea,
  //           instructions: meal.strInstructions,
  //           thumb: meal.strMealThumb,
  //           youtube: meal.strYoutube,
  //           ingredients: Object.keys(meal)
  //             .filter((p) => p.includes("Ingredient"))
  //             .map((p) => meal[p]),
  //           measures: Object.keys(meal)
  //             .filter((p) => p.includes("Measure"))
  //             .map((p) => meal[p]),
  //           source: meal.strSource,
  //           imageSource: meal.strImageSource,
  //         }));
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },

  //   async recipesImages() {
  //     this.imgCarousel = await axios
  //       .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  //       .then((response) => response.data)
  //       .then((response) => {
  //         if (!response.meals) return [];
  //         return response.meals.map((meal) => ({
  //           thumb: meal.strMealThumb,
  //         }));
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },

  //   search: debounce(async function (e) {
  //     this.searchRecipe = e.target.value;
  //     await this.searchAllRecipes();
  //   }, 500),

  //   getAllRecipesByName(){
  //     return this.recipesByName = JSON.parse(JSON.stringify(this.searchedRecipe));
  //   }
  // },
};
</script>

<style>



</style>
