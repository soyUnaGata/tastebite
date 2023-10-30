<template>
    <div class="container d-flex">
      <div class="header__inner d-flex justify-content-between align-items-center">
          <a class="logo" href="">
              <img class="logo-img" src="./assets/img/logo.svg" alt="logo">
          </a>

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
              <div class="search__input">
                <img src="./assets/img/search.svg" alt="">
                <label for="">
                  <input type="text">
                </label>
              </div>

              <li class="profile">
                  <a class="profile-link" href="">
                    
                  </a>
              </li>

            

              <div class="burger-menu__mobile">

              <div class="burger-menu__about">
        
              </div>
          </div>
          </div>

      </div>
  </div>

  <section class="main">
    <div class="headline">
      <h1> Recipe
        <p>Marketplace</p>
      </h1>
    </div>
    <div class="recipe-img__wrapper"> 
      <div class="background" v-for="(recipe, index) in recipes" :key="recipe.id">
        <img class="picture" :src="recipe.thumbnail_url" alt="logo">
      </div>
    </div>
    
  </section>
</template>

<script>
  import api from './services/api.js'
  export default {
    components: {
     
    },
    data(){
      return{
        apiKey: 'fbf234dd69a143dca2d87a54c359a1cb',
        recipes: [],
        currentSlide: 0,
        carouselInterval: null,
      }
    },
    methods: {
      // async loadRecipes(){
      //   const response = await RecipesService.getAll();
      //   // if(response.results){
      
      //   // }
      // },
    },
    async mounted(){
      // const response = await api.get('/complexSearch?apiKey=' + this.apiKey)
      //   .then(response => response.data)
      //   .then(recipes => recipes.map(async (r) => {
      //     r.images = await api.get('/complexSearch?apiKey=' + this.apiKey).then(response => response.data);
      //     return r;
      //   }));
      this.recipes = await api.get('https://tasty.p.rapidapi.com/recipes/list')
        .then(response => response.data.results)
      
      // if(response.results){
      //   response.results.forEach(x => this.recipes.push(x))
      // }
    },
    computed: {
      backgroundImageUrl() {
        const imageUrls = this.recipes
        .filter(recipe => recipe.thumbnail_url)
        .map(recipe => recipe.thumbnail_url);
      return imageUrls;
    },
    backgroundStyle() {
      return {
        backgroundImage: `url('${this.backgroundImageUrl}')`,
      };
    },
    }
  }
</script>

<style>
.logo {
  width: 100px;
}
.logo-img {
  width: 150px;
  height: 250px;
  object-fit: contain;
}

.main{
  display: flex;
  justify-content: space-between;
  height: 650px;
  overflow: hidden;
}
.recipe-img__wrapper {
  height: 238px; 
}
.picture {
  width: 160px;
  height: 238px;
  object-fit: cover;
  border-radius: 10px;
}
.background {
  background-repeat: repeat-y;
  background-position: center;
  background-size: contain;
  animation: scroll 30s linear infinite;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
@keyframes scroll {
  from {
    transform: translate(0);
  }
  to {
    transform: translateY(calc(100% - 1000vh));
  }
}



</style>
