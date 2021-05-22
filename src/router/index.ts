import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre/onde',
    name: 'Onde',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Onde.vue')
  },
  {
    path: '/sobre/porque',
    name: 'Porque',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Porque.vue')
  },
  {
    path: '/expo',
    name: 'Expo',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Expo.vue')
  },
  {
    path: '/inscricoes',
    name: 'Inscricoes',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Inscricoes.vue')
  },
  {
    path: '/oradores',
    name: 'Oradores',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Oradores.vue')
  },
  {
    path: '/contatos',
    name: 'Contatos',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Contatos.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
