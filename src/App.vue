<template>
  <div class="container d-flex">
    <div
      class="header__inner d-flex justify-content-between align-items-center"
    >
      <logo-company/>

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
        <div class="search__wrapper d-flex">
         <div class="search__item d-flex align-items-center">
            <label class="search__input" v-show="searchInputState" for="">
              <input @input="search" type="text" />
            </label>
            <img
              class="search__icon"
              @click="showSearchInput"
              src="./assets/img/search.svg"
              alt=""
            />
         </div>
          <ul v-if="searchRecipe"
            class="recipes__list"
            v-for="recipe in searchedRecipe"
            :key="recipe"
          >
            <li>
              {{ recipe.meal }}
            </li>
          </ul>
        </div>

        <li class="profile">
          <a class="profile-link" href="">
            <img class="account__icon" src="./assets/img/account.svg" alt="" />
          </a>
        </li>

        <div class="burger-menu__mobile d-none">
          <div class="burger-menu__about"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="main">
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
</template>

<script>
import axios from "axios";
import debounce from "lodash.debounce";
import LogoCompany from "./components/shared/LogoCompany.vue";
import InfinitySliderCarousel from "./components/InfinitySliderCarousel.vue";

export default {
  components: {
    LogoCompany,
    InfinitySliderCarousel,
  },
  data() {
    return {
      recipes: [],
      imgCarousel: [],
      searchInputState: false,
      searchRecipe: "",
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
      this.searchInputState = true;
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
  },
};
</script>

<style>
.header__inner {
  padding: 30px 25px;
  width: 100%;
}

.menu__list {
  gap: 25px;
}

.search {
  gap: 15px;
}

.search__wrapper {
  gap: 7px;
}

.search__item {
  cursor: pointer;
  gap: 7px;
}

.main {
  display: flex;
  justify-content: space-between;
  height: 650px;
  overflow: hidden;
}
.recipe-img__wrapper {
  height: 238px;
}

.image-carousel {
  display: flex;
}
</style>
