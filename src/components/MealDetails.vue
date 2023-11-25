<template>
    <div>
        <div v-for="details in mealDetails" :key="meal">
            <h1>{{ details.meal}}</h1>
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
        watch:{
            'meal': function () {
                console.log(this.mealDetails, 'in details')
            }
        },
        data(){
            return {
            }
        },
        mounted() {

        },
        computed: {
            mealDetails() {
             return this.meal ? [this.meal] : [];
            },
        },

}
</script>