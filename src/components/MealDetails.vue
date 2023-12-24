<template>
    <div class="meal__content container">
        <nav class="meal__navigation m-top-50">
            <ul class="d-flex align-items-center justify-content-between">
                <li><return-button @click="back" /></li>
                <li><bookmark-button @click="toogleFavorites(meal)" :favorited="favorited" />
                </li>
            </ul>
        </nav>
        <div class="meal__header m-top-30">
            <h1>{{ meal.meal }}</h1>
        </div>
        <div class="separator m-top-5"></div>
        <div class="meal__details m-top-30 d-flex g-30">
            <div class="meal__information d-flex g-30">
                <div class="meal__ingridients d-flex flex-column g-20">
                    <img :src="meal.thumb" class="meal__img" :alt="meal.meal">
                    <div class="meal__ingridients-list d-flex flex-column g-10">
                        <div class="custom d-flex flex-column"
                            v-for="(item, key) in meal.ingredients?.filter(item => !!item.ingridient) " :key="key">
                            <label :for="item.ingridient" class="checkbox__item d-flex g-10">
                                <input class="checkbox-input d-flex flex-column" type="checkbox" :id="item.ingridient" />
                                <span class="checkmark"></span>
                                <span> {{ item.measure }}</span>
                                <span> {{ item.ingridient }}</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="meal__description-about">
                    <div class="meal__about d-flex flex-column g-20">
                        <div class="meal__category d-flex align-items-center justify-content-between g-20">
                            <div class="meal__category-details d-flex g-20">
                                <span class="meal__item">Category:
                                    <span>{{ meal.category }}</span>
                                </span>
                                <span class="meal__item">Area:
                                    <span>{{ meal.area }}</span>
                                </span>
                            </div>

                            <show-button v-if="meal.youtube !== ''" :videoLink="meal.youtube"
                                :buttonText="'Show video instruction'" />

                        </div>

                        <div class="meal__description d-flex flex-column g-10">
                            <p class="meal__description-header">Instruction:</p>
                            <div class="meal__description-text" v-html="formattedInstructions"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="separator m-top-30"></div>

    </div>
</template>

<script>
import ShowButton from './shared/ShowButton.vue';
import ReturnButton from './shared/ReturnButton.vue';
import BookmarkButton from './shared/BookmarkButton.vue';
import FavoritesMeals from '@/services/favorites-meals.js'

export default {
    components: {
        ShowButton,
        ReturnButton,
        BookmarkButton
    },
    props: {
        meal: {
            type: Object,
        },
    },
    data() {
        return {
            favorited: false,
            favorites: FavoritesMeals.favorites
        }
    },
    mounted() {
    },
    methods: {
        formatTextToHTML: function (str) {
            const newLine = '\r\n';
            if (!str) return '';
            if (str.startsWith(newLine)) str = str.replace(newLine, '');

            let formatted = '';
            const stepRegex = /^\d+/gs;
            const parts = str.split(newLine);

            for (let i = 0; i < parts.length; i++) {
                const part = parts[i];

                if (!stepRegex.test(part)) {
                    formatted += `<p>${part}</p>`;
                    continue;
                }

                formatted += `<p>${part} ${parts[i + 2]}</p>`;
                i += 2;
            }

            return formatted;
        },

        back() {
            history.back();
        },

        toogleFavorites(meal) {
            if (FavoritesMeals.exists(meal)) {
                FavoritesMeals.remove(meal);
            } else {
                FavoritesMeals.add(meal);
            }

            this.favorited = FavoritesMeals.exists(this.meal);
        }
    },
    computed: {
        formattedInstructions() {
            if (!this.meal?.instructions) return '';
            return this.formatTextToHTML(this.meal.instructions)
        }
    },
    mounted() {

        this.favorited = FavoritesMeals.exists(this.meal);
    }
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

.meal__item>span {
    font-size: 20px;
    font-weight: 600;
    color: var(--primary);
}

.checkbox__item {
    font-size: 22px;
    color: var(--headlines);
    cursor: pointer;
}

.custom {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

}

.custom input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 15px;
}

.custom:hover input~.checkmark {
    background-color: #ccc;
}

.custom input:checked~.checkmark {
    background-color: var(--secondary);
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.custom input:checked~.checkmark:after {
    display: block;
}

.custom .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.custom input:checked~.checkmark~span {
    text-decoration: line-through;
    text-decoration-color: var(--secondary);
}

.meal__description-header {
    font-size: 24px;
    font-weight: 600;
    color: var(--headlines);
}

.meal__description-text {
    font-size: 20px;
}

@media (max-width: 992px) {

    .meal__details {
        margin-top: 15px;
    }

    .meal__category {
        flex-direction: column;
        align-items: flex-start;
    }

    .meal__navigation {
        max-width: 100%;
    }

    .meal__header {
        font-size: 30px;
        margin-top: 15px;
    }

    .meal__img {
        width: 320px;
        height: 310px;
    }
}

@media (max-width: 768px) {
    .meal__content {
        padding: 0 10px;
    }

    .meal__information {
        flex-direction: column;
    }

}

@media (max-width: 576px) {
    .meal__ingridients {
        align-items: center;
    }
}

@media (min-width: 280px) and (max-width: 375px) {
    .meal__navigation {
        margin-top: 25px;
    }

    .meal__content {
        padding: 0;
    }

    .meal__img {
        width: 250px;
        height: 230px;
    }
}
</style>