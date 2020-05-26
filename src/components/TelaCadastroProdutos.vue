<template>
<<<<<<< HEAD
  <div>
    <h1>Bem Vindo a Tela Cadastro Produtos</h1>
    <button @click="IrParaTelaMenuAdmin">IrParaTelaMenuAdmin</button>
    <br />
    <img id="img" src="cadastrarProd.png" alt />
    <br />
    <!-- <button type="text" @click="pegarImagem()">Imagem</button><br> -->
    <!-- <div v-for="(produto, index) in carregar" :key="index"> -->
    <label>Nome</label>
    <br />
    <input type="text" v-model="nome" />
    <br />
    <label>Descrição</label>
    <br />
    <textarea id="inputMulti" rows="10" cols="38" v-model="descricao" maxlength="200"></textarea>
    <br />
    <label>Preço</label>
    <br />
    <input type="text" v-model="preco" />
    <br />
    <label>Imagens</label>
    <br />
    <label>Categorias</label>
    <br />
    <select v-model="idCat">
      <option value="0" selected disabled>Categoria desejada</option>
      <option :value="cat.id" v-for="cat in categorias" :key="cat.id">{{cat.nome}}</option>
    </select>
    <br />
    <label>Medidas</label>
    <br />
    <select v-model="medida">
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
    <table border="1" class="produtos">
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
    <button @click="salvar">Salvar</button>
    <button @click="excluir">Excluir</button>
    <button @click="ingredientes">Ingredientes</button>
    <div v-if="visivel" v-show="true">
      <TelaIngredientes />
=======
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
        />
        <label for="nomeCompleto" class="label-nome">Nome Completo</label>
      </div>
      <input type="text" v-model="nome" placeholder="Nome" class="inputFormulario" />
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
      <select v-model="idCat" id="cbx">
        <option value="0" selected disabled>Categoria desejada</option>
        <option :value="cat.id" v-for="cat in categorias" :key="cat.id">{{cat.nome}}</option>
      </select>
      <br />
      <select v-model="medida" id="cbx">
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
>>>>>>> 86f35e84788cd449bf0ab9ea5aa217efbfc0a783
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import TelaIngredientes from "../components/TelaIngredientes.vue";
const axios = require("axios");
export default {
  components: {
    TelaIngredientes
  },
=======
const axios = require("axios");
export default {
>>>>>>> 86f35e84788cd449bf0ab9ea5aa217efbfc0a783
  data: function() {
    return {
      categorias: [],
      nome: "",
      descricao: "",
      preco: "",
      idCat: 0,
      imagem: "",
      medida: "",
      prods: [],
      ProdSelecionado: [],
      existe: false,
<<<<<<< HEAD
      visivel: false
=======
      invalido: false
>>>>>>> 86f35e84788cd449bf0ab9ea5aa217efbfc0a783
    };
  },
  methods: {
    IrParaTelaMenuAdmin: function() {
      this.$router.push("/ViewTelaMenuAdmin");
<<<<<<< HEAD
      console.log(this.$store.state.prods);
=======
>>>>>>> 86f35e84788cd449bf0ab9ea5aa217efbfc0a783
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
<<<<<<< HEAD
=======
      console.log(this.ProdSelecionado);
>>>>>>> 86f35e84788cd449bf0ab9ea5aa217efbfc0a783
      this.nome = this.ProdSelecionado.nome;
      this.descricao = this.ProdSelecionado.descricao;
      this.preco = this.ProdSelecionado.preco;
      this.medida = this.ProdSelecionado.medida_tamanho;
      this.idCat = this.ProdSelecionado.id_categoria;
      this.imagem = this.ProdSelecionado.imagem;
<<<<<<< HEAD
    },
    excluir: function() {
      axios.delete(
        "http://localhost:55537/api/Produto/" + this.ProdSelecionado.id
      );
    },
    ingredientes: function() {
      this.visivel = true;
=======
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
>>>>>>> 86f35e84788cd449bf0ab9ea5aa217efbfc0a783
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
<<<<<<< HEAD
=======
body {
  width: 100%;
  height: 100%;
}
.princ {
  background-color: rgb(255, 255, 255);
}
>>>>>>> 86f35e84788cd449bf0ab9ea5aa217efbfc0a783
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
<<<<<<< HEAD
}
.produtos tr:hover {
  background: rgb(109, 235, 224);
=======
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
  text-align: left;
  padding: 10px;
}
.produtos td {
  padding: 5px;
}
.produtos tr:hover {
  background: rgba(73, 73, 73, 0.644);
>>>>>>> 86f35e84788cd449bf0ab9ea5aa217efbfc0a783
  color: #ffffff;
}
.produtos tr {
  cursor: pointer;
<<<<<<< HEAD
=======
}
#ingredientes {
  position: absolute;
}
#cbx {
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
  width: 100%;
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
>>>>>>> 86f35e84788cd449bf0ab9ea5aa217efbfc0a783
}
</style>