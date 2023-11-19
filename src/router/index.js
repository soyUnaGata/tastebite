import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import RecipeItemDetails from '../views/RecipeItemDetails.vue'


const routes = [
  {
    path: '/',
    name: 'main',
    component: HomePage
  },
  {
    path: '/recipes/:id',
    name: 'recipe-details',
    component: RecipeItemDetails
  },
  {
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: function () {
    //   return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
