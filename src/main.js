import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMask from 'v-mask'
<<<<<<< HEAD
Vue.use(VueMask)
=======
Vue.use(VueMask);

>>>>>>> a645dfc06d5713197f37e26151cef5c390986041

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
