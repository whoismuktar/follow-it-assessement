import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: "inbox"
  },
  {
    path: '/inbox',
    name: 'inbox',
    component: () => import('../views/Inbox.vue')
  },
  {
    path: '/archive',
    name: 'archive',
    component: () => import('../views/Archive.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
