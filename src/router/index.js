import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewTelaPrincipal from '../views/ViewTelaPrincipal.vue'
import ViewTelaCadastro from '../views/ViewTelaCadastro.vue'
import ViewTelaMenuAdmin from '../views/ViewTelaMenuAdmin.vue'
import Ingredientes from '../views/Ingredientes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ViewTelaPrincipal',
    component: ViewTelaPrincipal
  }, {
    path: '/ViewTelaCadastro',
    name: 'ViewTelaCadastro',
    component: ViewTelaCadastro
  }, {
    path: '/ViewTelaMenuAdmin',
    name: 'ViewTelaMenuAdmin',
    component: ViewTelaMenuAdmin
  }, {
    path: '/Ingredientes',
    name: 'Ingredientes',
    component: Ingredientes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
