

<template>
    <div class="recipes__list">
        <div class="recipes__list-filterd container">
            <MealsList :query="query" v-for="meal in meals" :key="meal.id" :mealImg="meal.thumb" :category="meal.category"
                :area="meal.area" :meal="meal.meal" />
        </div>
    </div>
</template>

<script>
import MealsList from '@/components/MealsList.vue';
import SearchService from "@/services/search-service.js";

export default {
    components: {
        MealsList
    },
    data() {
        return {
            query: '',
            meals: [],
        }
    },
    methods: {
        async getListOfMeals() {
            this.meals = await SearchService.search(this.query);
        }
    },
    watch: {
        '$route.params.query': function (val) {
            console.log(val)
            this.query = val;
        },
        query: async function () {
            await this.getListOfMeals();
        }
    },
    mounted() {
        this.query = this.$route.params.query;
    }
}
</script>

<style scoped> .recipes__list {
     margin-top: 50px;
 }

 .recipes__list-filterd {
     display: grid;
     grid-template-columns: 1fr 1fr 1fr 1fr;
     grid-gap: 30px;
 }
</style>