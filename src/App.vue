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
</template>

<script>

  export default {
    components: {
     
    },
  }
</script>

<style>

</style>
