<template>
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
</template>

<script>
import PageHeader from '@/components/shared/PageHeader.vue';
import InfinitySliderCarousel from '@/components/InfinitySliderCarousel.vue';
import ImagesService from '@/services/images-service';
import SearchBar from '@/components/shared/SearchBar.vue';
import IngridientsService from '@/services/ingridients-service.js';
import api from "@/services/api";


export default ({
  components: {
    PageHeader,
    InfinitySliderCarousel,
    SearchBar,
  },
  data() {
    return {
      imagesUrl: [],
      ingridients: [],
      categories: [],
    }
  },
  computed: {},
  methods: {
    async loadImages() {
      const response = await ImagesService.getAllImages();
      this.imagesUrl = response.map((meal) => meal.thumb);
    },
    async getIngridients() {
      // this.ingridients = await IngridientsService.getAllIngridients();

      this.ingridients = await api
        .get("list.php?i=list")
        .then((response) => response.data)
        .then((response) => {
          if (!response.meals) return [];
          return response.meals.map((meal) => ({
            id: meal.idIngredient,
            description: meal.strDescription,
            ingridient: meal.strIngredient,
            ingridientImg: api + `ingredients/${this.ingridient}`,
          }));
        });
    },
  },
  async mounted() {
    await this.loadImages();
    await this.getIngridients();
  },
})
</script>

<style>
.container {
  max-width: 1240px;
  margin: 0 auto;
}

.main {
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