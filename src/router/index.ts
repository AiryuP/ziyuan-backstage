import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('../views/panel/index.vue')
        },
        {
          path: '/code',
          name: 'code',
          component: () => import('../views/code/index.vue')
        },
        {
          path: '/add',
          name: 'add',
          component: () => import('../views/addTiny/index.vue')
        },
      ],
      redirect: '/index'
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
