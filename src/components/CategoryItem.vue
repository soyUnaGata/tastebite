<template>
    <a :href="`/categories/${category.category}`" class="category__card d-flex flex-column">
        <img class="category__img" :src="category.img" alt="">
        <div class="category__about d-flex flex-column align-items-center">
            <h3 class="category__category">{{ category.category }} </h3>
            <p class="category__description">{{ category.description.replace(/\[\d+\]/g, '').replace(/\[\w+\]/g, '') }}</p>
        </div>
    </a>
</template>

<script>
export default ({
    props: {
        category: {
            type: Object
        }
    }
})
</script>

<style scoped>
.category__card {
    width: 300px;
    cursor: pointer;
    overflow: hidden;
}

.category__img {
    max-width: 100%;
    object-fit: cover;
    height: 300px;
    border-radius: 50%;
}

.category__about {
    gap: 10px;
    padding: 15px;
}

.category__headline {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.category__headline:hover {
    white-space: normal;
    overflow: visible;
    text-overflow: initial;
    padding-bottom: 10px;
}

@media (max-width: 992px) {

    .category__card {
        width: 240px;
    }

    .category__img {
        height: 220px;
    }
}

@media (max-width: 768px) {

    .category__card {
        width: 240px;
    }

    .category__img {
        height: 220px;
    }
}

@media (max-width: 576px) {

    .category__card {
        width: 240px;
    }

    .category__img {
        height: 220px;
    }
}

@media (min-width: 280px) and (max-width: 375px) {
    .category__card {
        width: 240px;
    }

    .category__img {
        height: 220px;
    }
}
</style>