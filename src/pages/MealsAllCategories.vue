<template>
    <div class="category container m-top-50">
        <category-item v-for="category in categories" :category="category" :key="category.id" />
    </div>
</template>

<script>
import CategoryService from '@/services/category-service.js';
import CategoryItem from '@/components/CategoryItem.vue';

export default ({
    components: {
        CategoryItem
    },
    data() {
        return {
            categories: [],
        }
    },
    methods: {
        async getCategorys() {
            this.categories = await CategoryService.getAll();
        }
    },
    async mounted() {
        await this.getCategorys()
    },
})
</script>

<style scoped>
.category {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

@media (max-width: 1200px) {
    .category {
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 25px;
    }
}

@media (max-width: 992px) {
    .category {
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 25px;
    }
}

@media (max-width: 768px) {
    .category {
        grid-template-columns: 1fr 1fr;
        margin-top: 25px;
    }
}

@media (max-width: 576px) {
    .category {
        grid-template-columns: 1fr;
        margin-top: 25px;
    }
}

@media (min-width: 280px) and (max-width: 375px) {
    .category {
        grid-template-columns: 1fr;
        margin-top: 25px;
    }
}
</style>