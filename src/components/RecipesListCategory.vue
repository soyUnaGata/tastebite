<template>
    <div class="recipes__list-filterd container">
        <div class="recipe__card d-flex flex-column" v-for="meal in recipesByName">
        <img class="recipe__img" :src="meal.thumb" alt="">
            <div class="recipe__about d-flex flex-column">
            <p class="recipe__category">{{ meal.category }},
            <span class="recipe__area">{{ meal.area }}</span>
            </p>
            <h3 class="recipe__headline">{{ meal.meal }}</h3>
            </div>
        </div>
  </div>
</template>

<script>

export default({

 
})
</script>

<style scoped>
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