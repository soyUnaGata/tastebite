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
            id: null,
            meal: {}
        }
    },
    methods: {
        async getMealDetails() {
            this.meal = await MealService.search(this.id);
        }
    },
    watch: {
        '$route.params.id': function (val) {
            this.id = val;
        },
        id: async function () {
            await this.getMealDetails();
        }
    },
    mounted() {
        this.id = this.$route.params.id;
    }
}
</script>