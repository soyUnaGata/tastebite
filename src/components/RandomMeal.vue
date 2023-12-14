<template>
    <div class="random__meal-main">
        <div class="random__meal-details d-flex" v-for="meal in randomMeal">
            <div class="random__meal">
                <img class="random__meal-img" :src="meal.thumb" :alt="meal.meal">
            </div>

            <div class="random__meal-description d-flex flex-column justify-content-center align-items-center g-20 w-100">
                <div class="d-flex flex-column align-items-center justify-content-center g-20">
                    <h2 class="random__meal-header">{{ meal.meal }}</h2>
                    <limited-text :text="meal.instructions" :limit="300" />
                </div>

                <div class="manage__button d-flex align-items-center g-20">
                    <a :href="`/meal/${meal.id}`" class="show__full-btn">Show Full Recipe</a>
                    <button type="button" @click="handleChangeMeal" class="handle__meal">Get Another Recipe</button>
                </div>
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
    methods: {
        handleChangeMeal() {
            this.$emit('change-meal');
        }
    },
    mounted() {
        this.randomMeal;
    }
})
</script>

<style scoped>
.random__meal-main {
    background-color: var(--secondary-light);
    color: var(--headlines);
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
    font-size: 50px;
}

.manage__button {
    font-size: 18px;
}

.show__full-btn {
    text-decoration: underline;
}

.handle__meal {
    border-radius: 15px;
    padding: 10px;
    cursor: pointer;
    outline: none;
    border: 1px solid var(--secondary);
    background-color: var(--secondary);
    color: var(--white);
}
</style>