import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import BlogView from '../views/BlogView.vue'
import Shop from '../views/Shop.vue'
import ShopDetails from '../views/ShopDetails.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Checkout from '../views/Checkout.vue'
import LoginView from '../views/LoginView.vue'
import SignView from '../views/SignView.vue'
import Sucss from '../views/Sucss.vue'

const routes = [
  { 
    path: '/', 
    name: 'home', 
    component: HomeView,
  },
  { 
    path: '/about',
    name: 'about', 
    component: AboutView
  },
  { 
    path: '/contact',
    name: 'contact', 
    component: ContactView
  },
  { 
    path: '/blog',
    name: 'blog', 
    component: BlogView
  },
  { 
    path: '/shop',
    name: 'shop', 
    component: Shop
  },
  { 
    path: '/shop/:id',
    name: 'shopdetails', 
    component: ShopDetails
  },
  { 
    path: '/shoppingcart',
    name: 'shoppingcart', 
    component: ShoppingCart
  },
  { 
    path: '/checkout',
    
    name: 'checkout', 
    component: Checkout
  },
  { 
    path: '/login',
    name: 'login', 
    component: LoginView
  },
  { 
    path: '/sign',
    name: 'sign', 
    component: SignView
  },
  { 
    path: '/sucss',
    name: 'sucss', 
    component: Sucss
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
