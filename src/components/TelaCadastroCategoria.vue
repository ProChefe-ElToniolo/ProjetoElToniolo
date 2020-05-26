<template>
<<<<<<< HEAD
  <div>
    <h1>Bem Vindo a Tela Cadastro Categoria</h1>
    <button @click="IrParaTelaMenuAdmin">IrParaTelaMenuAdmin</button>
=======
  <div class="princ">
    <h1>Bem Vindo a Tela Cadastro Categoria</h1>
>>>>>>> 86f35e84788cd449bf0ab9ea5aa217efbfc0a783
    <input type="text" placeholder="Digite o nome da Categoria" id="txtCategoria" v-model="nome" />
    <span v-if="verificado">Digite algo!</span>
    <input type="file" />
    <ul>
      <li v-for="cat in categorias" :key="cat.id">{{cat.nome}}</li>
    </ul>

    <button @click="SalvarCategoria">Salvar Categoria</button>
    <button @click="ExcluirCategoria">Excluir Categoria</button>
    <button @click="AlterarCategoria">Alterar Categoria</button>

    <table border="5" style="cursor:pointer">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cat in categorias" :key="cat.id" @click="SelecionarCategoria(cat.id)">
          <td>{{cat.id}}</td>
          <td>{{cat.nome}}</td>
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
      nome: "",
      catId: 0,
      categorias: [],
      categoriasAlterar: [],
      verificado: false
    };
  },
  methods: {
<<<<<<< HEAD
    IrParaTelaMenuAdmin: function() {
      this.$router.push("/ViewTelaMenuAdmin");
    },

=======
>>>>>>> 86f35e84788cd449bf0ab9ea5aa217efbfc0a783
    SalvarCategoria: function() {
      var txtCategoria = document.getElementById("txtCategoria");
      console.log(txtCategoria);
      if (txtCategoria.value != "") {
        this.verificado = false;
        axios
          .post("http://localhost:55537/api/Categoria", {
            nome: this.nome
          })
          .then(resp => {
            console.log(resp.data);
            this.categorias.push({
              nome: this.nome
            });
          });
      } else {
        this.verificado = true;
      }
      window.location.reload();
    },

    SelecionarCategoria: function(id) {
      this.categorias.filter(c => {
        if (c.id == id) {
          this.categoriasAlterar = c;
        }
      });
      this.nome = this.categoriasAlterar.nome;
    },

    AlterarCategoria: function() {
      axios
        .put(
          "http://localhost:55537/api/Categoria/" + this.categoriasAlterar.id,
          {
            nome: this.nome
          }
        )
        .then(resp => console.log(resp.data));
      window.location.reload();
    },

    ExcluirCategoria: function() {
      console.log(this.catId);
      axios
        .delete(
          "http://localhost:55537/api/Categoria/" + this.categoriasAlterar.id
        )
        .then(resp => console.log(resp.data));
      window.location.reload();
    }
  },

  mounted() {
    axios
      .get("http://localhost:55537/api/Categoria")
      .then(categoria => (this.categorias = categoria.data));
  }
};
</script>

<style>
</style>