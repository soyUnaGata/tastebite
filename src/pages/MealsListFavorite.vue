<template>
    <div class="container">
        <nav class="m-top-50">
            <ul class="nav__about d-flex align-items-center">
                <li><return-button @click="back" /></li>
                <h3 class="headline">Favorites</h3>
            </ul>
        </nav>
        <div class="separator m-top-30"></div>

        <div class="main">

        </div>

    </div>
</template>

<script>
import FavoritesMeals from '@/services/favorites-meals.js';
import ReturnButton from '@/components/shared/ReturnButton.vue'

export default {
    components: {
        ReturnButton
    },
    data() {
        return {
            favorites: [],
        }
    },
    mounted() {
        this.$route.params;
        this.favorites = FavoritesMeals.getAll();
    },
    methods: {
        back() {
            history.back();
        }
    }
}
</script>

<style>
.nav__about {
    gap: 20px;
}

.separator {
    width: 100%;
    border: 1px solid var(--primary);
}
</style>