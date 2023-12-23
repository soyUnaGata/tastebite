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
    // data() {
    //     return {
    //         meal: {}
    //     }
    // },
    // async created() {
    //     await this.getMealDetails();
    // },
    // methods: {
    //     async getMealDetails() {
    //         let mealId = this.$route.params.id;
    //         this.meal = await MealService.search(mealId);
    //     }
    // },
    // async mounted() {
    //     await this.getMealDetails();
    //     console.log('was render')
    // }

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