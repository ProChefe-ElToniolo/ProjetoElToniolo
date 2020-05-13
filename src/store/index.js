import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const axios = require('axios')

export default new Vuex.Store({
  state: {
    clientes:[],
    produtos:[]
  },
  mutations: {
  },
  computed:{

  }, mounted(){
    axios.get("http://localhost:55537/api/Cliente").then(cliente => this.clientes = cliente.data)
    axios.get("http://localhost:55537/api/Produto").then(produto => this.produtos = produto.data)
  },
  actions: {
  },
  modules: {
  }
})
