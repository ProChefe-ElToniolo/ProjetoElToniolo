import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewTelaPrincipal from '../views/ViewTelaPrincipal.vue'
import ViewTelaPedidos from '../views/ViewTelaPedidos.vue'
import ViewTelaCadastro from '../views/ViewTelaCadastro.vue'
import ViewTelaCardapio from '../views/ViewTelaCardapio.vue'
import ViewTelaMenuAdmin from '../views/ViewTelaMenuAdmin.vue'
import ViewTelaCadastroProdutos from '../views/ViewTelaCadastroProdutos.vue'
import ViewTelaCadastroCategoria from '../views/ViewTelaCadastroCategoria.vue'
import ViewTelaCadastroUsuario from '../views/ViewTelaCadastroUsuario.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'ViewTelaPrincipal',
    component: ViewTelaPrincipal
  },{
    path: '/ViewTelaPedidos',
    name: 'ViewTelaPedidos',
    component: ViewTelaPedidos
  },{
    path: '/ViewTelaCadastro',
    name: 'ViewTelaCadastro',
    component: ViewTelaCadastro
  },{
    path: '/ViewTelaCardapio',
    name: 'ViewTelaCardapio',
    component: ViewTelaCardapio
  },{
    path: '/ViewTelaMenuAdmin',
    name: 'ViewTelaMenuAdmin',
    component: ViewTelaMenuAdmin
  },{
    path: '/ViewTelaCadastroProdutos',
    name: 'ViewTelaCadastroProdutos',
    component: ViewTelaCadastroProdutos
  },{
    path: '/ViewTelaCadastroCategoria',
    name: 'ViewTelaCadastroCategoria',
    component: ViewTelaCadastroCategoria
  },{
    path: '/ViewTelaCadastroUsuario',
    name: 'ViewTelaCadastroUsuario',
    component: ViewTelaCadastroUsuario
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
