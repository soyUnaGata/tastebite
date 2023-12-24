<template>
    <div class="recipes__list">
        <div class="recipes__list-filterd container">
            <meal-item v-for="meal in meals" :key="meal.id" :meal="meal" />
        </div>
    </div>
</template>

<script>
import MealItem from '@/components/MealItem.vue';
import SearchService from "@/services/search-service.js";

export default {
    components: {
        MealItem
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

 @media (max-width: 1200px) {
     .recipes__list-filterd {
         grid-template-columns: 1fr 1fr 1fr;
     }
 }

 @media (max-width: 992px) {
     .recipes__list-filterd {
         grid-template-columns: 1fr 1fr 1fr;
     }
 }

 @media (max-width: 768px) {
     .recipes__list-filterd {
         grid-template-columns: 1fr 1fr;
     }

     .recipes__list {
         justify-content: center;
         display: flex;
         margin-top: 25px;
     }
 }

 @media (max-width: 576px) {
     .recipes__list-filterd {
         grid-template-columns: 1fr;
     }

     .recipes__list {
         justify-content: center;
         display: flex;
         margin-top: 25px;
     }
 }

 @media (min-width: 280px) and (max-width: 375px) {
     .recipes__list-filterd {
         grid-template-columns: 1fr;
     }
 }
</style>