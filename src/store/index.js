import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const axios = require('axios')

export default new Vuex.Store({
  state: {
    clientes:[]
  },
  mutations: {
  },
  computed:{

  }, mounted(){
    axios.get("http://localhost:55537/api/Cliente").then(cliente => this.clientes = cliente.data)
  },
  actions: {
  },
  modules: {
  }
})
