import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewTelaPrincipal from '../views/ViewTelaPrincipal.vue'
import ViewTelaCadastro from '../views/ViewTelaCadastro.vue'
import ViewTelaCardapio from '../views/ViewTelaCardapio.vue'
import ViewTelaMenuAdmin from '../views/ViewTelaMenuAdmin.vue'
import GerenciamentoPedidos from '../views/GerenciamentoPedidos.vue'
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
    path: '/ViewTelaCardapio',
    name: 'ViewTelaCardapio',
    component: ViewTelaCardapio
  }, {
    path: '/ViewTelaMenuAdmin',
    name: 'ViewTelaMenuAdmin',
    component: ViewTelaMenuAdmin
  }, {
    path: '/GerenciamentoPedidos',
    name: 'GerenciamentoPedidos',
    component: GerenciamentoPedidos
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
