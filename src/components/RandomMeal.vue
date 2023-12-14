<template>
    <div class="random__meal-main">
        <div class="random__meal-details d-flex" v-for="meal in randomMeal">
            <div class="random__meal">
                <img class="random__meal-img" :src="meal.thumb" :alt="meal.meal">
            </div>

            <div class="random__meal-description d-flex flex-column justify-content-center align-items-center w-100">
                <h2 class="random__meal-header">{{ meal.meal }}</h2>
                <limited-text :text="meal.instructions" :limit="300" />
            </div>
        </div>
    </div>
</template>

<script>
import LimitedText from "@/components/shared/LimitedText.vue";

export default ({
    props: {
        randomMeal: {
            type: Object
        }
    },
    components: {
        LimitedText
    },
    mounted() {
        this.randomMeal;
    }
})
</script>

<style scoped>
.random__meal-main {
    background-color: var(--secondary-light);
}

.random__meal-details {
    padding: 20px;
    gap: 50px;
}

.random__meal-img {
    border-radius: 50%;
    height: 500px;
}

.random__meal-header {
    font-size: 32px;
}
</style>