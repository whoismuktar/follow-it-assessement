import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/inbox',
    name: 'inbox',
    component: () => import('../views/Inbox.vue')
  },
  {
    path: '/archive',
    name: 'archive',
    component: () => import('../views/Inbox.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
