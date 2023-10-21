import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
const LoginView = () => import("../views/Auth/LoginView.vue");
const RegisterView = () => import("../views/Auth/RegisterView.vue");
const IndexHome = () => import("../views/Home/IndexHome.vue");
const ProductsPage = () => import("../views/Products/ProductsPage.vue");
const ProductPage = () => import("../views/Products/ProductPage.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
      children: [
        {
          path: '/',
          name: 'index',
          component: IndexHome,
        },
        {
          path: '/products',
          name: 'products',
          component: ProductsPage,
        },
        {
          path: '/product',
          name: 'product',
          component: ProductPage,
        }
      ]
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
