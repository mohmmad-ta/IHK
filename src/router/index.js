import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsPage.vue'),
    },
    {
      path: '/ourWork',
      name: 'ourWork',
      component: () => import('../views/OurWorkPage.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/showNews/:id',
      name: 'showNews',
      component: () => import('../views/ShowNews.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");
  if (to.name === 'admin' && token === null) next({ name: 'login' })
  next()
})

export default router
