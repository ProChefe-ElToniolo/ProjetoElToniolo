<template>
  <div class="princ">
    <h4>INGREDIENTES</h4>
    <label>Nome</label>
    <br />
    <input type="text" v-model="nome" />
    <br />
    <label>Estoque</label>
    <br />
    <input type="number" v-model="estoque" />
    <br />
    <label>Categoria</label>
    <br />
    <select v-model="idCatIng">
      <option value="0" select disabled>Escolhan a categoria</option>
      <option :value="cat.id" v-for="cat in categorias" :key="cat.id">{{cat.nome}}</option>
    </select>
    <br />
    <button @click="excluir">Excluir</button>
    <button @click="salvar">Salvar</button>
    <table border="1" class="ingredientes">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Categoria</th>
          <th>Estoque</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ing, index) in ingredientes" :key="index" @click="selecionar(ing.id)">
          <td>{{ing.nome}}</td>
          <td>{{ing.nomeCategoria}}</td>
          <td>{{ing.estoque}}</td>
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
      ingredientes: [],
      categorias: [],
      nome: "",
      estoque: 0,
      idCatIng: 0,
      ingEscolhido: [],
      existe: false
    };
  },
  methods: {
    salvar: function() {
      this.ingredientes.filter(e => {
        if (e.id == this.ingEscolhido.id) {
          this.existe = true;
        }
      })
      if (this.existe) {
        alert("entrouAlterar");
        axios.put(
          "http://localhost:55537/api/Ingrediente/" + this.ingEscolhido.id,
          {
            nome: this.nome,
            id_categoria: this.idCatIng,
            estoque: this.estoque
          }
        );
      } 
      else {
        axios.post("http://localhost:55537/api/Ingrediente", {
          nome: this.nome,
          id_categoria: this.idCatIng,
          estoque: this.estoque
        });
      }
      this.existe = false;
    },
    selecionar: function(id) {
      this.ingredientes.filter(u => {
        if (u.id == id) {
          this.ingEscolhido = u;
        }
      });
      console.log(this.ingEscolhido)
      this.nome = this.ingEscolhido.nome;
      this.idCatIng = this.ingEscolhido.id_categoria;
      this.estoque = this.ingEscolhido.estoque;
    },
    excluir: function() {
      console.log(this.ingEscolhido.id);
      axios.delete(
        "http://localhost:55537/api/Ingrediente/" + this.ingEscolhido.id
      );
    }
  },
  mounted() {
    axios
      .get("http://localhost:55537/api/Ingrediente")
      .then(ingrediente => (this.ingredientes = ingrediente.data));
    axios
      .get("http://localhost:55537/api/Categoria")
      .then(cat => (this.categorias = cat.data));
    console.log(this.categorias);
  }
};
</script>

<style>
body {
  width: 100%;
  height: 100%;
  background-color: white;
}
.ingredientes tr:hover {
  background: rgb(109, 235, 224);
  color: #ffffff;
}
.ingredientes tr {
  cursor: pointer;
}
</style>