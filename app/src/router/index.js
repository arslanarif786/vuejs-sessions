import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginViews.vue')
    },
    {
      path: '/registration',
      name: 'Registration',
      component: () => import('@/views/RegistrationViews.vue')
    },
    {
      path: '/forgottenpassword',
      name: 'Forgottenpassword',
      component: () => import('@/views/ForgottenpasswordViews.vue')
    }
  ]
})

export default router
