<template>
    <div class="d-flex w-100">
        <div class="header__inner d-flex align-items-center">
            <a :href="'/'">
                <logo-company />
            </a>

            <nav class="menu">
                <ul class="menu__list d-flex align-items-center">
                    <li class="menu__list-item">
                        <a class="menu__list-link" :href="'/'">Homepage</a>
                    </li>
                    <li class="menu__list-item">
                        <a class="menu__list-link" :href="'/categories'">Categories</a>
                    </li>
                    <li class="menu__list-item">
                        <a class="menu__list-link" href="">Pages</a>
                    </li>
                    <!-- <li class="menu__list-item">
                        <a class="menu__list-link" href="">Buy</a>
                    </li> -->
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import LogoCompany from './LogoCompany.vue';

export default ({
    components: {
        LogoCompany,
    }
})
</script>

<style>
.container {
    max-width: 1240px;
    margin: 0 auto;
}

.menu {
    margin: 0 auto;
}

.header__inner {
    padding: 30px 0px;
    width: 100%;
}

.menu__list-link {
    font-size: 18px;
    color: var(--primary);
    font-weight: 600;
}

.menu__list {
    gap: 30px;
}
</style>