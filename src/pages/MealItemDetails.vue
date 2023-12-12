<template>
    <meal-details :meal="meal" />
</template>

<script>
import MealService from "@/services/meal-service";
import MealDetails from '@/components/MealDetails.vue'

export default {
    components: {
        MealDetails
    },
    data() {
        return {
            meal: {}
        }
    },
    async created() {
        await this.getMealDetails();
    },
    methods: {
        async getMealDetails() {
            let mealId = this.$route.params.id;
            this.meal = await MealService.search(mealId);
        }
    },
    mounted() {
        // location.href = this.$route.params.id;
    }
}
</script>