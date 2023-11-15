import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
const LoginView = () => import("../views/Auth/LoginView.vue");
const RegisterView = () => import("../views/Auth/RegisterView.vue");
const IndexHome = () => import("../views/Home/IndexHome.vue");
const ProductsPage = () => import("../views/Products/ProductsPage.vue");
const ProductPage = () => import("../views/Products/ProductPage.vue");
const AboutView = () => import("@/views/About/AboutView.vue");
const LikeView = () => import("@/views/Like/LikeView.vue");
const CartView = () => import("../views/Cart/CartView.vue");
const ProfilView = () => import("../views/Profil/ProfilView.vue");

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
          path: '/product/:id',
          name: 'product',
          component: ProductPage,
        },
        {
          path: '/about',
          name: 'about',
          component: AboutView,
        },
        {
          path: '/like',
          name: 'like',
          component: LikeView,
        },
        {
          path: '/cart',
          name: 'cart',
          component: CartView,
        },
        {
          path: '/profil',
          name: 'profil',
          component: ProfilView,
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
