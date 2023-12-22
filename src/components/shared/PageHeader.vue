<template>
    <div class="header__container d-flex w-100">
        <div @click="toogleMenu" class="header__burger" :class="{ active: isMenuActive }">
            <span></span>
        </div>

        <div class="header__inner d-flex align-items-center">
            <a :href="'/'">
                <logo-company @click="$router.push('/')" />
            </a>

            <nav class="menu" :class="{ active: isMenuActive }">
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
    },
    data() {
        return {
            isMenuActive: false,
        };
    },
    methods: {
        toogleMenu() {
            this.isMenuActive = !this.isMenuActive;
            document.body.classList.toggle('lock', this.isMenuActive);
        }
    }
})
</script>

<style>
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

.header__burger {
    display: none;
}

@media (max-width: 1200px) {
    .header__inner {
        padding: 10px 0px;
    }
}

@media (max-width: 992px) {
    body.lock {
        overflow: hidden;
    }

    .header__inner {
        padding: 10px 0px;
        justify-content: center;
    }

    .header__container {
        display: flex;
        align-items: center;
    }

    .header__burger {
        display: block;
        position: relative;
        width: 30px;
        height: 20px;
        z-index: var(--for-burger);
    }

    .header__burger::before,
    .header__burger::after {
        content: '';
        background-color: var(--primary);
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
        transition: all 0.3s ease 0s;
    }

    .header__burger::before {
        top: 0;
    }

    .header__burger::after {
        bottom: 0;
    }

    .header__burger span {
        position: absolute;
        background-color: var(--primary);
        left: 0;
        height: 2px;
        width: 100%;
        top: 9px;
        transition: all 0.3s ease 0s;
    }

    .header__burger.active::before {
        transform: rotate(45deg);
        top: 9px;
    }

    .header__burger.active::after {
        transform: rotate(-45deg);
        bottom: 9px;
    }

    .header__burger.active span {
        transform: scale(0);
    }

    .menu {
        position: fixed;
        top: 0;
        left: -100%;
        width: 50%;
        height: 100%;
        overflow: auto;
        background-color: var(--secondary-light);
        padding: 100px 0 0 0;
        transition: all 0.3s ease 0s;
        font-size: 35px;
        z-index: var(--for-search-list);
    }

    .menu.active {
        left: 0;
    }

    .menu__list {
        position: relative;
        z-index: var(--for-burger);
        flex-direction: column;
        align-items: center;
    }

    .menu__list li {
        margin: 0 0 20px 20px;
    }
}

@media (max-width: 576px) {
    .menu {
        width: 100%;
    }
}
</style>