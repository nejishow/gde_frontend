import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard';
import GBC from '../views/gestion_bon_commande';
import GBP from '../views/gestion_budget_previsionel';
import GMP from '../views/gestion_mandats_paiements';
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/GBC',
    name: 'GBC',
    component: GBC
  },
  {
    path: '/GBP',
    name: 'GBP',
    component: GBP
  },
  {
    path: '/GMP',
    name: 'GMP',
    component: GMP
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
