<template>
  <div class="wrapper d-flex flex-column">
    <div class="header__wrapper d-flex g-10 align-items-center">
      <div class="header__items container d-flex g-10 align-items-center w-100">
        <page-header />
        <search-bar />
        <profile-section />
      </div>
    </div>

    <div class="main">
      <router-view></router-view>
    </div>

    <div class="footer__wrapper m-top-50">
      <page-footer />
    </div>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import PageHeader from '@/components/shared/PageHeader.vue';
import PageFooter from '@/components/shared/PageFooter.vue';
import SearchBar from '@/components/shared/SearchBar.vue';
import ProfileSection from './components/shared/ProfileSection.vue';



export default {
  components: {
    PageHeader,
    SearchBar,
    ProfileSection,
    PageFooter
  },
};
</script>

<style>
.wrapper {
  min-height: 100vh;
}

.main {
  flex: 1;
}

.header__wrapper {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: var(--white);
  z-index: var(--for-header);
}

.footer__wrapper {
  width: 100%;
  background-color: var(--light-gray);
  flex-shrink: 0;
}

@media (max-width: 1200px) {

  .header__items,
  .main {
    padding: 15px 25px;
  }
}

@media (max-width: 768px) {

  .header__items,
  .main {
    padding: 20px 30px;
  }
}

@media (max-width: 576px) {
  .header__items {
    padding: 15px;
  }

  .main {
    padding: 0;
  }
}
</style>
