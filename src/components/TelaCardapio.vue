<template>
    <div class="topo">
      <h1>Bem-Vindo à tela de Cardapio</h1>
      <button @change="categoriaa">teste</button>
      <select v-model="catId" @change="listar">
        <option value="0">Todas as categorias</option>
        <option :value="cat.id" v-for="cat in categorias" :key="cat.id">{{cat.nome}}</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Id Categoria</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="prod in produtos" :key="prod.id">
            <td>{{prod.nome}}</td>
            <td>{{prod.id_categoria}}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
const axios = require("axios");

export default {
  data: function() {
    return {
      categorias: [],
      catId: 0,
      produtos: [],
      produtosSelecionados: [],
      catsProds: []
    };
  },
  methods: {
    listar: function() {
      this.produtos = this.produtosSelecionados;
      if (this.catId != 0) {
        this.produtos = this.produtos.filter(p => {
          if (p.id_categoria == this.catId) {
            return p;
          }
        });
        console.log(this.produtos);
      }
    },
    categoriaa: function() {
      this.catsProds = this.produtosSelecionados.filter(u => {
        this.categorias.filter(e => {
          if(e.id == u.id_categoria){
            return e
          }
        });
      });
      console.log(this.catsProds);
    }
  },
  mounted() {
    axios
      .get("http://localhost:55537/api/Categoria")
      .then(categoria => (this.categorias = categoria.data));
    axios
      .get("http://localhost:55537/api/Produto")
      .then(produto => (this.produtos = produto.data));
    axios
      .get("http://localhost:55537/api/Produto")
      .then(produto => (this.produtosSelecionados = produto.data));
  }
};
</script>

<style>
#teste {
  border: 2px solid black;
  color: red;
  background-color: black;
  margin: 150px 0 0 0;
}

.meio{
  display: flex;
  position: absolute;
  height: auto;
  width: 71.72%;
  margin-left: 14.4%;
  z-index: 1000;
}

#teste1 {
  border: 2px solid black;
  color: black;
  background-color: green;
  cursor: pointer;
}

.topo{
  margin: 72px 0 0 0;
  height: auto;
}
</style>