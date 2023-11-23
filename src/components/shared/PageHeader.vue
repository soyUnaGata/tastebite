<template>
    <div class="container d-flex">
        <div class="header__inner d-flex justify-content-between align-items-center">
            <logo-company/>

            <nav class="menu">
                <ul class="menu__list d-flex align-items-center">
                <li class="menu__list-item">
                    <a class="menu__list-link" href="">Homepage</a>
                </li>
                <li class="menu__list-item">
                    <a class="menu__list-link" href="">Reciepe Page</a>
                </li>
                <li class="menu__list-item">
                    <a class="menu__list-link" href="">Pages</a>
                </li>
                <li class="menu__list-item">
                    <a class="menu__list-link" href="">Buy</a>
                </li>
                </ul>
            </nav>
        

            <div class="profile__section">
                <li class="profile">
                <a class="profile-link" href="">
                    <img class="account__icon" src="@/assets/img/account.svg" alt="" />
                </a>
                </li>

                <div class="burger-menu__mobile d-none">
                <div class="burger-menu__about"></div>
                </div>
            </div>
              
        </div>
  </div>
</template>

<script>
    import LogoCompany from './LogoCompany.vue';
    import SearchBar from './SearchBar.vue';

    export default ({
        components: {
            LogoCompany,
            SearchBar
        }
    })
</script>

<style scoped>
.container {
  max-width: 1240px;
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

.account__icon {
  width: 30px;
}
</style>