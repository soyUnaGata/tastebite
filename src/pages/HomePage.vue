<template>
  <div class="main container">
    <div class="main__section">
      <div class="headline d-flex flex-column justify-content-center g-20">
        <div class="headline__items">
          <h1 class="headline__title">Recipe</h1>
          <p class="headline__subtitle">Marketplace</p>
        </div>

        <p class="headline__items-subtitle">
          Find amazing recipes and support your favorite culinary creators.
        </p>
      </div>
      <div class="image-carousel">
        <infinity-slider-carousel :images="imagesUrl" :direction="'down'" :viewed-count="5" :duration="1200" />
        <infinity-slider-carousel :images="imagesUrl" :direction="'top'" :duration="1000" :viewed-count="4" />
        <infinity-slider-carousel :images="imagesUrl" :direction="'down'" :duration="950" :viewed-count="4" />
      </div>
    </div>

    <div class="meal__day m-top-50 ">
      <random-meal :random-meal="randomMeal" @change-meal="getRandomMeal" />
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/shared/PageHeader.vue';
import InfinitySliderCarousel from '@/components/InfinitySliderCarousel.vue';
import SearchBar from '@/components/shared/SearchBar.vue';
import RandomMeal from '@/components/RandomMeal.vue';
import ImagesService from '@/services/images-service';
import RandomService from '@/services/random-service';
import IngridientsService from '@/services/ingridients-service.js';


export default ({
  components: {
    PageHeader,
    InfinitySliderCarousel,
    SearchBar,
    RandomMeal
  },
  data() {
    return {
      imagesUrl: [],
      ingridients: [],
      categories: [],
      randomMeal: [],
    }
  },
  computed: {},
  methods: {
    async loadImages() {
      const response = await ImagesService.getAllImages();
      this.imagesUrl = response.map((meal) => meal.thumb);
    },

    async getRandomMeal() {
      this.randomMeal = await RandomService.getRandomMeal();
    },
    async getIngridients() {
      // this.ingridients = await IngridientsService.getAllIngridients();

      // this.ingridients = await api
      //   .get("list.php?i=list")
      //   .then((response) => response.data)
      //   .then((response) => {
      //     if (!response.meals) return [];
      //     return response.meals.map((meal) => ({
      //       id: meal.idIngredient,
      //       description: meal.strDescription,
      //       ingridient: meal.strIngredient,
      //       ingridientImg: api + `ingredients/${this.ingridient}`,
      //     }));
      //   });
    },
  },
  async mounted() {
    await this.loadImages();
    await this.getRandomMeal();
  },
})
</script>

<style>
.container {
  max-width: 1240px;
  margin: 0 auto;
}

.main__section {
  display: flex;
  justify-content: space-between;
  height: 650px;
}

.image-carousel {
  display: flex;
  gap: 35px;
  overflow: hidden;
}

.headline__title,
.headline__subtitle {
  font-size: 50px;
}

.headline__title {
  color: var(--headlines);
}

.headline__subtitle {
  color: var(--secondary);
  font-weight: 600;
}

.headline__items-subtitle {
  font-size: 20px;
  font-weight: 500;
}
</style>