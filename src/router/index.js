import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/Register'
import About from '../components/About'
import HomePage from '../components/HomePage'

const routes = [
  {
      path: '/',
      name: HomePage,
      component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
