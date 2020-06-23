import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMask from 'v-mask'
<<<<<<< HEAD
Vue.use(VueMask)
=======
Vue.use(VueMask);

>>>>>>> 64e33a9eb4b7b9204c04dcf6b5f7f115c154088a

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
