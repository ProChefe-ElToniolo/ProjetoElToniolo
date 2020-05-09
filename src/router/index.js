import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewTelaPrincipal from '../views/ViewTelaPrincipal.vue'
import ViewTelaPedidos from '../views/ViewTelaPedidos.vue'
import ViewTelaLogin from '../views/ViewTelaLogin.vue'
import ViewTelaCadastro from '../views/ViewTelaCadastro.vue'
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
    path: '/ViewTelaLogin',
    name: 'ViewTelaLogin',
    component: ViewTelaLogin
  },{
    path: '/ViewTelaCadastro',
    name: 'ViewTelaCadastro',
    component: ViewTelaCadastro
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
