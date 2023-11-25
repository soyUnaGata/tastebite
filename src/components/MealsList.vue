<template>
  <div class="header__wrapper">
    <!-- <page-header /> -->
    <!-- <search-bar/> -->
  </div>

  <div class="container recipes__list">
    <div class="recipes__list-filterd container">
      <div class="recipe__card d-flex flex-column" 
      v-for="meal in meals"
      @click="showRecipe(meal)"
      >
        <img class="recipe__img" :src="meal.thumb" alt="">
        <div class="recipe__about d-flex flex-column">
          <p class="recipe__category">{{ meal.category }},
            <span class="recipe__area">{{ meal.area }}</span>
          </p>
          <h3 class="recipe__headline">{{ meal.meal }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/shared/PageHeader.vue';
import SearchBar from '@/components/shared/SearchBar.vue';



export default ({
  props:{
    meals: {
      type: Array
    }
  },
  components: {
    PageHeader,
    SearchBar
  },
  // created(){
  //   const windowData = Object.fromEntries(new URL(window.location).searchParams.entries());
  //   if(windowData.search){
  //     console.log(windowData.search)
  //     console.log(this.$store.getters.uptadetRecipes)
  //     // this.$store.getters.uptadetRecipes = windowData.search;
  //   }
  // },
  watch:{
    '': function(val) {
      console.log(val)
      // window.history.pushState(null, document.title, `${window.location.pathname}?search=${val}`)
    }
  },
  computed: {
    searchedRecipe() {
      return this.$store.getters.uptadetRecipes;
    },
  },
  methods:{
    showRecipe(meal){
      this.$emit('show-meal-recipe', meal);
    }
  },
  async mounted(){
    // await this.SearchService();
  }
})
</script>

<style scoped>
.recipes__list {
  margin-top: 50px;
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
  /* height: 360px; */
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

.recipe__category {}

.recipe__area {}

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
}</style>