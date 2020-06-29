<template>
  <div class="topo">
    <h1>Bem Vindo a Tela Pedidos</h1>
    <div v-for="prods in produtos" :key="prods.id">
      <div id="pizzas">
        {{prods.nome}}
        </div>
    </div>

  </div>
</template>

<script>
const axios = require("axios");
export default {
  data: function() {
    return {
      produtos: []

    };
  },
  methods: {
    filtrar() {
      alert("clicado");
    }
  },
  mounted(){
    axios
      .get("http://localhost:55537/api/Produto")
      .then(produto => (this.produtos = produto.data));
  }
};
</script>

<style>
body {
  width: 100%;
  height: 100%;
  background-color: white;
}
#pizzas{
  background-color: black;
  color: white;
  width: 60px;
  height: 60px;
  margin: 0px 0px 0px 5px;
}
</style>