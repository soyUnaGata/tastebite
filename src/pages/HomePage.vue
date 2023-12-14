<template>
  <div class="main container">
    <div class="main__section">
      <div class="headline">
        <h1>
          Recipe
          <p>Marketplace</p>
        </h1>
      </div>
      <!-- <div class="image-carousel">
        <infinity-slider-carousel :images="imagesUrl" :direction="'down'" :viewed-count="5" :duration="1200" />
        <infinity-slider-carousel :images="imagesUrl" :direction="'top'" :duration="1000" :viewed-count="4" />
        <infinity-slider-carousel :images="imagesUrl" :direction="'down'" :duration="950" :viewed-count="4" />
      </div> -->
    </div>

    <div class="meal__day">
      <random-meal :random-meal="randomMeal" />
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
  overflow: hidden;
}

.image-carousel {
  display: flex;
  gap: 35px;
}
</style>