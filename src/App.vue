<template>
    <div class="container d-flex">
      <div class="header__inner d-flex justify-content-between align-items-center">
          <a class="logo" href="">
              <img src="./assets/img/logo.svg" alt="logo">
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
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr;">
      <img v-for="recipe in recipes" :src="recipe.thumbnail_url" alt="" style="width: 200px;">

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

</style>
