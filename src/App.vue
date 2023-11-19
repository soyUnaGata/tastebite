<template>
  <RouterView/>
</template>

<script>
import { RouterView } from "vue-router";
import debounce from "lodash.debounce";



export default {
  data() {
    return {
      recipes: [],
      imgCarousel: [],
      searchInputState: false,
      searchRecipe: "",
      recipesByName: [],
    };
  },
  computed: {
    imagesUrl() {
      return this.imgCarousel.map((m) => m.thumb);
    },
    searchedRecipe() {
      console.log(this.recipes);
      return this.recipes.filter((recipe) =>
        recipe.meal.toLowerCase().includes(this.searchRecipe.toLowerCase())
      );
    },
  },
  async mounted() {
    await this.searchAllRecipes();
    await this.recipesImages();
  },
  methods: {
    showSearchInput() {
      this.searchInputState = !this.searchInputState;
    },

    async searchAllRecipes() {
      this.recipes = await axios
        .get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
            this.searchRecipe
        )
        .then((response) => response.data)
        .then((response) => {
          if (!response.meals) return [];
          return response.meals.map((meal) => ({
            id: meal.idMeal,
            meal: meal.strMeal,
            drinkAlternate: meal.strDrinkAlternate,
            category: meal.strCategory,
            area: meal.strArea,
            instructions: meal.strInstructions,
            thumb: meal.strMealThumb,
            youtube: meal.strYoutube,
            ingredients: Object.keys(meal)
              .filter((p) => p.includes("Ingredient"))
              .map((p) => meal[p]),
            measures: Object.keys(meal)
              .filter((p) => p.includes("Measure"))
              .map((p) => meal[p]),
            source: meal.strSource,
            imageSource: meal.strImageSource,
          }));
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async recipesImages() {
      this.imgCarousel = await axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        .then((response) => response.data)
        .then((response) => {
          if (!response.meals) return [];
          return response.meals.map((meal) => ({
            thumb: meal.strMealThumb,
          }));
        })
        .catch((error) => {
          console.log(error);
        });
    },

    search: debounce(async function (e) {
      this.searchRecipe = e.target.value;
      await this.searchAllRecipes();
    }, 500),

    getAllRecipesByName(){
      return this.recipesByName = JSON.parse(JSON.stringify(this.searchedRecipe));
    }
  },
};
</script>

<style>
.container {
  max-width: 1240px;
  margin: 0 auto;
}

.header__inner {
  padding: 30px 0px;
  width: 100%;
}

.menu__list-link {
  font-size: 18px;
  color: var(--primary);
  font-weight: 600;
}

.menu__list {
  gap: 30px;
}

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

.search__input-item{
  width: 450px;
}

.search__icon,.account__icon {
  width: 30px;
}

.main {
  display: flex;
  justify-content: space-between;
  height: 650px;
  overflow: hidden;
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
}
.image-carousel {
  display: flex;
  gap: 35px;
}

.recipes__list-filterd {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
}

.recipe__card {
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  align-self: start;
  height: 360px;
  width: 300px;
  cursor: pointer;
}

.recipe__img {
  max-width: 100%;
  object-fit: cover;
  height: 260px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
.recipe__about {
  gap: 10px;
  padding: 15px;
}
.recipe__category {
}
.recipe__area {
}
.recipe__headline {
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
