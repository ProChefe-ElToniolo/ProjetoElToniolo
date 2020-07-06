<template>
  <div class="princ">
    <h1>Bem Vindo a Tela Cadastro Categoria</h1>
    <div class="meu-box">
      <input
        class="inputz"
        placeholder="Nome da Categoria"
        v-mask="'AAAAAAAAAAA'"
        id="txtCategoria"
        v-model="nome"
      />
      <label for="nomeCompleto" class="label-nome">Nome da Categoria</label>
    </div>
    <span v-if="verificado">Digite algo!</span>
    <button @click="salvar" class="button">Salvar</button>
    <!-- v-bind:aparecer="true" -->
    <div class="modal-container">
      <div class="popup" v-if="aparecer">
        <div class="modal">
          <button @click="decisao">OK</button>
          <button @click="fechar">FECHAR</button>
        </div>
      </div>
    </div>

    <table border="5" style="cursor:pointer" class="tabela-st">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cat in categorias" :key="cat.id" @click="SelecionarCategoria(cat.id)">
          <td>{{cat.id}}</td>
          <td>{{cat.nome}}</td>
          <td @click="excluir(prod.id)">
            <img id="lixo" src="../imagens/lixo.png" alt />
          </td>
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
      verificado: false,
      produtos: []
    };
  },
  methods: {
    salvar: function() {
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
          "http://localhost:55537/api/Categoria/" +
            this.categoriasAlterar[0].id,
          {
            nome: this.nome
          }
        )
        .then(resp => console.log(resp.data));
      window.location.reload();
    },

    decisao: function() {
      this.ExcluirCategoria();
      this.aparecer = false;
    },

    utilizaOuNProdutoCategoria: function() {
      let contador = 0;
      this.produtos.filter(p => {
        if (this.categoriasAlterar.id == p.id_categoria && contador < 1) {
          alert("Existe um produto que utiiza desta categoria");
          contador++;
          this.aparecer = false;
        }
      });
    },

    excluir: function() {
      console.log(this.catId);
      axios
        .delete(
          "http://localhost:55537/api/Categoria/" + this.categoriasAlterar.id
        )
        .then(resp => console.log(resp.data));
      window.location.reload();
    },

    trocar: function() {
      this.aparecer = true;
      this.utilizaOuNProdutoCategoria();
    },

    fechar: function() {
      this.aparecer = false;
    }
  },

  mounted() {
    axios
      .get("http://localhost:55537/api/Categoria")
      .then(categoria => (this.categorias = categoria.data));

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
  background-color: rgba(133, 131, 131, 0.76);
  overflow: auto;
}
#decidir {
  margin: 10px;
  width: 50% 0 0 50%;
  height: 100px;
  background-color: cadetblue;
  border: 3px solid black;
}
.modal-container{
  width: 100px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.507);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal{
  background: white;
  width: 60%;
  min-width: 300px;
  padding: 40px;
  border: 10px solid 0988b7a;
  box-shadow: 0 0 0 10px;
}
</style>