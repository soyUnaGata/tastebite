<template>
    <page-header/>

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
  <recipes-list-category/>
</template>

<script>
import PageHeader from '@/components/shared/PageHeader.vue';
import InfinitySliderCarousel from '@/components/InfinitySliderCarousel.vue';
import RecipesListCategory from '@/components/RecipesListCategory.vue'

export default({
    components: {
        PageHeader,
        InfinitySliderCarousel,
        RecipesListCategory
    }
})
</script>

<style scoped>
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