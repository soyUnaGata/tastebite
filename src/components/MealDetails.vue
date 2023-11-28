<template>
    <div class="container">
        <div class="meal__header">
            <h1>{{ meal.meal}}</h1>
        </div>
        <div class="separator"></div>
        <div class="meal__details d-flex g-30">
            <img :src="meal.thumb" class="meal__img" :alt="meal.meal">

            <div class="meal__about d-flex flex-column g-20">
                <div class="meal__category d-flex g-20">
                    <span class="meal__item">Category:
                    <span>{{ meal.category}}</span>
                    </span>
                    <span class="meal__item">Area:
                        <span>{{ meal.area}}</span>
                    </span>
                </div>

                <div class="meal__ingridients d-flex g-10" v-for="(item, key) in meal.ingredients" :key="key">
                    <input v-if="item.ingridient !== ''" class="checkbox" type="checkbox"  :id="item.measure"/>
                    <label :for="item.measure" class="checkbox__item d-flex g-10">
                        <span> {{ item.measure }}</span>
                        <span>{{ item.ingridient}}</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
        props:{
            meal: {
                type: Object,
            },
        },
        // watch:{
        //     'meal': function () {
        //         console.log(this.mealDetails, 'in details')
        //     }
        // },
        data(){
            return {
            }
        },
        mounted() {

        },
        // computed: {
        //     mealDetails() {
        //      return this.meal ? [this.meal] : [];
        //     },
        // },

}
</script>

<style scoped>
.meal__header {
    font-size: 36px;
    color: var(--headlines);
}

.separator {
    width: 100%;
    border: 1px solid var(--primary);
    margin-top: 5px;
}

.meal__details {
    margin-top: 30px;
}
.meal__img {
    width: 420px;
    height: 410px;
    border-radius: 10px;
    object-fit: cover;
}

.meal__item {
    font-size: 18px;
    color: var(--headlines);
}
.meal__item > span {
    font-size: 20px;
    font-weight: 600;
    color: var(--primary);
}

</style>