import { createRouter, createWebHistory } from 'vue-router'
import HabitsPage from './pages/HabitsPage.vue'
import MoodPage from './pages/MoodPage.vue'
import HomePage from './pages/HomePage.vue'
import SettingsPage from './pages/SettingsPage.vue'
import StatsPage from './pages/StatsPage.vue'

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
    {
      path: '/stats',
      name: 'habstatsits',
      component: StatsPage,
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsPage,
    },
  ],
})

export default router
