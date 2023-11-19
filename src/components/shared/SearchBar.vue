<template>
    <div class="search d-flex">
        <div class="search__wrapper d-flex">
            <div class="search__item d-flex align-items-center">
                <label class="search__input" v-show="searchInputState" for="">
                    <input class="search__input-item" @input="search" type="text" @keyup.enter="getAllRecipesByName" />
                </label>
                <img class="search__icon" @click="showSearchInput" src="/src/assets/img/search.svg" alt="" />
            </div>

            <div class="recipes__searched-list d-flex flex-column"> !--- v-if="!searchRecipe" ---!
                <ul class="recipes__list d-flex align-items-center" v-for="recipe in searchedRecipe" :key="recipe">
                    <img class="recipes__items-image" :src="recipe.thumb" alt="">
                    <li class="recipes__items">{{ recipe.meal }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

</script>