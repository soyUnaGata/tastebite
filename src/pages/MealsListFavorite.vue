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
        </div>

        <div class="main__favorite  m-top-15">
            <div class="favorite__card" v-for="meal in favorites">
                <div class="select__recipe">
                    <meal-item :meal="meal" />
                    <button class="change__recipe-state" type="button" @click="deleteFavorite(meal)">
                        <svg class="change__recipe-delete" xmlns="http://www.w3.org/2000/svg" height="24"
                            viewBox="0 -960 960 960" width="24">
                            <path
                                d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                        </svg>
                    </button>
                </div>
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

        deleteFavorite(value) {
            FavoritesMeals.remove(value);
            this.favorites = FavoritesMeals.getAll();
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

.select__recipe {
    position: relative;
}

.change__recipe-state {
    position: absolute;
    bottom: 13px;
    right: 12px;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
}

.main__favorite {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
}

.change__recipe-delete {
    fill: var(--danger-color);
}

@media (max-width: 1200px) {
    .main__favorite {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media (max-width: 992px) {
    .main__favorite {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media (max-width: 768px) {
    .main__favorite {
        grid-template-columns: 1fr 1fr;
    }

    .favorite__card {
        display: flex;
        justify-content: center;
    }
}

@media (max-width: 576px) {
    .main__favorite {
        grid-template-columns: 1fr;
    }

    .favorite__card {
        display: flex;
        justify-content: center;
    }

    .general__favorites {
        padding-left: 15px;
    }
}

@media (min-width: 280px) and (max-width: 375px) {
    .main__favorite {
        grid-template-columns: 1fr;
    }

    .change__recipe-state {
        right: 32px;
    }

    .favorite__card {
        display: inline-block;
    }

}

@media (max-width: 280px) {
    .change__recipe-state {
        right: 0px;
    }
}
</style>