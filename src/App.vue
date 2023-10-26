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
    <div class="recipe-img__wrapper" style="display: grid;">
      <img class="recipe-img" v-for="recipe in recipes" :src="recipe.thumbnail_url" alt="">
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
  height: 750px;
  overflow: hidden;
}
.recipe-img{
  width: 160px;
  height: 238px;
  object-fit: cover;
  border-radius: 10px;
}

.recipe-img__wrapper{
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 36px;
}
</style>
