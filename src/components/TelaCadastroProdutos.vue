<template>
  <div id="fundo1">
    <div class="princ">
      <h4>Cadastro Produtos</h4>
      <br />
      <img id="img" src="cadastrarProd.png" alt />
      <br />
      <div class="meu-box">
        <input
          type="text"
          class="input-nome"
          placeholder="Nome Completo"
          v-model="nome"
        />
        <label for="nomeCompleto" class="label-nome">Nome Completo</label>
      </div>
      <br />
      <textarea
        id="inputMulti"
        rows="10"
        cols="38"
        v-model="descricao"
        maxlength="200"
        placeholder="Descrição"
      ></textarea>
      <br />
      <input type="text" v-model="preco" placeholder="Preço" class="inputFormulario" />
      <br />
      <select v-model="idCat" class="cbx">
        <option value="0" selected disabled>Categoria desejada</option>
        <option :value="cat.id" v-for="cat in categorias" :key="cat.id">{{cat.nome}}</option>
      </select>
      <br />
      <select v-model="medida" class="cbx">
        <option value="0" selected disabled>Unidade de Medida</option>
        <option>Kg</option>
        <option>L</option>
        <option>g</option>
        <option>Familia</option>
        <option>Exagerada</option>
        <option>Média</option>
        <option>Broto</option>
        <option>Grande</option>
      </select>
      <br />
      <table class="produtos">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(prod, index) in prods" :key="index" @click="selecionar(prod.id)">
            <td>{{prod.nome}}</td>
            <td>{{prod.descricao}}</td>
            <td>{{prod.preco}}</td>
          </tr>
        </tbody>
      </table>
      <button class="button" @click="salvar">Salvar</button>
      <button class="button" @click="excluir">Excluir</button>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data: function() {
    return {
      categorias: [],
      nome: "",
      descricao: "",
      preco: "",
      idCat: 0,
      imagem: "",
      medida: 0,
      prods: [],
      ProdSelecionado: [],
      existe: false,
      invalido: false
    };
  },
  methods: {
    IrParaTelaMenuAdmin: function() {
      this.$router.push("/ViewTelaMenuAdmin");
    },
    salvar: function() {
      this.prods.filter(e => {
        if (e.id == this.ProdSelecionado.id) {
          this.existe = true;
        }
      });
      if (this.existe) {
        alert("entrouAlterar");
        axios.put(
          "http://localhost:55537/api/Produto/" + this.ProdSelecionado.id,
          {
            nome: this.nome,
            descricao: this.descricao,
            preco: this.preco,
            medida_tamanho: this.medida,
            id_categoria: this.idCat,
            imagem: this.imagem
          }
        );
      } else {
        alert("entrouSalvar");
        console.log(this.idCat);
        axios.post("http://localhost:55537/api/Produto", {
          nome: this.nome,
          descricao: this.descricao,
          preco: this.preco,
          medida: this.medida,
          id_categoria: this.idCat,
          imagem: this.imagem
        });
      }
      this.existe = false;
    },
    selecionar: function(id) {
      this.selecionado = id;
      this.prods.filter(f => {
        if (f.id == id) {
          this.ProdSelecionado = f;
        }
      });
      console.log(this.ProdSelecionado);
      this.nome = this.ProdSelecionado.nome;
      this.descricao = this.ProdSelecionado.descricao;
      this.preco = this.ProdSelecionado.preco;
      this.medida = this.ProdSelecionado.medida_tamanho;
      this.idCat = this.ProdSelecionado.id_categoria;
      this.imagem = this.ProdSelecionado.imagem;
    },
    excluir: function() {
      if (this.ProdSelecionado.id == null) {
        axios.delete(
          "http://localhost:55537/api/Produto/" + this.ProdSelecionado.id
        );
        this.invalido = false;
      } else {
        this.invalido = true;
      }
    }
  },
  mounted() {
    axios
      .get("http://localhost:55537/api/Categoria")
      .then(categoria => (this.categorias = categoria.data));
    axios
      .get("http://localhost:55537/api/Produto")
      .then(produto => (this.prods = produto.data));
  }
};
</script>

<style>
body {
  width: 100%;
  height: 100%;
}
.princ {
  background-color: rgb(255, 255, 255);
}
#imgProd {
  width: 80px;
  height: 80px;
}
#output {
  width: 80px;
  height: 80px;
}
#inputMulti {
  word-wrap: break-word;
  height: 90px;
  resize: none;
}
.produtos {
  border-collapse: collapse;
}
.produtos tr:focus-within{
  background: rgba(214, 62, 62, 0.644);
  color: #ffffff;
}
.produtos,
th,
td {
  border: 1px solid black;
}
.produtos th {
  color: white;
  background: rgb(34, 34, 34);
  text-align: left;
  padding: 10px;
}
.produtos td {
  padding: 5px;
}
.produtos tr:hover {
  background: rgba(73, 73, 73, 0.644);
  color: #ffffff;
}
.produtos tr {
  cursor: pointer;
}
#ingredientes {
  position: absolute;
}
.cbx {
  margin: 10px 0px 0px 0px;
  border: 1px solid black;
  height: 20px;
  color: rgba(0, 0, 0, 0.788);
  border-radius: 6px;
}
.inputFormulario {
  margin: 10px 0px 0px 0px;
}
.button {
  margin: 10px 0px 0px 0px;
}

/* d */
.conteudo {
  width: 600px;
  margin: 0 auto;
  padding-top: 40px;
}

.meu-box {
  position: relative;
}

.input-nome {
  width: 300px;
  position: relative;
  font-size: 16px;
  color: #5b5b5b;
  border: 1px rgba(83, 83, 83, 0.658) solid;
  padding: 10px 10px 10px 15px;
  box-sizing: content-box;
  z-index: 2;
}

.label-nome {
  width: 90px;
  height: 14px;
  margin-left: 5px;
  position: absolute;
  background: white;
  color: rgb(90, 90, 90);
  font-weight: bold;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 0.5s;
}

.input-nome:focus + .label-nome {
  color: rgb(90, 90, 90);
  top: -25%;
  transition: 0.2s;
    z-index: 3;
}
</style>