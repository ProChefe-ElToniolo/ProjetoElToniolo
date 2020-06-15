<template>
  <div class="princ">
    <h1>Bem Vindo a Tela Cadastro Categoria</h1>
    <input type="text" placeholder="Digite o nome da Categoria" onkeypress="return event.charCode >96 && event.charCode <= 255 || event.charCode == 32 || event.charCode > 57 && event.charCode<=90" id="txtCategoria" v-model="nome" />
    <span v-if="verificado">Digite algo!</span>
    <input type="file" />
    <ul>
      <li v-for="cat in categorias" :key="cat.id">{{cat.nome}}</li>
    </ul>

    <button @click="SalvarCategoria">Salvar Categoria</button>
    <button @click="trocar">Excluir Categoria</button>
    <!-- v-bind:aparecer="true" -->
    <div id="decidir" v-if="aparecer">
      <button @click="decisao">OK</button>
      <button @click="fechar">FECHAR</button>
    </div>
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
      aparecer: false,
      categoriasAlterar: [],
      verificado: false
    };
  },
  methods: {
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
          "http://localhost:55537/api/Categoria/"+this.categoriasAlterar[0].id,
          {
            nome: this.nome
          }
        )
        .then(resp => console.log(resp.data));
      window.location.reload();
    },
    decisao: function(){
        this.ExcluirCategoria();
        this.aparecer = false;
    },

    ExcluirCategoria: function() {
      console.log(this.catId);
      axios
      .delete(
          "http://localhost:55537/api/Categoria/"+this.categoriasAlterar.id
        )
        .then(resp => console.log(resp.data));
      window.location.reload();
    },
    trocar: function(){
      this.aparecer = true;
    },
    fechar: function(){
      this.aparecer = false;
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
#decidir{
  margin: 10px;
  width: 100px;
  height: 100px;
  background-color: cadetblue;
  border: 3px solid black;
}

</style>