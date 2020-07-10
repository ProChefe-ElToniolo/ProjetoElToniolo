<template>
  <div id="princ">
    <h4>INGREDIENTES</h4>
    <div class="meu-box">
      <input type="text" class="inputz" placeholder="Nome do Ingrediente" v-model="nome" />
      <label id="label-Ing">Nome do Ingrediente</label>
    </div>
     <div class="meu-box">
      <input type="text" class="inputz" placeholder="Quantidade" v-model="estoque" />
      <label id="label-qtd">Quantidade</label>
    </div>

    <label>Categoria</label>
    <br />
    <select v-model="idCatIng" class="cbx">
      <option value="0" select disabled>Escolha a categoria</option>
      <option :value="cat.id" v-for="cat in categorias" :key="cat.id">{{cat.nome}}</option>
    </select>
    <br />
    <button @click="salvar" class="button">Salvar</button>
    <table border="1" class="tabela-st">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Categoria</th>
          <th>Estoque</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ing, index) in ingredientes" :key="index" @click="selecionar(ing.id)">
          <td>{{ing.nome}}</td>
          <td>{{ing.nomeCategoria}}</td>
          <td>{{ing.estoque}}</td>
          <td @click="excluir(ing.id)">
            <img id="imgLixo" src="../imagens/lixo.png" alt />
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
      ingredientes: [],
      categorias: [],
      nome: "",
      estoque: "",
      idCatIng: 0,
      idExclur: "",
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
      });
      if (this.existe) {
        alert("entrouAlterar");
        axios.put(
          "http://localhost:55537/api/Ingrediente/" + this.ingEscolhido.id,
          {
            nome: this.nome,
            id_categoria: this.idCatIng,
            estoque: this.estoque
          }
        )
      } else {
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
      console.log(this.ingEscolhido);
      this.nome = this.ingEscolhido.nome;
      this.idCatIng = this.ingEscolhido.id_categoria;
      this.estoque = this.ingEscolhido.estoque;
    },
    excluir: function(idIng) {
      axios.delete(
        "http://localhost:55537/api/Ingrediente/" + idIng
      );
      // this.pedidosEntregador.splice(this.pedidosEntregador.indexOf(id), 1);
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
.ingredientes tr:hover {
  background: rgb(109, 235, 224);
  color: #ffffff;
}
.ingredientes tr {
  color: white;
  background-color: rgba(0, 0, 0, 0.445);
  height: auto;
  cursor: pointer;
}
.ingredientes td {
  padding: 5px;
}
.ingredientes {
  position: absolute;
  margin: 30px 0px 40px 10px;
  width: 40%;
}


#imgLixo{
  margin: 0px 0px 0px 160px;
  padding: 2px;
}
</style>