<template>
    <div class="container">
        <div class="meal__header">
            <h1>{{ meal.meal}}</h1>
        </div>
        <div class="meal__details d-flex">
            <img :src="meal.thumb" class="meal__img" :alt="meal.meal">

            <div class="meal__about d-flex flex-column g-20">
                <div class="meal__category d-flex g-20">
                    <span>Category:
                    <h3>{{ meal.category}}</h3>
                    </span>
                    <span>Area:
                        <h3>{{ meal.area}}</h3>
                    </span>
                </div>

                <div class="meal__ingridients d-flex" v-for="(item, key) in meal.ingredients" :key="key">
                    

                   <span v-if="item.ingridient !== ''">  {{ item.measure }}</span>
                   <span>{{ item.ingridient}}</span>
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
.meal__img {
    width: 420px;
    height: 410px;
    border-radius: 10px;
    object-fit: cover;
}

</style>