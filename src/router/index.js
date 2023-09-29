import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const LoginView = () => import("../views/Auth/LoginView.vue");
const RegisterView = () => import("../views/Auth/RegisterView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ]
})

export default router
