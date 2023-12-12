<template>
  <a :href="`/meal/${meal.id}`" class="recipe__card d-flex flex-column">
    <img class="recipe__img" :src="meal.thumb" alt="">
    <div class="recipe__about d-flex flex-column">
      <p class="recipe__category">{{ meal.category }},
        <span class="recipe__area">{{ meal.area }}</span>
      </p>
      <h3 class="recipe__headline">{{ meal.meal }}</h3>
    </div>
  </a>
</template>

<script>

export default ({
  props: {
    meal: {
      type: Object
    },
  },
})
</script>

<style scoped>
.recipe__card {
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  align-self: start;
  width: 300px;
  cursor: pointer;
  overflow: hidden;
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

.recipe__headline {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.recipe__headline:hover {
  white-space: normal;
  overflow: visible;
  text-overflow: initial;
  padding-bottom: 10px;
}
</style>