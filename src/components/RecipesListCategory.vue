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

<style></style>