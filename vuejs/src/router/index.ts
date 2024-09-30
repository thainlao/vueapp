import About from '@/components/About.vue'
import Cart from '@/components/Cart.vue'
import Favorites from '@/components/Favorites.vue'
import Home from '@/components/Home.vue'
import AllOrders from '@/pages/AllOrders.vue'
import SingleProductDetailed from '@/pages/SingleProductDetailed.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/:itemId',
      name: 'SingleProduct',
      component: SingleProductDetailed,
      props: true
    },
    {
      path: '/orders',
      name: 'AllOrders',
      component: AllOrders,
    }
  ]
})

export default router
