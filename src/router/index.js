import { createRouter, createWebHistory } from "vue-router";
import MealsListFavorite from "@/pages/MealsListFavorite.vue";
import HomePage from "@/pages/HomePage.vue";
import Search from "@/pages/Search.vue";
import MealItemDetails from "@/pages/MealItemDetails.vue";
import MealsCategories from "@/pages/MealsCategories.vue";
// import RecipeItemDetails from '../pages/RecipeItemDetails.vue'
// import { App } from 'vue';

const routes = [
  {
    path: "/",
    name: "main",
    component: HomePage,
  },
  {
    path: "/search/:query",
    name: "search",
    component: Search,
  },
  {
    path: "/meal/:id",
    name: "meal-details",
    component: MealItemDetails,
  },

  {
    path: "/favorites",
    name: "favorites",
    component: MealsListFavorite,
  },

  {
    path: "/categories",
    name: "categories",
    component: MealsCategories,
  },
  //   {
  //     path: '/recipes/results',
  //     name: 'recipe-searched-list',
  //     component: MealsList
  //   },
  //   {
  //     path: '/recipes/:id',
  //     name: 'recipe-details',
  //     component: RecipeItemDetails
  //   },
  {
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: function () {
    //   return import(/* webpackChunkName: "about" */ '../pages/AboutView.vue')
    // }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
