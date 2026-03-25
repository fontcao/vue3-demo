import { createRouter, createWebHistory } from 'vue-router'
import Home from '../App.vue'
import Template1 from '../template/template1.vue'
import Template2 from '../template/template2.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/template1',
    name: 'Template1',
    component: Template1
  },
  {
    path: '/template2',
    name: 'Template2',
    component: Template2
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
