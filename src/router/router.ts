import { createRouter, createWebHistory } from 'vue-router'
import HabitsPage from '../pages/HabitsPage.vue'
import MoodPage from '../pages/MoodPage.vue'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/mood',
      name: 'mood',
      component: MoodPage,
    },
    {
      path: '/habits',
      name: 'habits',
      component: HabitsPage,
    },
  ],
})

export default router
