<template>
    <div class="category_wrapper container m-top-50">
        <return-button @click="back" />
        <div class="category__meal-item">
            <div class="category__meal m-top-30" v-for="meal in meals">
                <a :href="`/meal/${meal.id}`" class="category__card d-flex flex-column">
                    <img class="category__img" :src="meal.thumb" :alt="meal.thumb">
                    <div class="category__about d-flex flex-column align-items-center">
                        <h3 class="category__category">{{ meal.meal }} </h3>
                    </div>
                </a>
            </div>
        </div>

    </div>
</template>

<script>
import ReturnButton from './shared/ReturnButton.vue';
import CategoryService from '@/services/category-service';

export default {
    components: {
        ReturnButton
    },
    data() {
        return {
            category: '',
            meals: [],
        }
    },
    methods: {
        async getListOfMeals() {
            this.meals = await CategoryService.getCategory(this.category);
        },

        back() {
            history.back();
        },
    },
    async mounted() {
        this.category = this.$route.params.category;
        await this.getListOfMeals();
    }
}
</script>

<style scoped>
.category__meal-item {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
}

.category__card {
    width: 300px;
    cursor: pointer;
    overflow: hidden;
}

.category__img {
    max-width: 100%;
    object-fit: cover;
    height: 300px;
    border-radius: 50%;
}

.category__about {
    gap: 10px;
    padding: 15px;
}

@media (max-width: 1200px) {
    .category__meal-item {
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 25px;
    }
}

@media (max-width: 992px) {
    .category__meal-item {
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 25px;
    }

    .category__card {
        width: 240px;
    }

    .category__img {
        height: 220px;
    }
}

@media (max-width: 768px) {

    .category_wrapper {
        padding: 0 15px;
    }

    .category__meal-item {
        grid-template-columns: 1fr 1fr;
        margin-top: 25px;
    }

    .category__card {
        width: 240px;
    }

    .category__img {
        height: 220px;
    }
}

@media (max-width: 576px) {
    .category_wrapper {
        padding: 0 10px;
    }

    .category__meal-item {
        grid-template-columns: 1fr;
        margin-top: 25px;
    }

    .category__card {
        width: 240px;
    }

    .category__img {
        height: 220px;
    }
}

@media (min-width: 280px) and (max-width: 375px) {
    .category_wrapper {
        padding: 0 10px;
    }

    .category__meal-item {
        grid-template-columns: 1fr;
        margin-top: 25px;
    }

    .category__card {
        width: 240px;
    }

    .category__img {
        height: 220px;
    }
}
</style>