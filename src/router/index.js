import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import Manage from '@/views/Manage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import useUserStore from '@/stores/user'
const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'about',
    path: '/about',
    component: About,
  },
  {
    name: 'manage',
    path: '/manage',
    component: Manage,
    meta: { requiresAuth: true },
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' },
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500',
})

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    next()
    return
  }
  const userStore = useUserStore()
  if (userStore.userLoggedIn) {
    next()
  } else {
    next({ name: 'home' })
  }
})

export default router
