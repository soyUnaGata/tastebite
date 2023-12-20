<template>
    <div class="footer__inner container">
        <div class="logo__section d-flex justify-content-between">

            <div class="copyrights d-flex flex-column g-20">
                <logo-company />
                <div class="d-flex g-20">
                    <p class="copyright-year"> &copy; {{ year }}</p>
                    <span class="copyright-text">All rights reserved</span>
                </div>
            </div>

            <div class="feedback__subscription">
                <nav class="footer__menu d-flex align-items-center g-20">
                    <ul class="footer__list d-flex flex-column align-items-center">
                        <li class="menu__list-item">
                            <a class="footer__list-link" href="#">Feedback</a>
                        </li>
                    </ul>

                    <ul class="footer__subscription d-flex flex-column justify-content-center align-items-center g-20">
                        <li class="menu__list-item d-flex flex-column">
                            <form
                                class="form__subscription d-flex flex-column justify-content-center align-items-center g-20">
                                <h3 class="form__subscription-text">Enjoy weekly hand picked recipes and recommendations
                                </h3>
                                <label class="form__label" for="email">
                                    <svg class="email__img" xmlns="http://www.w3.org/2000/svg" height="35"
                                        viewBox="0 -960 960 960" width="35">
                                        <path
                                            d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                                    </svg>
                                    <input class="form__input" id="email" type="text">
                                </label>
                            </form>
                        </li>
                        <button type="button">Subscribe</button>
                    </ul>
                </nav>
            </div>
        </div>


    </div>
</template>

<script>
import LogoCompany from './LogoCompany.vue';

export default ({
    components: {
        LogoCompany
    },
    data() {
        return {
            year: new Date().getFullYear(),
        }
    }
})
</script>

<style scoped>
.footer__inner {
    padding: 50px 0px;
}

.footer__subscription {
    background-color: var(--secondary-light);
    padding: 20px 15px;
    border-radius: 15px;
}

.form__subscription-text {
    text-wrap: wrap;
    width: 350px;
    padding: 15px 10px;
    text-align: center;
}

.form__label {
    border-radius: 100px;
    height: 56px;
    position: relative;
    border: 1.5px solid var(--light-gray);
    background-color: var(--white);
    width: 350px;
}

.form__input {
    background-color: initial;
    border-radius: 100px;
    border: none;
    font-size: 20px;
    height: 100%;
    line-height: 35px;
    margin-left: 69px;
    outline: none;
    padding: 10px 10px;
    width: calc(100% - 70px);
}

.email__img {
    position: absolute;
    top: 10px;
    left: 21px;
    fill: var(--primary);
}
</style>