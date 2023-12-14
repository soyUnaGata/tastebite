<template>
    <div class="container">
        <nav class="m-top-50">
            <ul class="nav__about d-flex align-items-center">
                <li><return-button @click="back" /></li>
                <h3 class="headline">Favorites</h3>
            </ul>
        </nav>
        <div class="separator m-top-30"></div>

        <div class="general__favorites m-top-15">
            <p class="general__favorites-title"> Adedd:
                <span>
                    {{ favorites.length }}
                </span>
            </p>

            <p>
                <input type="checkbox" @input="isSelected">
            </p>
        </div>

        <div class="main__favorite  m-top-15">
            <div class="favorite__card" v-for="meal in favorites">
                <meal-item :meal="meal" />
                <div class="select__recipe"></div>
            </div>
        </div>

    </div>
</template>

<script>
import FavoritesMeals from '@/services/favorites-meals.js';
import ReturnButton from '@/components/shared/ReturnButton.vue';
import MealItem from '@/components/MealItem.vue';

export default {
    components: {
        ReturnButton,
        MealItem
    },
    data() {
        return {
            favorites: [],
            selected: false,
        }
    },
    mounted() {
        this.$route.params;
        this.favorites = FavoritesMeals.getAll();
    },
    methods: {
        back() {
            history.back();
        },
        isSelected() {
            this.selected = !this.selected;
            console.log(this.selected)
        }
    }
}
</script>

<style scoped>
.nav__about {
    gap: 20px;
}

.separator {
    width: 100%;
    border: 1px solid var(--primary);
}

.general__favorites-title>span {
    font-weight: 600;
}

.headline {
    font-size: 45px;
}

.favorite__card {
    position: relative;
}

.select__recipe {
    background-color: blueviolet;
    width: 200px;
    height: 200px;
    position: absolute;
    top: 0;
}

.main__favorite {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
}
</style>